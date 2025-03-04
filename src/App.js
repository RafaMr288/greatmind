import React, { useState, useEffect } from "react";
import Img_greatmind from "./imgs/greatmind.png";
import Img_solana from "./imgs/solana.png";
import Img_bitcoin from "./imgs/bitcoin.png";
import Img_fe from "./imgs/fe.png"
import "./styles.css";

function App() {
  const [solanaPrice, setSolanaPrice] = useState(null);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,solana&vs_currencies=usd"
      );
      const data = await response.json();
      setSolanaPrice(data.solana.usd);
      setBitcoinPrice(data.bitcoin.usd);
    } catch (error) {
      console.log("Error fetching prices", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <header>
        <nav>
          <div className="menu-2">
            <img src={Img_greatmind} alt="GreatMind Logo" width="50px" />
            <h1>GreatMind</h1>
          </div>
          <div className="menu">
            <a href="#roadmap">ROADMAP</a>
            <a href="#tokenomics">TOKENOMICS</a>
            <a href="#buy">HOW BUY</a>
          </div>
        </nav>
      </header>
      <div className="price-solana">
        <div>
          <img src={Img_greatmind} alt="GreatMind" width="50px" />
          <p>GreatMind</p>
          <p>LAUNCH</p>
        </div>
        <div>
          <img src={Img_solana} alt="Solana" width="50px" />
          <p>SOLANA</p>
          <p>${solanaPrice || "Loading..."}</p>
        </div>
        <div>
          <img src={Img_bitcoin} alt="Bitcoin" width="50px" />
          <p>BITCOIN</p>
          <p>${bitcoinPrice || "Loading..."}</p>
        </div>
      </div>
      <div className="about" id="about">
        <div className="about-1">
          <div className="title" style={{textAlign:'center'}}>
            <img src={Img_greatmind} alt="GreatMind" width="50px" />
            <h2>GreatMind</h2>
          </div>
          <p>
            The GreatMind token is a digital asset built on the Ethereum blockchain, 
            focused on innovation and sustainable growth. It facilitates fast and secure transactions, 
            using smart contracts to support tech and educational projects in a decentralized ecosystem.
          </p>
          <div className="supply" id="tokenomics">
            <div>
              <h1>TOKENOMICS</h1>
              <p>TOTAL SUPPLY: 1,000,000,000</p>
            </div>
            <div>
              <h1>TOKEN ADDRESS</h1>
              <p>Launch</p>
              <div>
                <button>COPY</button>
              </div>
            </div>
          </div>
          <div className="roadmap-1" id="roadmap">
            <h1>Phases</h1>
            {["10k", "50k", "100k", "200k", "500k - Swap Dev", "1M - Swap Launch", "5M - NFT GreatMind"].map(
              (phase, index) => (
                <div key={index}>
                  <h2>Phase {index + 1}</h2>
                  <p>{phase} MarketCap</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="howbuy">
        <h1>HOW BUY</h1>
        <div>
          <div>
            <h3>1.Create a wallet with Phantom</h3>
            <p>Visit phantom.App and follow the simple steps to create a new account with the phantom app or browser extension.</p>
          </div>
          <div>
            <h3>2.Get some $SOL</h3>
            <p>Tap the BUY button in the app to purchase Solana, or deposit $SOL to your Phantom wallet from the crypto exchange of your choice.</p>
          </div>
          <div>
            <h3>3.Swap $SOL for $MIND</h3>
            <p>Tap the SWAP icon in your Phantom wallet and paste the $MIND token address. Swap your $SOL for $MIND.</p>
          </div>
          <div>
            <h3>4.You are now an $MIND holder!</h3>
            <p>Welcome to the $MIND Squad!</p>
          </div>
        </div>
      </div>
      <div className="exchanges">
        <h2>FUTURE EXCHANGES</h2>
        <div>
            <img src={Img_fe}></img>
        </div>
      </div>
      <footer>
        <p>© 2025 GreatMind Token. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
