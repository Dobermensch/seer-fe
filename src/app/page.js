'use client'

import { useEffect, useState } from "react";

import Image from "next/image";
import axios from "axios";
import ethers from "ethers";

import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from "@web3-react/injected-connector";
import styles from "./page.module.css";

const injected = new InjectedConnector({
  supportedChainIds: [11155111]
 });

export default function Home() {
  const [ethereum, setEthereum] = useState(false);
  const { active, account, chainId, library, connector, signer, activate, deactivate } = useWeb3React()

  useEffect(() => {
    setEthereum(!!window.ethereum);
  }, [])


  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    console.log('disconnect pressed')
    try {
      deactivate()      
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          {ethereum && (
              !active ? (
                <div className={styles.connectWallet} onClick={connect}>
                  Connect Wallet
                </div>
              ) 
              : 
              (
                <div className={styles.disconnectWallet} onClick={disconnect}>
                  Disconnect Wallet
                </div>
              )
            )
          }
          {
            !ethereum && (
              <a target="_blank" href="https://metamask.io/download" rel="noopener noreferrer">
                <div className={styles.installMetamask} />
              </a>
            )
          }
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
