import styles from './styles.module.css';

export const metadata = {
  title: 'About Page | NextJS Demo',
  description: 'Generated by create next app',
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>About Page</h1>
      <main className={styles.main}>{children}</main>
    </>
  );
};
export default AboutLayout;