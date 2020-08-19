import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { theme } from './components/Theme';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import LandingPage from './components/LandingPage';
import Services from './components/Services';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header 
          value={value} 
          setValue={setValue} 
          selectedIndex={selectedIndex} 
          setSelectedIndex={setSelectedIndex} 
        />
        <Switch>
          <Route 
            exact 
            path="/" 
            render={(props) => 
              <LandingPage 
                {...props}
                setValue={setValue} 
                setSelectedIndex={setSelectedIndex}/>
            } 
          />
          <Route 
            exact 
            path="/services" 
            render={(props) => 
              <Services 
                {...props}
                setValue={setValue} 
                setSelectedIndex={setSelectedIndex}/>
            } 
          />
          <Route 
            exact 
            path="/customsoftware" 
            component={() => <div>Custom Software</div>} 
          />
          <Route 
            exact 
            path="/mobileapps" 
            component={() => <div>Mobile apps</div>}
          />
          <Route
            exact 
            path="/websites" 
            component={() => <div>Websites</div>} 
          />
          <Route 
            exact 
            path="/revolution" 
            component={() => <div>The Revolution</div>} 
          />
          <Route 
            exact 
            path="/about" 
            component={() => <div>About us</div>} 
          />
          <Route 
            exact 
            path="/contact" 
            component={() => <div>Contact Us</div>} 
          />
          <Route 
            exact
            path="/estimate" 
            component={() => <div>Estimate</div>} 
          />
        </Switch>
        <Footer 
          setValue={setValue} 
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
