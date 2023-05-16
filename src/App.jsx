import { useState, useEffect } from 'react'
import './App.css'
// import { Routes, Route} from 'react-router'

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import MoreInfo from './MoreInfo'
import Home from './Home'


function App() {
   // for loading the data
   const [loading, setLoading] = useState(true);

   // to view the loaded data
   const [data, setData] = useState(null);
 
   // to render any error encountered
   const [error, setError] = useState(null)
 
   // making the api call to render the data
   useEffect(() => {
     fetch("https://swapi.dev/api/films")
     .then((response) => response.json())
     .then((actualData) => {
       console.log(actualData.results)
       console.log(data)
       setData(actualData.results)
       setLoading(false)
     })
     .catch((err) => console.log(err))
   }
   
   , []
   )
  return (
    
    <Router>
    {/* <Switch> */}
    <Routes>
    <Route exact path="/" element={<Home data={data} loading={loading} error={error}/>}/>
    <Route path="/movies/:selected_id" element={<MoreInfo data={data} />} />
    </Routes>
  {/* </Switch> */}
  </Router>
  )
  }
export default App
