import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import location from '../images/place.svg';
function Single(){
    const [single,setSingle] = useState([]);
    const [gal,setGal] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://traveller.talrop.works/api/v1/places/view/`+ `${id}`)
        .then(function(response){
            setSingle(response.data.data);
            setGal(response.data.data.gallery)
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    },[]);
    return(
            <>
                <Helmet>
                    <title>{`${single.name} | Moke Travel`}</title>
                </Helmet>
                <div className="single">
                    <h1>{single.name}</h1>
                    <small>{single.category_name}</small>
                    <p className="pa"><img src={location} alt={single.id} />{single.location}</p>
                    <div className="gallary">
                        <div className="left">
                            <img src={single.image} alt="img" />
                        </div>
                        <div className="right">
                            {gal.map((item)=>(
                                <div className="image">
                                    <img key={item.id} src={item.image} alt="single" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <h3>Place Details</h3>
                    <p>{single.description}</p>
                </div>
            </>
    )
}
export default Single;