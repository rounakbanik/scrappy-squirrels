import { Fragment, useRef } from 'react';
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

  const membershipRef = useRef(null);
  const resourcesRef = useRef(null);
  const teamRef = useRef(null);

  const scrollHandler = (section) => {
    if (section === 'roadmap') membershipRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'resources') resourcesRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'team') teamRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Fragment>
      <Header scrollHandler={scrollHandler} />
      <main>
        <Jumbotron />
        <About />
        <Community />
        <Membership ref={membershipRef} />
        <Resources ref={resourcesRef} />
        <Team ref={teamRef} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
