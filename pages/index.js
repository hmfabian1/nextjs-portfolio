import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hannah Fabian</title>
        <meta
          name="description"
          content="Hannah Fabian's professional website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          👋🏼 Hi, I&apos;m <span className={styles.name}>Hannah Fabian</span>.
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href={"/education"}>
            <div className={styles.card}>
              <h2>Education &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Link>

          <Link href={"/experience"}>
            <div className={styles.card}>
              <h2>Experience &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Link>

          <Link href={"/projects"}>
            <div className={styles.card}>
              <h2>Projects &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Link>

          <Link href={"/interests"}>
            <div className={styles.card}>
              <h2>Interests &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
