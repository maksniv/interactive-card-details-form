import styles from './Input.module.scss';

function Input({ type, label, placeholder, maxLength, inputMode }) {
  return (
    <>
      <div className={styles.field}>
        <label className={styles.field__label}>
          {label}
          <input
            className={styles.field__input}
            type={type}
            placeholder={placeholder}
            maxLength={maxLength}
            inputMode={inputMode}
          ></input>
        </label>
      </div>
    </>
  );
}

export default Input;
