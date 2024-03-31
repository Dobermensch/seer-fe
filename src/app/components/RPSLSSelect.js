import styles from "../page.module.css"

export default function RPSLSSelect({ label, labelText, onChangeHandler }) {
  return (
    <>
      <label htmlFor={label}>{labelText}: </label>
      <select className={styles.input} onChange={onChangeHandler} type="select" id={label} name={label}>
          <option value="1">Rock</option>
          <option value="2">Paper</option>
          <option value="3">Scissors</option>
          <option value="4">Lizard</option>
          <option value="5">Spock</option>
      </select>
    </>
  )
}
