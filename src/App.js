import { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Jumbotron />
      </main>
    </Fragment>
  );
}

export default App;
