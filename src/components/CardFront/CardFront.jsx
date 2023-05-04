import styles from './CardFront.module.scss';

function CardFront() {
  return (
    <>
      <div className={styles['card-front']}>
        <div className={styles['card-front__logo']}></div>
        <div className={styles['card-front__CARDHOLDER-NAME']}>
          Jane Appleseed
        </div>
        <div className={styles['card-front__CARD-NUMBER']}>
          1234 5678 9123 0000
        </div>
        <div className={styles['card-front__DATA']}>00 / 00</div>
      </div>
    </>
  );
}

export default CardFront;
