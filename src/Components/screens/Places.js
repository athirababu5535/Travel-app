import React, { useEffect, useState } from "react";
import location from '../images/place.svg';
import axios from "axios";
import { Link } from "react-router-dom";
function Places(){
    const [place,setPlace] = useState([]);
    useEffect(()=>{
        axios.get("https://traveller.talrop.works/api/v1/places/")
        .then(function(response){
            setPlace(response.data.data);
        })
        .catch(function(error){
            console.log(error);
        })
    },[]);
    return(
        <div className="place">
            <h1>Welcome</h1>
            <p>Explore the world around you</p>
            <ul>
                {place.map((pl)=>(
                    <li key={pl.id}>
                        <Link to={`/place/${pl.id}`}>
                            <div className="ima">
                                <img src={pl.image} alt="img" />
                            </div>
                            <div className="para">
                                <h1>{pl.name}</h1>
                                <p><img src={location} alt="icon" /> {pl.location}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Places;