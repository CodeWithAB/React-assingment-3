import './App.css';
import { useEffect, useState } from "react";
import axios from "axios"


const moviesUrl = "https://www.omdbapi.com/?apikey=45f0782a&s=war"
let picture=[]

function App() {
  const [movies,setPosts] = useState(null)
  const [searchMov,setSearchMov] = useState('')

  useEffect(() => {
    axios.get(moviesUrl).then(response => {
      console.log(response.data.Search)
      setPosts(response.data.Search)
      picture = response.data.Search
    })
  },[])

  const pictureSearch = (e) => {
    if (movies) {
      setPosts(picture.filter(movie => movie.Title.toLowerCase().includes(e)))
    }
  }
  
  return (
    <div className="App">
      <br/>
          <input type="text" placeholder='search for Movie Title ...' onChange={(e) => pictureSearch(e.target.value.toLowerCase())} />
          <br/>
       {movies? movies.map((movie,i)=> <div >
           <img src={movie.Poster}></img>
           <p>{movie.Title}</p>
         </div>): <p> Empty <p/>
     }
    </div>
  );
}

export default App;
