import { useRef, useState } from 'react';

export default function TextInput({item,handleChange}) {
    const {type,name}=item;

    return (
        <input type={text}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        // ref={refs.addressRef}
        ></input>
    )
    
}