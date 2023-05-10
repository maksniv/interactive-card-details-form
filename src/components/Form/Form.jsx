import {
  cardNumberValidation,
  cardholderNameValidation,
  cvcValidation,
  mmValidation,
  yyValidation,
} from '../../utils/validation';
import Input from '../Input/Input';
import styles from './Form.module.scss';
import { useState } from 'react';
import { useForm, Controller, useFormState } from 'react-hook-form';

function Form() {
  const [success, setSuccess] = useState(true);

  const { handleSubmit, control, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      cardholderName: '',
      cardNumber: '',
      mm: '',
      yy: '',
      cvc: '',
    },
  });

  const { errors } = useFormState({ control });

  //     event.target.value = value
  //       .replace(/[^0-9]/g, '')
  //       .replace(/(.{4})/g, '$1 ')
  //       .trim();

  const onSubmit = (data) => {
    console.log(data);
    setSuccess(!success);
    reset();
  };

  return (
    <>
      {success ? (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name={'cardholderName'}
            control={control}
            rules={cardholderNameValidation}
            render={({ field }) => (
              <Input
                name={'cardholderName'}
                type={'text'}
                label={'CARDHOLDER NAME'}
                placeholder={'e.g. Jane Appleseed'}
                inputMode={'text'}
                onChange={(event) => field.onChange(event)}
                value={field.value}
                errors={errors.cardholderName?.message}
              />
            )}
          />
          <Controller
            name={'cardNumber'}
            control={control}
            rules={cardNumberValidation}
            render={({ field }) => (
              <Input
                name={'cardNumber'}
                type={'text'}
                label={'CARD NUMBER'}
                placeholder={'e.g. 1234 5678 9123 0000'}
                maxLength={'19'}
                inputMode={'numeric'}
                onChange={(event) => {
                  const value = event.target.value
                    .replace(/[^0-9]/g, '')
                    .replace(/(.{4})/g, '$1 ')
                    .trim();
                  field.onChange(value);
                }}
                value={field.value}
                errors={errors.cardNumber?.message}
              />
            )}
          />
          <div className={styles.form__wrapper}>
            <div className={styles.form__wrapper_data}>
              <Controller
                name={'mm'}
                control={control}
                rules={mmValidation}
                render={({ field }) => (
                  <Input
                    name={'mm'}
                    type={'text'}
                    label={'EXP. DATA'}
                    placeholder={'MM'}
                    maxLength={'2'}
                    inputMode={'numeric'}
                    onChange={(event) => field.onChange(event)}
                    value={field.value}
                    errors={errors.mm?.message}
                  />
                )}
              />
              <Controller
                name={'yy'}
                control={control}
                rules={yyValidation}
                render={({ field }) => (
                  <Input
                    name={'yy'}
                    type={'text'}
                    label={'(MM/YY)'}
                    placeholder={'YY'}
                    maxLength={'2'}
                    inputMode={'numeric'}
                    onChange={(event) => field.onChange(event)}
                    value={field.value}
                    errors={errors.yy?.message}
                  />
                )}
              />
            </div>
            <div className={styles.form__wrapper_cvc}>
              <Controller
                name={'cvc'}
                control={control}
                rules={cvcValidation}
                render={({ field }) => (
                  <Input
                    name={'cvc'}
                    type={'text'}
                    label={'CVC'}
                    placeholder={'e.g. 123'}
                    maxLength={'3'}
                    inputMode={'numeric'}
                    onChange={(event) => field.onChange(event)}
                    value={field.value}
                    errors={errors.cvc?.message}
                  />
                )}
              />
            </div>
          </div>
          <button className={styles.form__button}>Confirm</button>
        </form>
      ) : (
        <div className={styles.form__success}>
          <div className={styles.form__success_logo}></div>
          <h2 className={styles.form__success_title}>THANK YOU!</h2>
          <p className={styles.form__success_description}>
            We've added your card details
          </p>
          <button
            className={styles.form__success_button}
            onClick={() => setSuccess(!success)}
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
}

export default Form;
