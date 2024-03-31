import styles from "./GameRowHeader.module.css"

export default function GameRowHeader({ contractAddress, idx, isFinished, stakeAmount }) {
  return (
    <div className={styles.gameRowHeader}>
      <a href={`https://sepolia.etherscan.io/address/${contractAddress}`}>
        {idx + 1}. Contract: {contractAddress}
      </a>
      {!isFinished && <div className={styles.marginLeft20}>Min Eth Required: {stakeAmount}</div>}
      {isFinished && <div className={styles.gameStatusPill}>Finished</div>}
    </div>
  )
}