import styles from './App.module.scss';
import CardBlock from './components/CardBlock/CardBlock';
import Form from './components/Form/Form';

function App() {
  return (
    <>
      <div className={styles.app}>
        <CardBlock></CardBlock>
        <div className={styles.app__FormBlock}>
          <Form></Form>
        </div>
      </div>
    </>
  );
}

export default App;
