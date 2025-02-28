import React, { useState, useEffect } from "react";
import Img_greatmind from "./imgs/greatmind.png";
import Img_solana from "./imgs/solana.png";
import Img_bitcoin from "./imgs/bitcoin.png";
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
            <a href="#about">ABOUT</a>
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
            <h1>TOKENOMICS</h1>
            <p>TOTAL SUPPLY: 1,000,000,000</p>
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
      <footer>
        <p>© 2025 GreatMind Token. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
