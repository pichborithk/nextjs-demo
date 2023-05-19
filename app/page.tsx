import Link from 'next/link';

import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <p>
        <Link href='/users'>Users</Link>
      </p>
    </main>
  );
};
export default Home;
