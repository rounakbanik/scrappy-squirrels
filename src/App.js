import { Fragment } from 'react';
import './App.css';
import About from './components/About';
import Community from './components/Community';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Membership from './components/Membership';
import Resources from './components/Resources';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Jumbotron />
        <About />
        <Community />
        <Membership />
        <Resources />
        <Team />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
