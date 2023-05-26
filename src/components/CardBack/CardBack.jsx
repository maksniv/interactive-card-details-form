import styles from './CardBack.module.scss';
import { useContext } from 'react';
import { CardDataContext } from '../../context';

function CardBack() {
  const { cvc } = useContext(CardDataContext);

  return (
    <>
      <div className={styles['card-back']}>
        <div className={styles['card-back__CVC']}>{cvc}</div>
      </div>
    </>
  );
}

export default CardBack;
