import React,  { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import newsItems from './newsItems';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App =()=> {
  const pageSize=6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router basename="/NewsUp-NewsApplication">
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress} 
         />
          <Routes>
            <Route exact path="/NewsUp-NewsApplication" element={<News setProgress={setProgress} apiKey = {apiKey} key= "general" pageSize={pageSize} country="in" category = "general"/>} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey = {apiKey} key= "business" pageSize={pageSize} country="in" category = "business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey = {apiKey} key= "entertainment" pageSize={pageSize} country="in" category = "entertainment"/>} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey = {apiKey} key= "general" pageSize={pageSize} country="in" category = "general"/>} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey = {apiKey} key= "health" pageSize={pageSize} country="in" category = "health"/>} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey = {apiKey} key= "science" pageSize={pageSize} country="in" category = "science"/>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey = {apiKey} key= "sports" pageSize={pageSize} country="in" category = "sports"/>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey = {apiKey} key= "technology" pageSize={pageSize} country="in" category = "technology"/>}/>
          </Routes>
       </Router>
      </div>
    )
  
}

export default App;

