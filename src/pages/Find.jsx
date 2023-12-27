import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Find = (props) => {
    const { allVol, searchVol, setSearchVol } = props;
    const [data, setData] = useState({
        name: "",
        location: ""
    });

    const nav = useNavigate();


    const volCities = allVol.map(x => x.location);
    const filter = volCities.filter((x, index) => volCities.indexOf(x) === index);


    const search = () => {
        if (data.name.length < 2) {
            alert('name must be longer than 2 chars!')
        } else if (data.location === "") {
            alert('choose city!')
        } else {
            const findVol = allVol.filter(x => x.location === data.location);
            setSearchVol(findVol);
            nav('/all');
        }
    };

  return (
    <div>
        <input type="text" 
        placeholder='name of volunteer:'
        value={data.name}
        onChange={(e) => setData({...data, name: e.target.value})}
        /> <br />
        <select onChange={(e) => setData({...data, location: e.target.value})}>
        <option defaultChecked>Select Location:</option>
            {
                filter.map((x, index) => {
                    return (
                        <>
                        <option key={index} value={x}>{x}</option>
                        </>
                    )
                })
            }
        </select> <br />
        <button onClick={search}>Search Volunteer</button>
    </div>
  )
}

export default Find