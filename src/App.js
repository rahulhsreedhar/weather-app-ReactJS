import React from 'react';
 import WeatherApp from './Component/WeatherApp/WeatherApp'
import { Provider } from "react-redux";
import store from "./redux/store";
import './App.css';

function App() {
  return (
 
<Provider store={store} >
  <WeatherApp/>
  </Provider>

   );
}

export default App;
