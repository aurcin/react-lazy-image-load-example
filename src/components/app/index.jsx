import Galerry from 'components/images/Gallery';

import styles from './style.module.css';

const App = () => {
  return (
    <>
      <h1 className={styles.title}>Welcome to lazy loading example</h1>
      <Galerry />
    </>
  );
};

export default App;
