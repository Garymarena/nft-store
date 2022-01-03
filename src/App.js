import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';

function App() {
  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?assets_contract_address=0x0B0C1C7A3c6067104B9B8530BF0c9E7BB02E75De&order_direction=asc'
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
    <div className='app'>
    <Header />
    <CollectionCard 
      id={0} 
      name={'Bandana Punk'} 
      traits={[{'value': 7}]} 
      image='https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu' />
    <PunkList punkListData={punkListData} />
  </div>
  )
}

export default App;
