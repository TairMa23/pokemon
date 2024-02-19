
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PokemonCard from './pokemon_card';


function App() {

  const [pokemons, setPokemones] = useState([]);
  // const [isLoading,setIsLoading]=useState(false);

  const loadData = async () => {
    // setIsLoading(true);
    const response = await axios('https://api.pokemontcg.io/v2/cards');
    if (response.status == 200) {
      if (response.data.data.length > 0) {
        // setIsLoading(false)
        const data = response.data.data;
        setPokemones(data);
      }
      else {
        // setIsLoading(false)
        toast.error("no data for you")
      }
    }
    else {
      toast.error("Error while loading the data")
    }
  }
  useEffect(() => {
    // Call the loadData function when the component mounts
    loadData();
  }, []); // The empty dependency array ensures that the effect runs only once, equivalent to componentDidMount

  return (
    < Container >
      <Row>
        {pokemons.map((poke) => (
          <PokemonCard poke={poke} />
        ))}
      </Row>
    </Container >
  )
}

export default App
