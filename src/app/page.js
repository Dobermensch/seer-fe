'use client'

import { useEffect, useState } from "react";

import Image from "next/image";
import axios from "axios";
import ethers from "ethers";
import Head from 'next/head'

import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from "@web3-react/injected-connector";
import styles from "./page.module.css";

const injected = new InjectedConnector({
  supportedChainIds: [11155111]
 });

export default function Home() {
  const NEXT_PUBLIC_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

  const hashes = {
    "1":  "0x24a72033e5ebade82fba7e628d507552fcf083893538e1b643b41500f77e450c",
    "2":  "0xf1037a038c32689bf5b310fd0425568c9c97fb193c9c3c49aaa16efd73b0d866",
    "3":  "0x9d2af0d67e5d7ca5115fea0b11b8a4b896243065c50f68e9db73e7295b2d130d",
    "4":  "0x17c2a6f7a93317223646835c4ce6be40c0c1d168c29ffb546f60ec0acb436f8a",
    "5":  "0x48bfacfecf70e8a4f58b4b0e342e2489ac6320dc3cfc4fd045477530c2630a33"
  }

  const [ethereum, setEthereum] = useState(false);
  const { active, account, chainId, library, connector, signer, activate, deactivate } = useWeb3React()

  const [userStartedGames, setUserStartedGames] = useState([])
  const [userInvitedGames, setUserInvitedGames] = useState([])

  const [choice, setChoice] = useState(undefined);
  const [newGamePlayerTwo, setNewGamePlayerTwo] = useState('')

  const onChoiceChangeHandler = (event) => {
      setChoice(event.target.value);
      console.log(
          "User Selected Value - ",
          event.target.value
      );
      console.log(hashes[event.target.value])
  };

  const onPlayerTwoAddressChange = (event) => {
    setNewGamePlayerTwo(event.target.value)
  }

  useEffect(() => {
    setEthereum(!!window.ethereum);
  }, [])

  useEffect(() => {
    if (account) {
      // send a request to server to get current games or let user create game (deploy contract)
      getUserGames()
    }
  }, [account])

  const getUserGames = async () => {
    try {
      const request = await axios.get(`${NEXT_PUBLIC_API_ENDPOINT}/public/games/user/${account}`)

      if (request.status === 200) {
        // for each game, need to get the details such as whether player 2 has made move already or not
      }
    } catch (e) {
      alert(e)
      console.error(e)
    }
  }


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

  const createNewGame = async () => {
    try {
      const tPlayerTwoAddress = newGamePlayerTwo.trim().toLowerCase()

      if (!tPlayerTwoAddress) {
        alert("Please enter Player Two's address")
        console.error("Player two address not entered")
        return
      }

      // first check if user has already created a game with the same player two which is currently unfinished
      const request = await axios.get(`${NEXT_PUBLIC_API_ENDPOINT}/public/games/user/${account}`)

      if (request.status === 200) {
        const alreadyExistingUnfinishedGame = request.data.games.playerOneGames.find(g => !g.is_finished && g.player_two.toLowerCase() === tPlayerTwoAddress)

        if (alreadyExistingUnfinishedGame !== undefined) {
          alert(`You already have an existing unfinished game with Player two of address ${tPlayerTwoAddress}. Finish that first.`)
          return
        }
      }

      // get hash of choice
      const hash = hashes[choice]

      // deploy contract with hash and address of player two


    } catch (e) {
      alert(e)
      console.error(e)
    }
  }

  return (
    <main className={styles.main}>
      <Head>
        <title>RPS</title>
      </Head>
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
        {account && <p>Connected as: { account }</p>}
      </div>

      <div className={styles.center}>
        RPSLizardSpock
      </div>


      <h3>Create New Game</h3>
      <div className={styles.createGameContainer} style={{height: "auto"}}>
        <label htmlFor="choice">Choice: </label>
        <select onChange={onChoiceChangeHandler} type="select" id="choice" name="choice" style={{ width: "200px", marginBottom: "20px" }}>
          <option value="1">Rock</option>
          <option value="2">Paper</option>
          <option value="3">Scissors</option>
          <option value="4">Lizard</option>
          <option value="5">Spock</option>
        </select>

        <label htmlFor="playerTwoAddress">User address to play with: </label>
        <input type="text" onChange={onPlayerTwoAddressChange} id="playerTwoAddress" name="playerTwoAddress" style={{ width: "350px" }} />

        <button onClick={createNewGame} className={styles.createGameButton}>Create Game</button>
      </div>

      <h3>Created Games</h3>
      <div className={styles.createGameContainer}>
        
      </div>
    </main>
  );
}
