import React from 'react'

const NewsItems = (props)=> {
 
    let {title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div className="container my-3">
        <div className="card" >
           <img style={{height:'190px'}} src={!imageUrl ? "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" : imageUrl } className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text" style={{marginTop:'2px'}} >{description}...</p>
              <p className="card-text" style={{marginBottom:'2px'}} ><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
              <a href={newsUrl} rel="noreferrer" target = "_blank" className="btn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItems
