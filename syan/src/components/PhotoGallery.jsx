// src/components/PhotoGallery.jsx
import React, { useState } from 'react';
import './PhotoGallery.css';
import afbeelding1 from '../photos/Afbeelding.jpg'; // Import the image afbeelding1.jpg
import afbeelding2 from '../photos/Afbeelding(1).jpg';
import afbeelding3 from '../photos/Afbeelding(2).jpg';
import afbeelding4 from '../photos/Afbeelding(3).jpg';
import afbeelding5 from '../photos/Afbeelding(4).jpg';
import afbeelding6 from '../photos/Afbeelding(5).jpg';
import afbeelding7 from '../photos/Afbeelding(6).jpg';
import afbeelding8 from '../photos/Afbeelding(7).jpg';
import afbeelding9 from '../photos/Afbeelding(8).jpg';
import afbeelding10 from '../photos/Afbeelding(9).jpg';
import afbeelding11 from '../photos/Afbeelding(10).jpg';
import afbeelding12 from '../photos/Afbeelding(11).jpg';
import afbeelding13 from '../photos/Afbeelding(12).jpg';
import afbeelding14 from '../photos/Afbeelding(13).jpg';
import afbeelding15 from '../photos/Afbeelding(14).jpg';
// Import all images afbeelding1.jpg to afbeelding14.jpg as needed

const PhotoGallery = () => {
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        afbeelding1, afbeelding2, afbeelding3, afbeelding4, afbeelding5,
        afbeelding6, afbeelding7, afbeelding8, afbeelding9, afbeelding10,
        afbeelding11, afbeelding12, afbeelding13, afbeelding14, afbeelding15
    ];

    const openFullscreen = (imageSrc, index) => {
        setFullscreenImage(imageSrc);
        setCurrentIndex(index);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    const handleKeyDown = (event) => {
        if (fullscreenImage) {
            if (event.key === 'ArrowLeft') {
                const prevIndex = (currentIndex - 1 + images.length) % images.length;
                setFullscreenImage(images[prevIndex]);
                setCurrentIndex(prevIndex);
            } else if (event.key === 'ArrowRight') {
                const nextIndex = (currentIndex + 1) % images.length;
                setFullscreenImage(images[nextIndex]);
                setCurrentIndex(nextIndex);
            }
        }
    };

    // Attach event listener for keyboard navigation
    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [fullscreenImage, currentIndex]);

    return (
        <div className="photo-gallery">
            <div className="photo-grid">
                {images.map((image, index) => (
                    <div className="photo-item" key={index}>
                        <img src={image} alt={`Afbeelding ${index + 1}`} onClick={() => openFullscreen(image, index)} />
                    </div>
                ))}
            </div>
            {fullscreenImage && (
                <div className="fullscreen-container">
                    <button className="close-button" onClick={closeFullscreen}>Close</button>
                    <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" onClick={closeFullscreen} />
                    <button className="prev-button" onClick={() => {
                        const prevIndex = (currentIndex - 1 + images.length) % images.length;
                        setFullscreenImage(images[prevIndex]);
                        setCurrentIndex(prevIndex);
                    }}>←</button>
                    <button className="next-button" onClick={() => {
                        const nextIndex = (currentIndex + 1) % images.length;
                        setFullscreenImage(images[nextIndex]);
                        setCurrentIndex(nextIndex);
                    }}>→</button>
                </div>
            )}
        </div>
    );
};

export default PhotoGallery;
