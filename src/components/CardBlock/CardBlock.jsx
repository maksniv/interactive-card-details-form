import styles from './CardBlock.module.scss';
import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';

function CardBlock() {
  return (
    <>
      <section className={styles['card-block']}>
        <div className={styles['card-block__background-image']}></div>
        <div className={styles['card-block__card-back-block']}>
          <CardBack></CardBack>
        </div>
        <div className={styles['card-block__card-front-block']}>
          <CardFront></CardFront>
        </div>
      </section>
    </>
  )
}

export default CardBlock;
