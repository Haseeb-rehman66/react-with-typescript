import React, { useState } from 'react';
import {IState as Prope} from "../App";


interface IPrope {
    people: Prope["people"]
    setPeople: React.Dispatch<React.SetStateAction<Prope["people"]>>
}

const AddtoList: React.FC<IPrope>= ({people, setPeople}) => {

    const [input, setInput] =  useState({
        name:"",
        age: "",
        img: "",
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    const handleClick = (): void => {
        if (
            !input.name ||
            !input.age ||
            !input.img
        ){
            return 
        }
        setPeople ([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            }
        ]);
        
    }

  return (
    <div className="AddToList">
        <input 
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
        />
         <input 
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
        />
         <input 
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"
        />
         <textarea
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
        />
        <button className="AddToList-btn" onClick={handleClick}>
            Add to List
        </button>
    </div>
  )
}

export default AddtoList