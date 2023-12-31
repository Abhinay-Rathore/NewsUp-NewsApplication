import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
   apiKey = process.env.REACT_APP_NEWS_API
  static defaultProps = {
    country:'in',
    pageSize : 6,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
    
  }

   capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page:1,
      totalResults: 0
    }
      document.title = `NewsUp - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f5a053e72db24489853e79e2c7f5e745&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    this.setState({
       articles: parsedData.articles,
       totalResults:parsedData.totalResults,
       loading:false,
       
      })
      this.props.setProgress(100);

  }

  async componentDidMount(){
      this.updateNews();
  }

 fetchMoreData = async () => {
   this.setState({page: this.state.page + 1});
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f5a053e72db24489853e79e2c7f5e745&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   let data = await fetch(url);
   let parsedData = await data.json();
   this.setState({
      articles:this.state.articles.concat( parsedData.articles),
      totalResults:parsedData.totalResults,
      // loading:false
     
     })
  };

  render() {
    
    return (
     <>
        <h1 className="text-center" style = {{margin:'30px 0px', marginTop:'90px'}}>NewsUp - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}

         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner/>}
          

        > 
  
        <div className="container">
        <div className="row">

           {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                        <NewsItems title = {element.title ? element.title.slice(0,44) : ""} description = {element.description ? element.description.slice(0,88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author = {element.author} date={element.publishedAt}/>
                    </div>
          })}
             
         </div>
       
         </div>
         </InfiniteScroll>
      </> 
      
    )
  }
}

export default News