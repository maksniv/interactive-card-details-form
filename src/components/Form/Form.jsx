import {
  cardNumberValidation,
  cardholderNameValidation,
  cvcValidation,
  mmValidation,
  yyValidation,
} from '../../utils/validation';
import Input from '../Input/Input';
import styles from './Form.module.scss';
import { useState, useContext } from 'react';
import { CardDataContext } from '../../context';
import { useForm, Controller, useFormState } from 'react-hook-form';

function Form() {
  const {
    updateCardholderName,
    updateCardNumber,
    updateMM,
    updateYY,
    updateCVC,
    clearForm,
  } = useContext(CardDataContext);

  const [success, setSuccess] = useState(true);

  const [shake, setShake] = useState(false);

  const animate = () => {
    setShake(true);

    setTimeout(() => setShake(false), 700);
  };

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

  const onSubmit = (data) => {
    console.log(data);
    setSuccess(!success);
    clearForm();
    reset();
  };

  return (
    <>
      {success ? (
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
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
                onChange={(event) => {
                  updateCardholderName(event.target.value);
                  field.onChange(event);
                }}
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
                  updateCardNumber(value);
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
                    onChange={(event) => {
                      updateMM(event.target.value);
                      field.onChange(event);
                    }}
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
                    onChange={(event) => {
                      updateYY(event.target.value);
                      field.onChange(event);
                    }}
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
                    onChange={(event) => {
                      updateCVC(event.target.value);
                      field.onChange(event);
                    }}
                    value={field.value}
                    errors={errors.cvc?.message}
                  />
                )}
              />
            </div>
          </div>
          <button
            onClick={animate}
            className={
              shake
                ? styles.form__button + ' ' + styles.shake
                : styles.form__button
            }
          >
            Confirm
          </button>
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
