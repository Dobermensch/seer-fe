"use client"
import { Web3ReactProvider, useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import { InjectedConnector } from "@web3-react/injected-connector"
import { Web3Provider } from "@ethersproject/providers"

import axios from "axios"
import contractAbi from "../../public/contract-abi.json"
import { ethers } from "ethers"
import styles from "./page.module.css"
import RPSLSSelect from "./components/RPSLSSelect"
import GameRowHeader from "./components/GameRowHeader/GameRowHeader"

const injected = new InjectedConnector({})
const getLibrary = (provider) => {
  return new Web3Provider(provider)
}

export default function HomeComponent() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Home />
    </Web3ReactProvider>
  )
}

function Home() {
  let provider
  if (typeof window !== "undefined" && window.ethereum) {
    provider = new ethers.BrowserProvider(window.ethereum, 11155111)
  }

  const CONTRACT_BYTE_CODE = "0x608060405261012c600555604051604080610aaf833981018060405281019080805190602001909291908051906020019092919050505034600481905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600281600019169055504260068190555050506109ce806100e16000396000f3006080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c4395b9146100bf578063294914a4146101145780633a4b66f11461012b57806348e257cb146101565780634d03e3d21461018f57806353a04b05146101c257806380985af9146101e557806389f71d531461023c578063a5ddec7c14610267578063c37597c6146102a1578063c8391142146102f8578063f56f48f21461030f575b600080fd5b3480156100cb57600080fd5b506100fa600480360381019080803560ff169060200190929190803560ff16906020019092919050505061033a565b604051808215151515815260200191505060405180910390f35b34801561012057600080fd5b50610129610403565b005b34801561013757600080fd5b506101406104ae565b6040518082815260200191505060405180910390f35b34801561016257600080fd5b5061016b6104b4565b6040518082600581111561017b57fe5b60ff16815260200191505060405180910390f35b34801561019b57600080fd5b506101a46104c7565b60405180826000191660001916815260200191505060405180910390f35b6101e3600480360381019080803560ff1690602001909291905050506104cd565b005b3480156101f157600080fd5b506101fa6105c0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561024857600080fd5b506102516105e6565b6040518082815260200191505060405180910390f35b34801561027357600080fd5b5061029f600480360381019080803560ff169060200190929190803590602001909291905050506105ec565b005b3480156102ad57600080fd5b506102b66108c7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561030457600080fd5b5061030d6108ec565b005b34801561031b57600080fd5b5061032461099c565b6040518082815260200191505060405180910390f35b600081600581111561034857fe5b83600581111561035457fe5b141561036357600090506103fd565b6000600581111561037057fe5b83600581111561037c57fe5b141561038b57600090506103fd565b600282600581111561039957fe5b8115156103a257fe5b0660028460058111156103b157fe5b8115156103ba57fe5b0614156103e1578160058111156103cd57fe5b8360058111156103d957fe5b1090506103fd565b8160058111156103ed57fe5b8360058111156103f957fe5b1190505b92915050565b6000600581111561041057fe5b600360009054906101000a900460ff16600581111561042b57fe5b14151561043757600080fd5b600554600654014211151561044b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050506000600481905550565b60045481565b600360009054906101000a900460ff1681565b60025481565b600060058111156104da57fe5b600360009054906101000a900460ff1660058111156104f557fe5b14151561050157600080fd5b6000600581111561050e57fe5b81600581111561051a57fe5b1415151561052757600080fd5b6004543414151561053757600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561059357600080fd5b80600360006101000a81548160ff021916908360058111156105b157fe5b02179055504260068190555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b600060058111156105f957fe5b82600581111561060557fe5b1415151561061257600080fd5b6000600581111561061f57fe5b600360009054906101000a900460ff16600581111561063a57fe5b1415151561064757600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106a257600080fd5b600254600019168282604051808360058111156106bb57fe5b60ff167f01000000000000000000000000000000000000000000000000000000000000000281526001018281526020019250505060405180910390206000191614151561070757600080fd5b61072082600360009054906101000a900460ff1661033a565b15610786576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f19350505050506108bb565b61079f600360009054906101000a900460ff168361033a565b1561080657600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f19350505050506108ba565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f1935050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050505b5b60006004819055505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060058111156108f957fe5b600360009054906101000a900460ff16600581111561091457fe5b1415151561092157600080fd5b600554600654014211151561093557600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f19350505050506000600481905550565b600554815600a165627a7a7230582009986d4f44c9728b66b65030ab7aa5bb7839b635d616a92a4518065d8262e92f0029"
  const GAME_STATE = {
    solve: "solve",
    play: "play"
  }
  const NEXT_PUBLIC_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
  const SALT_MAX_LENGTH = 10

  const { active, account, chainId, activate, deactivate } = useWeb3React()
  const [accountBalance, setAccountBalance] = useState(0)
  const [ethereum, setEthereum] = useState(false)

  const [hideEverything, setHideEverything] = useState(false)
  const [userInvitedGames, setUserInvitedGames] = useState([])
  const [userStartedGames, setUserStartedGames] = useState([])

  const [createNewGameBtnDisabled, setCreateNewGameBtnDisabled] = useState(false)
  const [latestDeployedContract, setLatestDeployedContract] = useState("")

  const [choice, setChoice] = useState("1")
  const [newGamePlayerTwo, setNewGamePlayerTwo] = useState("")
  const [newGameStakeAmount, setNewGameStakeAmount] = useState(0)
  const [playerOneSalt, setPlayerOneSalt] = useState("")

  const handlerCallback = (event, cb) => {
    cb(event.target.value)
  }

  useEffect(() => {
    setEthereum(!!window.ethereum)
  }, [])

  useEffect(() => {
    const switchNetwork = async () => {
      if (chainId !== undefined && chainId !== 11155111) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0xAA36A7" }],
          })
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0xAA36A7",
                    chainName: "Sepolia Testnet",
                    rpcUrls: ["https://rpc.sepolia.org"],
                    nativeCurrency: {
                      name: "SepoliaETH",
                      symbol: "ETH",
                      decimals: 18
                    },
                    blockExplorerUrls: ["https://sepolia.etherscan.io/"]
                  },
                ],
              })
            } catch (addError) {
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
      // send a request to server to get games
      getUserGames()
      getAccountBalance()
    }
  }, [account])

  // not goinng to round the amount as it will be played on testnet where eth amounts are low
  // but mainnet deployments would need rounding
  const getAccountBalance = async () => {
    const balance = await provider.getBalance(account)
    const balanceInEth = ethers.formatEther(balance)
    setAccountBalance(balanceInEth)
  }

  const getUserGames = async () => {
    try {
      const signer = await provider.getSigner()

      const request = await axios.get(`${NEXT_PUBLIC_API_ENDPOINT}/public/games/user/${account}`)

      if (request.status === 200) {
        // Get contract details such as eth staked.
        // Can also move this to backend but in a large app this will be a more efficient approach
        const startedGames = request.data.games.playerOneGames.map(g => ({...g, type: "started"}))
        const invitedGames = request.data.games.playerTwoGames.map(g => ({...g, type: "invited"}))

        const allGames = startedGames.concat(invitedGames)
        const allGamesWithEditableFields = []

        for (let i = 0; i < allGames.length; i++) {
          const game = allGames[i]

          const contract = new ethers.Contract(game.contract_address, contractAbi, signer)
          
          const contractStakeAmount = await contract.stake()

          const contractStakeAmountInEth = ethers.formatEther(contractStakeAmount)
          
          const newObj = {
            ...game,
            editChoice: "1",
            contractStakeAmount: contractStakeAmountInEth
          }

          if (game.type === "started") {
            newObj["password"] = ""
          }

          allGamesWithEditableFields.push(newObj)
        }


        const userStartedGamesWithEditableFields = allGamesWithEditableFields.filter(g => g.type === "started")
        const userInvitedGamesWithEditableFields = allGamesWithEditableFields.filter(g => g.type === "invited")
        
        setUserStartedGames(userStartedGamesWithEditableFields)
        setUserInvitedGames(userInvitedGamesWithEditableFields)
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
    try {
      deactivate()      
    } catch (ex) {
      console.log(ex)
    }
  }

  const createNewGame = async () => {
    try {
      setCreateNewGameBtnDisabled(true)

      const tPlayerTwoAddress = newGamePlayerTwo.trim().toLowerCase()
      const parsedStakeAmount = parseFloat(newGameStakeAmount)

      if (!tPlayerTwoAddress) {
        alert("Please enter Player Two's address")
        console.error("Player two address not entered")
        return
      }

      if (tPlayerTwoAddress === account) {
        alert("If you're going to play with yourself at least let me watch.")
        console.error("Player tried to play against him/herself")
        return
      }

      if (!playerOneSalt) {
        alert("Please enter a password!")
        console.error("No password set during game creation")
        return
      }

      if (playerOneSalt.length > SALT_MAX_LENGTH) {
        alert("The maximum number of characters in the password is 10!")
        console.error("No password set during game creation")
        return
      }


      if (isNaN(parsedStakeAmount) || !parsedStakeAmount) {
        alert("Please enter a positive non-zero stake amount!")
        console.error(`User put in ${newGameStakeAmount} as stake amount`)
        return
      }

      // stake amount cannot be negative or exceed balance
      if (parsedStakeAmount < 0) {
        alert("Please enter a positive stake amount!")
        console.error("User put in a negative stake amount")
        return
      }

      if (parsedStakeAmount > accountBalance) {
        alert("Please enter a stake amount lower than your balance!")
        console.error("User tried to risk it all")
        return
      }

      // get hash of choice
      const hash = ethers.solidityPackedKeccak256(["uint8", "string"], [parseInt(choice), playerOneSalt])
      const signer = await provider.getSigner()

      // convert stake amount to wei
      const stakeAmountInWei = ethers.parseUnits(newGameStakeAmount.toString(), "ether")
      
      // deploy contract with hash and address of player two
      const factory = new ethers.ContractFactory(contractAbi, CONTRACT_BYTE_CODE, signer)
      let contract = await factory.deploy(hash, tPlayerTwoAddress, { value: stakeAmountInWei })
      contract = await contract.waitForDeployment()

      // create entry with deployed contract address in database
      const dbRequest = await axios.post(`${NEXT_PUBLIC_API_ENDPOINT}/public/games`, {
        playerOne: account,
        playerTwo: tPlayerTwoAddress,
        CA: contract.target
      })

      if (dbRequest.status === 200) {
        setLatestDeployedContract(contract.target)
        alert(`Your contract has been deployed at ${contract.target}`)
        getUserGames()
      }
    } catch (e) {
      alert(e)
      console.error(e)
    } finally {
      setCreateNewGameBtnDisabled(false)
    }
  }

  const setVariableForIdx = (value, gameState, idx, variable) => {
    const arrToUse = gameState === GAME_STATE.solve ? userStartedGames : userInvitedGames

    const temp = {...arrToUse[idx], [variable]: value}
    
    const newArr = arrToUse.map((g, i) => {
      if (i === idx) {
        return temp
      }
      return g
    })

    const setMethodToUse = gameState === GAME_STATE.solve ? setUserStartedGames : setUserInvitedGames

    setMethodToUse(newArr)
  }

  const solveGame = async (idx) => {
    try {
      const choice = parseInt(userStartedGames[idx].editChoice)
      const password = userStartedGames[idx].password

      if (!password) {
        alert("Please set the password for that game!")
        console.error(`password not set for game ${idx + 1}`)
        return
      }

      const contractAddress = userStartedGames[idx].contract_address

      const signer = await provider.getSigner()

      const contract = new ethers.Contract(contractAddress, contractAbi, signer)

      const result = await contract.solve(choice, password)

      alert(`tx hash: ${result.hash}`)
    } catch (e) {
      alert(e)
      console.error(e)
    }
  }

  const playGame = async (idx) => {
    try {
      const game = userInvitedGames[idx]
      const playerTwoChoice = parseInt(game.editChoice)

      const contractAddress = game.contract_address

      const signer = await provider.getSigner()

      const contract = new ethers.Contract(contractAddress, contractAbi, signer)

      const contractStakeAmount = await contract.stake()

      const result = await contract.play(playerTwoChoice, { value: contractStakeAmount })

      alert(`tx hash: ${result.hash}`)
    } catch (e) {
      alert(e)
      console.error(e)
    }
  }

  const timeout = async (idx, gameState) => {
    try {
      const gameArrToUse = gameState === GAME_STATE.solve ? userStartedGames : userInvitedGames

      const game = gameArrToUse[idx]
      const contractAddress = game.contract_address

      const signer = await provider.getSigner()

      const contract = new ethers.Contract(contractAddress, contractAbi, signer)

      const methodName = gameState === GAME_STATE.solve ? "j2Timeout" : "j1Timeout"

      const result = await contract[methodName]()

      alert(`tx hash: ${result.hash}`)

      const contractStakedAmount = await contract.stake()

      // loose equality checking between bigint and number
      if (contractStakedAmount == 0) {
        finishGame(idx, gameState, contractAddress)
      }
    } catch (e) {
      alert(e)
      console.error(e)
    }
  }

  const finishGame = async (idx, gameState, contractAddress) => {
    const finishGameRequest = await axios.get(`${NEXT_PUBLIC_API_ENDPOINT}/public/games/${contractAddress}/finish`)
    
    if (finishGameRequest.status === 200) {
      setVariableForIdx(true, gameState, idx, "is_finished")
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
        {account && <p>Connected as: {account}</p>}
        {!account && <p>Connect Wallet to get started</p>}
      </div>

      <div className={styles.center}>
        RPSLizardSpock
      </div>

      {latestDeployedContract && (
        <div className={styles.center}>
          <p>latest deployed contract: <code>{latestDeployedContract}</code></p>
        </div>
      )}

      {
        !hideEverything && (
          <>
            <h3 className={styles.heading}>Create New Game</h3>
            <div className={styles.createGameContainer} style={{height: "auto", padding: "10px"}}>
              <RPSLSSelect label="choice" labelText="Choice" onChangeHandler={(e) => handlerCallback(e, setChoice)} />

              <label htmlFor="playerOneSalt">Enter password (10 characters max): </label>
              <input type="text" maxLength={SALT_MAX_LENGTH} className={styles.input} onChange={(e) => handlerCallback(e, setPlayerOneSalt)} id="playerOneSalt" name="playerOneSalt" />

              <label htmlFor="playerTwoAddress">User address to play with: </label>
              <input type="text" className={styles.input} onChange={(e) => handlerCallback(e, setNewGamePlayerTwo)} id="playerTwoAddress" name="playerTwoAddress" />

              <label htmlFor="newGameStakeAmount">Stake amount in Eth (balance: {accountBalance} Eth): </label>
              <input type="number" min="0" max={accountBalance} className={styles.input} onChange={(e) => handlerCallback(e, setNewGameStakeAmount)} id="newGameStakeAmount" name="newGameStakeAmount" />

              <button disabled={createNewGameBtnDisabled} onClick={createNewGame} className={styles.createGameButton}>Create Game</button>
            </div>

            <h3 className={styles.heading}>Created Games</h3>
            <div className={styles.createGameContainer}>
              {
                userStartedGames.map((g, idx) => {
                  return (
                    <div className={styles.gameRow} key={idx}>
                      <GameRowHeader 
                        contractAddress={g.contract_address} 
                        idx={idx} 
                        isFinished={g.is_finished} 
                        stakeAmount={g.contractStakeAmount}
                        stakeAmountLabel={"Eth Staked"}
                      />

                      {
                        !g.is_finished && (
                          <div className={styles.gameRowBody}>
                            <div className={styles.gameActionContainer}>
                              <h3 className={styles.gameActionTitle}>Solve</h3>
                              <RPSLSSelect label="solveChoice" labelText="Choice" onChangeHandler={(e) => setVariableForIdx(e.target.value, GAME_STATE.solve, idx, "editChoice")} />

                              <label htmlFor="solveSalt">Enter password (I hope you remember it...): </label>
                              <input type="text" maxLength={SALT_MAX_LENGTH} className={styles.input} onChange={(e) => setVariableForIdx(e.target.value, GAME_STATE.solve, idx, "password")} id="solveSalt" name="solveSalt" />

                              <button onClick={() => solveGame(idx)} className={`${styles.createGameButton} ${styles.fullWidth}`}>Solve Game</button>
                            </div>
                            <div className={styles.gameActionContainer}>
                              <h3 className={styles.gameActionTitle}>Timeout</h3>
                              <button onClick={() => timeout(idx, GAME_STATE.solve)} className={`${styles.createGameButton} ${styles.timeoutButton}`}>Timeout</button>
                            </div>
                          </div>
                        )
                      }
                    </div>
                  )
                })
              }
            </div>

            <h3 className={styles.heading}>Invited Games</h3>
            <div className={styles.createGameContainer}>
              {
                userInvitedGames.map((g, idx) => {
                  return (
                    <div className={styles.gameRow} key={idx}>
                      <GameRowHeader 
                        contractAddress={g.contract_address} 
                        idx={idx} 
                        isFinished={g.is_finished} 
                        stakeAmount={g.contractStakeAmount}
                        stakeAmountLabel={"Min Eth Required"}
                      />

                      {
                        !g.is_finished && (
                          <div className={styles.gameRowBody}>
                            <div className={styles.gameActionContainer}>
                              <h3 className={styles.gameActionTitle}>Play</h3>
                              <RPSLSSelect label="playChoice" labelText="Choice" onChangeHandler={(e) => setVariableForIdx(e.target.value, GAME_STATE.play, idx, "editChoice")} />

                              <button onClick={() => playGame(idx)} className={`${styles.createGameButton} ${styles.fullWidth} ${styles.bgBlue}`}>Play Game</button>
                            </div>
                            <div className={styles.gameActionContainer}>
                              <h3 className={styles.gameActionTitle}>Timeout</h3>
                              <button onClick={() => timeout(idx, GAME_STATE.play)} className={`${styles.createGameButton} ${styles.timeoutButton}`}>Timeout</button>
                            </div>
                          </div>
                        )
                      }
                    </div>
                  )
                })
              }
            </div>
          </>
        ) 
      }
    </main>
  )
}