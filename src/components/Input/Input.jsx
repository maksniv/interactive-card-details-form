import styles from './Input.module.scss';

function Input({
  type,
  label,
  placeholder,
  maxLength,
  inputMode,
  value,
  onChange,
  name,
  errors,
}) {
  return (
    <>
      <div className={styles.field}>
        <label className={styles.field__label}>
          {label}
          <input
            className={styles.field__input}
            type={type}
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
            inputMode={inputMode}
            onChange={onChange}
            value={value}
          ></input>
        </label>
        {errors && <p className={styles.field__errors}>{errors}</p>}
      </div>
    </>
  );
}

export default Input;
