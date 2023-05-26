import styles from './CardFront.module.scss';
import { useContext } from 'react';
import { CardDataContext } from '../../context';

function CardFront() {
  const { cardholderName, cardNumber, mm, yy } = useContext(CardDataContext);

  return (
    <>
      <div className={styles['card-front']}>
        <div className={styles['card-front__logo']}></div>
        <div className={styles['card-front__CARDHOLDER-NAME']}>
          {cardholderName}
        </div>
        <div className={styles['card-front__CARD-NUMBER']}>{cardNumber}</div>
        <div className={styles['card-front__DATA']}>
          {mm} / {yy}
        </div>
      </div>
    </>
  );
}

export default CardFront;
