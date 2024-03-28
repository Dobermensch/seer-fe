'use client'

import { useEffect, useState } from "react";

import Image from "next/image";
import axios from "axios";
import ethers from "ethers";
import Head from 'next/head'

import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from "@web3-react/injected-connector";
import styles from "./page.module.css";

import contractAbi from "../../public/contract-abi.json"

const injected = new InjectedConnector({
  
 });
//  supportedChainIds: [1, 11155111]

export default function Home() {
  const NEXT_PUBLIC_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
  const contractByteCode = "608060405261012c600555604051604080610aaf833981018060405281019080805190602001909291908051906020019092919050505034600481905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600281600019169055504260068190555050506109ce806100e16000396000f3006080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c4395b9146100bf578063294914a4146101145780633a4b66f11461012b57806348e257cb146101565780634d03e3d21461018f57806353a04b05146101c257806380985af9146101e557806389f71d531461023c578063a5ddec7c14610267578063c37597c6146102a1578063c8391142146102f8578063f56f48f21461030f575b600080fd5b3480156100cb57600080fd5b506100fa600480360381019080803560ff169060200190929190803560ff16906020019092919050505061033a565b604051808215151515815260200191505060405180910390f35b34801561012057600080fd5b50610129610403565b005b34801561013757600080fd5b506101406104ae565b6040518082815260200191505060405180910390f35b34801561016257600080fd5b5061016b6104b4565b6040518082600581111561017b57fe5b60ff16815260200191505060405180910390f35b34801561019b57600080fd5b506101a46104c7565b60405180826000191660001916815260200191505060405180910390f35b6101e3600480360381019080803560ff1690602001909291905050506104cd565b005b3480156101f157600080fd5b506101fa6105c0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561024857600080fd5b506102516105e6565b6040518082815260200191505060405180910390f35b34801561027357600080fd5b5061029f600480360381019080803560ff169060200190929190803590602001909291905050506105ec565b005b3480156102ad57600080fd5b506102b66108c7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561030457600080fd5b5061030d6108ec565b005b34801561031b57600080fd5b5061032461099c565b6040518082815260200191505060405180910390f35b600081600581111561034857fe5b83600581111561035457fe5b141561036357600090506103fd565b6000600581111561037057fe5b83600581111561037c57fe5b141561038b57600090506103fd565b600282600581111561039957fe5b8115156103a257fe5b0660028460058111156103b157fe5b8115156103ba57fe5b0614156103e1578160058111156103cd57fe5b8360058111156103d957fe5b1090506103fd565b8160058111156103ed57fe5b8360058111156103f957fe5b1190505b92915050565b6000600581111561041057fe5b600360009054906101000a900460ff16600581111561042b57fe5b14151561043757600080fd5b600554600654014211151561044b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050506000600481905550565b60045481565b600360009054906101000a900460ff1681565b60025481565b600060058111156104da57fe5b600360009054906101000a900460ff1660058111156104f557fe5b14151561050157600080fd5b6000600581111561050e57fe5b81600581111561051a57fe5b1415151561052757600080fd5b6004543414151561053757600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561059357600080fd5b80600360006101000a81548160ff021916908360058111156105b157fe5b02179055504260068190555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b600060058111156105f957fe5b82600581111561060557fe5b1415151561061257600080fd5b6000600581111561061f57fe5b600360009054906101000a900460ff16600581111561063a57fe5b1415151561064757600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106a257600080fd5b600254600019168282604051808360058111156106bb57fe5b60ff167f01000000000000000000000000000000000000000000000000000000000000000281526001018281526020019250505060405180910390206000191614151561070757600080fd5b61072082600360009054906101000a900460ff1661033a565b15610786576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f19350505050506108bb565b61079f600360009054906101000a900460ff168361033a565b1561080657600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f19350505050506108ba565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f1935050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050505b5b60006004819055505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060058111156108f957fe5b600360009054906101000a900460ff16600581111561091457fe5b1415151561092157600080fd5b600554600654014211151561093557600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f19350505050506000600481905550565b600554815600a165627a7a7230582009986d4f44c9728b66b65030ab7aa5bb7839b635d616a92a4518065d8262e92f0029"

  const hashes = {
    "1":  "0x24a72033e5ebade82fba7e628d507552fcf083893538e1b643b41500f77e450c",
    "2":  "0xf1037a038c32689bf5b310fd0425568c9c97fb193c9c3c49aaa16efd73b0d866",
    "3":  "0x9d2af0d67e5d7ca5115fea0b11b8a4b896243065c50f68e9db73e7295b2d130d",
    "4":  "0x17c2a6f7a93317223646835c4ce6be40c0c1d168c29ffb546f60ec0acb436f8a",
    "5":  "0x48bfacfecf70e8a4f58b4b0e342e2489ac6320dc3cfc4fd045477530c2630a33"
  }

  const [ethereum, setEthereum] = useState(false);
  const { active, account, chainId, library, connector, signer, activate, deactivate } = useWeb3React()

  const [hideEverything, setHideEverything] = useState(false)
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
    const switchNetwork = async () => {
      if (chainId !== undefined && chainId !== 11155111) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xAA36A7' }],
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0xAA36A7',
                    chainName: 'Sepolia Testnet',
                    rpcUrls: ['https://rpc.sepolia.org'] /* ... */,
                    nativeCurrency: {
                      name: "SepoliaETH",
                      symbol: "ETH",
                      decimals: 18
                    },
                    blockExplorerUrls: ["https://sepolia.etherscan.io/"]
                  },
                ],
              });
            } catch (addError) {
              // handle "add" error
              console.error(addError)
              alert(addError)
              return
            }
          }
          // handle other "switch" errors
        }
      }
    }

    switchNetwork()
  }, [chainId])

  useEffect(() => {
    setHideEverything(chainId !== 11155111)
  }, [chainId])

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
    console.log("clicked connect")
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


      {
        !hideEverything && (
          <>
            <h3 className={styles.heading}>Create New Game</h3>
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

            <h3 className={styles.heading}>Created Games</h3>
            <div className={styles.createGameContainer}>
              
            </div>
          </>
        ) 
      }
      
    </main>
  );
}
