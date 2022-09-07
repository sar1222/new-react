
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import Content from './content';
import Navbar2 from './navbar2';
import { Loading } from './loading';
// import SimpleBottomNavigation from './navigation';




function App() {
  const [post,setState] = useState('')
  const[showLaoder,setShowLoader] = useState(false)

  useEffect(()=>{
  setShowLoader(true)
    fetch('http://www.omdbapi.com/?apikey=2b338e80&s=speed')
    .then(data=>data.json())
    .then(data=>{
      setState(data.Search)
      setShowLoader(false);
    })
    

  },[])
  
  const getSearch=(arg)=>{
    fetch('http://www.omdbapi.com/?apikey=2b338e80&s='+arg)
    .then(data=>data.json())
    .then(data=>{
      setState(data.Search)
    })
  }
  const getFilterItem=(name,type)=>{
    fetch(`http://www.omdbapi.com/?apikey=2b338e80&s=${name}&type=${type}`)
    .then(data=>data.json())
    .then(data=>{
      console.log(data);
      setState(data.Search)
    })
  }
  const getYear=(name,type, Year)=>{
    fetch(`http://www.omdbapi.com/?apikey=2b338e80&s=${name}&type=${type}&y=${Year}`)
    .then(data=>data.json())
    .then(data=>{
      console.log(data);
      setState(data.Search)
    })
  }

  
  return (
    <div className="App">
      <Navbar/>
      {/* <SimpleBottomNavigation/> */}
      <Navbar2 getSearch={getSearch} getFilterItem={getFilterItem} showLaoder={showLaoder} posts={post} getYear={getYear}/>
      <div style={{minHeight:"100vh"}}>
      <Content  posts={post}/>

      </div>

      <Footer  />
      
    </div>
  );


}

export default App;
