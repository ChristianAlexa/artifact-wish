import React, { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageHeader from '../components/PageHeader'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [winningId, setWinningId] = useState(0);
  const [spinCount, setSpinCount] = useState(0);

  const symbols = [
    { id: 1, name: 'Broken Rime', category: 'cap', fileName: 'Item_Broken_Rime.png' },
    { id: 2, name: 'Frost Weaved Dignity', category: 'goblet', fileName: 'Item_Frost-Weaved_Dignity.png' },
    { id: 3, name: 'Snowswept Memory', category: 'flower', fileName: 'Item_Snowswept_Memory.png' }
  ];

  interface Symbol {
    id: number;
    name: string;
    category: string;
    fileName: string;
  }

  const spinHandler = (): void => {
    const id: number = (Math.floor(Math.random() * symbols.length + 1));
    const newSpinCount = spinCount + 1;
    setWinningId(id);
    setSpinCount(newSpinCount);
  };

  const renderWinningSymbol = (id: number): JSX.Element => {
    const s: Symbol | undefined = symbols.find(s => s.id === id);

    if (!s) return <div>no winning symbol</div>

    return (
      <div id="winning-symbol">
        <Image src={`/img/${s.fileName}`} alt={`${s.name}`} width={50} height={50} />
        <p>{s.name}</p>
      </div>
    );
  };

  const listSymbolNames = (s: Symbol): JSX.Element => {
    return <div key={s.id}>{s.name}</div>
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Artifact Wish</title>
        <meta name="description" content="Slot machine entertainment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PageHeader title="Artifact Wish" />

        <span>spin</span>
        <button onClick={() => spinHandler()} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
          <Image src='/img/Talent_Gale_Blade.png' alt='spin button' width={50} height={50} />
        </button>

        {renderWinningSymbol(winningId)}
        <p>{`Spin Count: ${spinCount}`}</p>
        <p>{`Last winning id: ${winningId}`}</p>
      </main>
    </div>
  )
}

export default Home
