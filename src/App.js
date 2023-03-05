import { Container, Grid } from '@mui/material';
import React from 'react'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Portfolio from './pages/Portfolio/Portfolio.js'
import Resume from './pages/Resume/Resume.js'
import {BrowserRouter as Router ,HashRouter , Route, Routes} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid 
        item xs={12} 
        sm={12} md={4} 
        lg={4}>
          <Profile/>
        </Grid>

        <Grid item xs style={{backgroundColor: 'pink'}}>
          <Header/>
          <HashRouter>
            <Routes>
              <Route path='/Portfolio' element={<Portfolio/>}/>
              <Route path="/" element={<Resume/>}/>
            </Routes>
          </HashRouter>
         <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
