import React from "react";

const Film = ({film, children}) => {

    return (

        <>
            <p>I am a film</p>
            <h3>Title</h3>
            <h4>{film}</h4>
            <p>{children}</p>

        </>
    )
}

export default Film;