import './App.css';
import Header from './component/Header/Header';
import Bacground from './component/background/Background';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';
// import Tarrifs from './component/Tarrifs/Tarrifs';
import { Navigate, Route, Routes } from 'react-router-dom';
import Keys from './component/keys/Keys';
import Rewiew from './component/rewiew/Rewiew';
import React from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Bacground />
      <Header />

      <Routes>
        <Route exact path="/" element={<Navigate to="/main" replace={true}/>} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="/tariffs" element={<Tarrifs />} /> */}
        <Route path="/examples" element={<Keys />} />
        <Route path="/reviews" element={<Rewiew />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
