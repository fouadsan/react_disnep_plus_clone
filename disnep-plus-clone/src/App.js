import React from 'react';
import styled from 'styled-components'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';

function App() {
  return (
    <div className="App" style={{ background:"url('/images/home-background.png') center center / cover" }}>
      <Router>
        <Container>
              <Header />
                  <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/detail/:id" element={<Detail />} />
                  </Routes>
        </Container>
      </Router>
    </div>
  );
}

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 750px;
  }
  @media (min-width: 992px) {
    max-width: 970px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
  @media (min-width: 1400px) {
      max-width: 1320px;
  }
`

export default App;
