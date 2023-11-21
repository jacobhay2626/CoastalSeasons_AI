import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "./App.css";
import { useState } from 'react';
import NavBar from './NavBar';
import Home from './about';
import Gallery from './gallery';
import Mint from './mint';
const ethers = require("ethers");



function App() {
  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)
  // const [accounts, setAccounts] = useState([])
  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
    const provider = new ethers.BrowserProvider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })
  }
  return (
    <BrowserRouter>
      <div className="App">
        <>
        <NavBar web3Handler={web3Handler} account={account}/>
        </>
        <div>      
          <Routes>
            <Route index element={
              <Home />
            }/>
            <Route path='/home' element={
              <Home />
            }/>
            <Route path = '/gallery' element={
              <Gallery />
            } />
            <Route path='/mint' element={
              <Mint />
            }/>
          </Routes>
          </div>
        </div>
      {/* <div className='moving-background'></div> */}
    </BrowserRouter>  
  );
}

export default App;
