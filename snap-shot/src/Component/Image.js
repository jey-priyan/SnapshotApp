import React from "react";

const Image = ({title, link, author}) => {
    return (
        <div className="image-container">
            <img src={link} alt={title}>
                <p>{title}</p>
                <p>By {author}</p>
            </img>
        </div>
    )
}

export default Image;