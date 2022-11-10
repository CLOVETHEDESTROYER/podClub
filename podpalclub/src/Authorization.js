import {useEffect, useState} from "react";
import './App.css';
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import axios from 'axios'


function Authorization() {

    const CLIENT_ID = "385c3b67ed5d43c983962f88570282e9"
      const REDIRECT_URI = "http://localhost:3000/callback"
      const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
      const RESPONSE_TYPE = "token"
  
      const [token, setToken] = useState("")
      const [searchKey, setSearchKey] = useState("")
      const [artists, setArtists]= useState("")
      
  
  
      useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
  
        if(!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
  
          console.log(token)
  
          window.location.hash = ""
          window.localStorage.setItem("token", token)
  
        }
  
        setToken(token)
  
      }, [])
  
      const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }
  
    const searchArtist = async (e) => {
      e.preventDefault()
      const {data} = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
              Authorization: `Bearer ${token}`
          },
          params: {
              q: searchKey,
              type: "artist"
          }
      })
  
      console.log(data);
  
      setArtists(data.artists.items)
      
  
  }  
  
  const renderArtists = () => {
    return artists.map(artist => (
      <div className="tinderCards">
      <TinderCard
              className="swipe"
                key={artist.name}  
                preventSwipe={['up', 'down']}  
                >
                  
        <div 
        style={{ backgroundImage: `url(${artist.images[0].url})` }}
                    className="card"
        key={artist.id}>
            {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            {artist.name}
        </div>
        </TinderCard>
        </div>
        
    ))
     
  }

  const [people] = useState([
    {
      name: "carlos",
      url: "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2022/05/19/4eb393f3-d671-4d58-8680-89ccd6607acf_5e3be874.jpg?itok=CEBu_LXQ&v=1652966452",
    },
    {
      name: "Larry",
      url: "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2022/05/19/4eb393f3-d671-4d58-8680-89ccd6607acf_5e3be874.jpg?itok=CEBu_LXQ&v=1652966452",
    },
    {
      name: "Barlos",
      url: "https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg"
    },
    {
      name: "Darlos",
      url: "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2022/05/19/4eb393f3-d671-4d58-8680-89ccd6607acf_5e3be874.jpg?itok=CEBu_LXQ&v=1652966452",
    },
  ]);
  
  
    return (
      <div className="App">
          {!token ? 
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                          to Spotify</a>  
                                
          : <button onClick={logout}>Logout</button>}
          
  
  
          {token ?
            <form onSubmit={searchArtist}>
              <input type="text"onChange={e => setSearchKey(e.target.value)}/>
              <button type="submit"> Search </button>
            </form>
  
            : <h2>Please Login</h2>
            
            }
            <div>
            <h1>Tinder Cards</h1>

        <div className="tinderCards__cardContainer">

            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}  
                preventSwipe={['up', 'down']}  

                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card"
                    >
                        <h3>{person.name}</h3>

                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
            
            
            
      </div>
    );
    
  }


  export default Authorization;
