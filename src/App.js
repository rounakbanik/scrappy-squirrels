import { Fragment } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Jumbotron />
        <About />
      </main>
    </Fragment>
  );
}

export default App;
