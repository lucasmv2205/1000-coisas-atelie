import styles from './home.module.scss';
import Head from 'next/head';
import Card from './components/Card';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>1000 Coisas Ateliê</title>
      </Head>
      <div className={styles.products}>
        <h2>Produtos</h2>
        <div className={styles.card} >
          <Card />
        </div>
      </div>
    </div>
  )
}
