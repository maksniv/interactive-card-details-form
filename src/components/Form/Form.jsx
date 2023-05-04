import Input from '../Input/Input';
import styles from './Form.module.scss';

function Form() {
  // input.addEventListener('input', (ev) => {
  //   // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
  //   if (
  //     (ev.inputType === 'insertText' && !numbers.test(ev.data)) ||
  //     input.value.length > 19
  //   ) {
  //     input.value = input.value.slice(0, input.value.length - 1);
  //     return;
  //   }

  //   // обеспечиваем работу клавиш "backspace","delete"
  //   let value = input.value;
  //   if (
  //     ev.inputType === 'deleteContentBackward' &&
  //     regExp.test(value.slice(-4))
  //   ) {
  //     input.value = input.value.slice(0, input.value.length - 1);
  //     return;
  //   }

  //   // добавяем пробел после 4 цифр подряд
  //   if (regExp.test(value.slice(-4)) && value.length < 19) {
  //     input.value += ' ';
  //   }
  // });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type={'text'}
          label={'CARDHOLDER NAME'}
          placeholder={'e.g. Jane Appleseed'}
          inputMode={'text'}
        />
        <Input
          type={'text'}
          label={'CARD NUMBER'}
          placeholder={'e.g. 1234 5678 9123 0000'}
          maxLength={'16'}
          inputMode={'numeric'}
        />
        <div className={styles.form__wrapper}>
          <div className={styles.form__wrapper_data}>
            <Input
              type={'text'}
              label={'EXP. DATA'}
              placeholder={'MM'}
              maxLength={'2'}
              inputMode={'numeric'}
            />
            <Input
              type={'text'}
              label={'(MM/YY)'}
              placeholder={'YY'}
              maxLength={'2'}
              inputMode={'numeric'}
            />
          </div>
          <div className={styles.form__wrapper_cvc}>
            <Input
              type={'text'}
              label={'CVC'}
              placeholder={'e.g. 123'}
              maxLength={'3'}
              inputMode={'numeric'}
            />
          </div>
        </div>
        <button className={styles.form__button}>Confirm</button>
      </form>
    </>
  );
}

export default Form;
