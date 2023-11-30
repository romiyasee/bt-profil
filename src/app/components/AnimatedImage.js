import { useEffect, useState } from 'react';

const images = [
  '/images/hero-image.png',
  '/images/hero-image2.png',
  // Tambahkan path gambar lainnya sesuai kebutuhan
];

const AnimatedImage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = () => {
    const nextImage = (currentImage + 1) % images.length;
    setCurrentImage(nextImage);
  };

  useEffect(() => {
    // Setup timeout to change image after 5 seconds
    const timeoutId = setTimeout(() => {
      handleImageChange();
    }, 5000);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [currentImage]);

  return (
    <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
      <img
        src={images[currentImage]}
        alt={`hero image ${currentImage + 1}`}
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-fade-in-out`}
        onAnimationEnd={handleImageChange}
        width={250}
        height={250}
      />
    </div>
  );
};

export default AnimatedImage;
