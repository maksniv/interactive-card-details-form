import styles from './CardBack.module.scss';

function CardBack() {
  return (
    <>
      <div className={styles['card-back']}>
        <div className={styles['card-back__CVC']}>120</div>
      </div>
    </>
  );
}

export default CardBack;
