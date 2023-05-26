import styles from './App.module.scss';
import CardBlock from './components/CardBlock/CardBlock';
import Form from './components/Form/Form';
import { ContextProvider } from './context';

function App() {
  return (
    <>
      <ContextProvider>
        <div className={styles.app}>
          <CardBlock></CardBlock>
          <div className={styles.app__FormBlock}>
            <Form></Form>
          </div>
        </div>
      </ContextProvider>
    </>
  );
}

export default App;
