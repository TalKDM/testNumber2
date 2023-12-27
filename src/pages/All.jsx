import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const All = (props) => {
    const { allVol, searchVol, setSearchVol, setAllVol } = props;

    const nav = useNavigate();

    const [openDesc, setOpenDesc] = useState(false);

    const [showDesc, setShowDesc] = useState("");


    const mapVol = searchVol.filter(x => x.title);

    const enter = () => {
        const greenVol = searchVol.find(x => x.chosen === true) 
        if (!greenVol) {
            setSearchVol([]);
            nav('/');
        } else if (greenVol) {
            const filter = allVol.filter(x => x.title !== greenVol.title)
        setAllVol(filter);
        setSearchVol([]);
        nav('/');
        }
    };



  return (
    <div>
        <h2>volunteers by title:</h2> <br />
        {
            searchVol.map((x, index) => {
                const choose = () => {
                    setOpenDesc(!openDesc);
                     x.chosen = !x.chosen;
                    setSearchVol([...searchVol])
                    setShowDesc(x.desc);
                }
                return (
                    <button onClick={choose} style={{backgroundColor: x.chosen ? "lightgreen" : "white"}}>{x.title}</button>
                )
            })
        }
        {
            openDesc && <h1>{`volunteer description: ${showDesc}`}</h1>
        } <br /> <br /> <br />
        <button onClick={enter}>Enter</button>
        

    </div>
  )
}

export default All