//Route
import { Route, Switch, useLocation } from 'react-router-dom';

//Global Style
import GlobalStyle from './components/GlobalStyle';

//Import pages
import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
//Animation
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
