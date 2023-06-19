import LazyImage from 'components/images/LazyImage';
import data from 'data/images.json';

import styles from './style.module.css';

const Galerry = () => {
  const galerry = data.map(item => {
    return <LazyImage key={item.id} {...item} />;
  });

  return <ul className={styles.container}>{galerry}</ul>;
};

export default Galerry;
