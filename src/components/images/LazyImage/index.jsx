import React from 'react';

import PreloadingImage from 'components/images/PreloadingImage';

import styles from './style.module.css';

const LazyImage = ({ url }) => {
  const containerRef = React.useRef();

  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(observe, {
      rootMargin: '0px',
      threshold: 0.01, // how much element must be in view, 1 is end, 0 - top, 0.5 when we reach half
    });

    if (containerRef?.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  function observe(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    });
  }

  return (
    <li ref={containerRef}>
      {isInView ? (
        <img className={styles.image} src={url}></img>
      ) : (
        <PreloadingImage />
      )}
    </li>
  );
};

export default LazyImage;
