import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = (props) => {
    const { allVol, setAllVol } = props;

    const [data, setData] = useState({
        title: "",
        location: "",
        desc: "",
        chosen: false,
    });

    const nav = useNavigate();

    const addVol = () => {
        const num = /[0-9]/;
        const letters = /(a-א)/
        if (data.title.length > 20) {
            alert('title is up to 20 chars');
        } else if (num.test(data.location) || data.location.includes(' '))  {
            alert('location must be in english letters only  and without spaces')
        } else if (data.desc.length > 200) {
            alert('description is up to 200 chars!')
        } else {
            setAllVol([...allVol, data]);
            nav('/');
        }
    };

  return (
    <div>
        <input type="text" 
        placeholder='volunteer title:'
        value={data.title}
        onChange={(e) => setData({...data, title: e.target.value})}
        /> <br />
        <input type="text" 
        placeholder='volunteer location:'
        value={data.location}
        onChange={(e) => setData({...data, location: e.target.value})}
        /> <br />
        <input type="text" 
        placeholder='volunteer description:'
        value={data.desc}
        onChange={(e) => setData({...data, desc: e.target.value})}
        /> <br />
        <button onClick={addVol}>ADD</button>
    </div>
  )
}

export default Add