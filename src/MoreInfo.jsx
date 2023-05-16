import { useParams } from "react-router";
import './App.css'
import React, { useState, useEffect } from "react";
import axios from "axios";

function MoreInfo ({data}){
    const params = useParams();
    const element = data.find((element) => element.selected_id === params.id)
    console.log(element.character)
    
    
    return (
        <>
        <div className="moreBody">
            <div className="title">

        <h1>{element.title}</h1>
        <p>Director: {element.director}</p>
        <p>Producer: {element.producer}</p>
            </div>

        <div>
            <h4>Description</h4>
            <p>{element.opening_crawl}</p>
        </div>
        <hr/>
        <div className="characters">
            <h4>Characters</h4>
            <ul>
            <ul>
             {element.characters.map((characterURL, index) => (
              <Character key={index} url={characterURL} />
            ))}
          </ul>
                    </ul>
        </div>
        <hr/>
        <div className="planets">
            <h4>Planets</h4>
            <ul>
            {element.planets.map((planetURL, index) => (
              <Planets key={index} url={planetURL} />
            ))}
          </ul>
        </div>
        <hr/>
        <div className="species">
            <h4>Species</h4>
            <ul>
             {element.species.map((speciesURL, index) => (
              <Species key={index} url={speciesURL} />
            ))}
          </ul>
        </div>
        <hr/>
        <div className="starships">
            <h4>Starships</h4>
            <ul>
            {element.starships.map((starshipURL, index) => (
              <Starship key={index} url={starshipURL} />
            ))}
          </ul>
        </div>
        <hr/>
        <div className="vehicles">
            <h4>Vehicles</h4>
            <ul>

            {element.vehicles.map((vehicleURL, index) => (
              <Vehicle key={index} url={vehicleURL} />
            ))}
            </ul>
        </div>
        </div>
        </>
    )
}

function Vehicle({ url }) {
    const [vehicle, setVehicle] = useState(null);
  
    useEffect(() => {
      axios
        .get(url)
        .then((response) => setVehicle(response.data))
        .catch((error) => console.log(error));
    }, [url]);
  
    if (!vehicle) {
      return <li>Loading vehicle...</li>;
    }
  
    return <li>{vehicle.name}</li>;
  }
  
  function Starship({ url }) {
    const [starship, setStarship] = useState(null);
  
    useEffect(() => {
      axios
        .get(url)
        .then((response) => setStarship(response.data))
        .catch((error) => console.log(error));
    }, [url]);
  
    if (!starship) {
      return <li>Loading starship...</li>;
    }
  
    return <li>{starship.name}</li>;
  }
  
  function Character({ url }) {
    const [character, setCharacter] = useState(null);
  
    useEffect(() => {
      axios
        .get(url)
        .then((response) => setCharacter(response.data))
        .catch((error) => console.log(error));
    }, [url]);
  
    if (!character) {
      return <li>Loading character...</li>;
    }
  
    return <li>{character.name}</li>;
  }
  
  function Species({ url }) {
    const [species, setSpecies] = useState(null);
  
    useEffect(() => {
      axios
        .get(url)
        .then((response) => setSpecies(response.data))
        .catch((error) => console.log(error));
    }, [url]);
  
    if (!species) {
      return <li>Loading species...</li>;
    }
  
    return <li>{species.name}</li>;
  }
  function Planets({ url }) {
    const [planets, setPlanets] = useState(null);
  
    useEffect(() => {
      axios
        .get(url)
        .then((response) => setPlanets(response.data))
        .catch((error) => console.log(error));
    }, [url]);
  
    if (!planets) {
      return <li>Loading planets...</li>;
    }
  
    return <li>{planets.name}</li>;
  }
export default MoreInfo



