
import React from "react";
import { useState,useEffect } from "react";



const API_Call =(url) =>{
    const [data, setData]=useState(null);

    useEffect(()=> {
        if(!url)return;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data); // check structure
            setData(data);
        });
    }, [url]);//runs every time url changes => run when state changes (dependency)

    return data;
};

export default API_Call
