import { useState } from 'react';
import { fetchAddressByCep } from './services/cepService';
import { fetchWeather } from './services/weatherService';
import CepForm from './components/CepForm';
import AddressInfo from './components/AddressInfo';
import WeatherInfo from './components/WeatherInfo';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [address, setAddress] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCepSubmit = async (cep) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const addressData = await fetchAddressByCep(cep);
      setAddress(addressData);
      
      const weatherData = await fetchWeather(addressData.lat, addressData.lng);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Consulta de CEP e Previsão do Tempo</h1>
      <CepForm onSubmit={handleCepSubmit} isLoading={isLoading} />
      
      {isLoading && <Loading />}
      
      {error && <div className="error">{error}</div>}
      
      <div className="results">
        <AddressInfo address={address} />
        <WeatherInfo weather={weather} />
      </div>
    </div>
  );
}

export default App;