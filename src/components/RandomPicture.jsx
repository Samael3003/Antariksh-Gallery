import React, { useState } from 'react';

function RandomPicture() {
  // Array of 10 image URLs
  const images = [
    'URL_TO_IMAGE_1',
    'URL_TO_IMAGE_2',
    'URL_TO_IMAGE_3',
    'URL_TO_IMAGE_4',
    'URL_TO_IMAGE_5',
    'URL_TO_IMAGE_6',
    'URL_TO_IMAGE_7',
    'URL_TO_IMAGE_8',
    'URL_TO_IMAGE_9',
    'URL_TO_IMAGE_10',
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
