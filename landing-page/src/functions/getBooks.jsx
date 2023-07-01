import axios from 'axios';

import { useState, useEffect } from 'react';

export function GetBooks(results = 1, category){
    const [books, setBooks] = useState([]);
    let response;
    useEffect(()=> {
        ;(async () => {
            try{
                response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=${results}&langRestrict=en&key=AIzaSyDLjjcAVmXjDaj0OnU_sV_BTUZjLw_cbd8`);
                setBooks(response.data.items); 
            }catch(err){
                console.error(err)
            }
        })();
        
    }, [])
    
    return books;
    
}