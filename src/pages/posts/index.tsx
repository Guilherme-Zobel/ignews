import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title> Posts | Ignews</title>
      </Head>

        <main className={styles.container}>
          <div className={styles.posts}>
            <a href='#'>
              <title>12 de março de 2022</title>
              <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint iure asperiores eum, quo vero hic, delectus doloremque alias corporis accusamus amet fugiat dolores optio deserunt id laudantium aliquid non?</p>
            </a>
            <a href='#'>
              <title>12 de março de 2022</title>
              <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint iure asperiores eum, quo vero hic, delectus doloremque alias corporis accusamus amet fugiat dolores optio deserunt id laudantium aliquid non?</p>
            </a>
            <a href='#'>
              <title>12 de março de 2022</title>
              <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint iure asperiores eum, quo vero hic, delectus doloremque alias corporis accusamus amet fugiat dolores optio deserunt id laudantium aliquid non?</p>
            </a>
          </div>
        </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2));
  

  return {
    props: {

    }
  }
}