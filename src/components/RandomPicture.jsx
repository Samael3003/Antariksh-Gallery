import React, { useState } from 'react';

function RandomPicture() {
  // Array of 10 image URLs
  const images = [
    'https://apod.nasa.gov/apod/image/2310/DesertEclipse_Daviron_960.jpg',
    'https://apod.nasa.gov/apod/image/2310/HiResSprites_Escurat_1080.jpg',
    'https://apod.nasa.gov/apod/image/2310/Hourglass_HubblePathak_1080.jpg',
    'https://apod.nasa.gov/apod/image/2310/WitchHead_Alharbi_1080.jpg',
    'https://apod.nasa.gov/apod/image/2310/MoValleyEclipse1024.jpg',
    'https://apod.nasa.gov/apod/image/2310/HubbleVarOrig_Carnegie_960.jpg',
    'https://apod.nasa.gov/apod/image/2310/M31_HubbleSpitzerGendler_960.jpg',
    'https://apod.nasa.gov/apod/image/2310/PlaneEclipse_Slifer_960.jpg',
    'https://apod.nasa.gov/apod/image/2310/DistortedSunrise_Chasiotis_1080.jpg',
    'https://apod.nasa.gov/apod/image/2310/OrionNircShort_Webb_960.jpg',
  ];

  // Generate a random index to select an image
  const randomIndex = Math.floor(Math.random() * images.length);

  // Get the URL of the randomly selected image
  const randomImage = images[randomIndex];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-500">
        Random Picture
      </h2>
      <img src={randomImage} alt="Random Image" className="w-full h-auto rounded-lg" />
    </div>
  );
}

export default RandomPicture;
