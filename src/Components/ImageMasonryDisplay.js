import React from 'react';
import Masonry from 'react-masonry-css';
import './imageMasonryDisplay.css';
import Card from './Card.js';

const breakpointColumnsObj = {
    default: 5,
    1200: 4,
    1000: 3,
    700: 2,
    500: 1,
};

const ImageMasonryDisplay = ({ images }) => {
 

    return (
        <div className="image-container">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {images && images.map(imageUrl => (
                    <Card key={imageUrl} imageUrl={imageUrl} /> // Ensure keys are unique for list items
                ))}
            </Masonry>
        </div>
    );
};

export default ImageMasonryDisplay;