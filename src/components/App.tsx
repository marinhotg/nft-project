import { useState } from 'react';
import '../styles/App.css';
import Logo from './Logo';
import Emoji from './Emoji'

function App() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [hasNFT, setHasNFT] = useState<boolean>(false);

  const handleConnectClick = () => {
    setIsConnected(true);
  }

  const handleMintClick = () => {
    setHasNFT(true);
  } 

  return (
    <div className="App">
      <header className="App-header">
        <p>{isConnected ? (hasNFT ? "Parabéns, você já tem nossa NFT!" : "Você pode mintar nossa NFT!") : "Olá, você encontrou nossa NFT, conecte sua carteira!"}</p>
        <br/>
        {!isConnected && <Logo />}
        <br/>
        {!isConnected && <button className='button' onClick={handleConnectClick}>Conectar</button>}
        {(isConnected && !hasNFT) && <button className='button' onClick={handleMintClick}>Pegar NFT!</button>}
        {hasNFT && <Emoji />}
      </header>
    </div>
  );
}

export default App;