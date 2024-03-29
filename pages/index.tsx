import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Button, Icon } from 'semantic-ui-react';
import styles from '../styles/index.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Just Code</title>
        <meta
          name="description"
          content="Series of javascript coding challenges covering a wide range of algorithms and basic programming skills."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heroWrapper}>
        <Container className={styles.heroContainer}>
          <h1>Just Code</h1>
          <p>Straight forward coding exercises to help you become a better programmer.</p>
          <div className={styles.iconWrapper}>
            <Icon name="code" color="blue" size="massive" />
          </div>

          <Link href="/coding-exercises" passHref>
            <Button size="large" color="blue" inverted>
              Go To Exercises
            </Button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Home;
