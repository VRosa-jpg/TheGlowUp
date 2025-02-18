import React from 'react';


const Image = ({image}) => {
    return (
        <div>
            <img src={image} alt="Dynamic" className="w-full h-auto rounded-2x1" />
        </div>
    )
}

export default Image;