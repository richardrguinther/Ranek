import React from "react";

import styles from "../styles/components/Slider.module.css";

const Slider = ({ photos }) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const generatePhotoIndexes = () => {
    return photos.map((_, index) => (
      <span
        key={`photo-index-${index}`}
        onClick={() => setCurrentImage(index)}
        className={styles.photoIndexes}
        data-js="slider-index"
      />
    ));
  };

  const renderImage = (photo) => <img alt={photo.name} src={photo.src} />;

  React.useEffect(() => {
    const indexes = document.querySelectorAll('[data-js="slider-index"]');

    indexes.forEach((ind) => {
      if (ind.classList.contains(styles.sliderActive))
        ind.classList.remove(styles.sliderActive);
    });

    indexes[currentImage].classList.add(styles.sliderActive);
  }, [currentImage]);

  return (
    <section className={styles.sliderContainer}>
      <div className={styles.sliderItems}>
        {renderImage(photos[currentImage])}
      </div>
      <div className={styles.sliderIndexes}>{generatePhotoIndexes()}</div>
    </section>
  );
};

export default Slider;
