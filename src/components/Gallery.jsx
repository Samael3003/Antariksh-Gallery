import React from 'react';

function Gallery() {
  // Define your gallery data with image URLs, titles, and links
  const galleryData = [
    {
      title: 'Star Party',
      imageUrl: 'https://github.com/Auriel3003/samael/assets/103866475/091c5678-6c77-490c-8fb1-3245d12db190',
      link: 'https://samael.vercel.app/posts/star-party',
    },
    {
      title: 'Horn Antenna Workshop',
      imageUrl: 'https://github.com/Auriel3003/samael/assets/103866475/8286f032-b21d-455b-94e4-e53d981c73e3',
      link: 'https://samael.vercel.app/posts/horn-antenna-workshop',
    },
    {
      title: 'Science Day',
      imageUrl: 'https://github.com/Auriel3003/samael/assets/103866475/3d20c917-f5c6-4dec-83ee-8e6fcc11524c',
      link: 'https://samael.vercel.app/posts/science-day',
    },
    {
      title: 'Invited Guest',
      imageUrl: 'https://github.com/Auriel3003/samael/assets/103866475/3cbbb90f-6fb0-4670-918d-c175b51a39c3',
      link: 'https://samael.vercel.app/posts/suresh-naik',
    },
    // Add more images and links as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {galleryData.map((item, index) => (
        <div key={index} className="relative">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </a>
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-sm text-center rounded-b-lg">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
