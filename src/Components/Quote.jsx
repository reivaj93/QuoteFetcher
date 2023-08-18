import React, {useState,useEffect}from "react";

function QuoteFetcher(){
    var[quote,setQuoute] = useState("");
    var[author,setAuthor] =useState("");

    useEffect(()=>{
        fetchNewQuote();
    }, []);


    const fetchNewQuote = async () => {
        try{
            const response = await fetch ("https://api.quotable.io/random");
            const data = await response.json();
            setQuoute(data.content);
            setAuthor(data.author);
        }  catch(error) {
            console.error("Error fetching Quote: ",error);
        }
        }


    return(
        <>
        <h1>Memorables Quoutes</h1>
        <p>{quote}</p>
        <p>{author}</p>
        <button onClick = {fetchNewQuote}>Give me another Quote</button>
        </>
    )
}

export default QuoteFetcher