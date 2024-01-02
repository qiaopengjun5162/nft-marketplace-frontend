import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
import UploadImage from './UploadImage.js';
import UploadSuccess from './UploadSuccess.js';
// import axios from 'axios';

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    // getWalletAddress();
    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', function (accounts) {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setWalletAddress("");
        }
      });
    } else {
      console.log("Please install Metamask");
    }
  }


  async function getWalletAddress() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }
        );
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    }
    else {
      alert("Please initialize your wallet");
      console.log("Please install MetaMask.");
    }
  }

  return (
    <div className="container">
      <Router>
        <Navbar onConnectwallet={getWalletAddress} walletAddress={walletAddress} />
        {/* <p>{walletAddress}</p> */}
        {/* <UploadSuccess /> */}

        <Routes>
          {/* <Route path="/create-nft" exact element={<UploadImage address={walletAddress} />} /> */}
          <Route path="/" exact element={<UploadImage address={walletAddress} />} />
          <Route path="/success" element={<UploadSuccess />} />

          {/* <Route path="/nft-detail/:tokenId" element={<NFTDetail />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
