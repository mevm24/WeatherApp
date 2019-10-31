import React from 'react';
import './App.css';
import LocationList from './Components/LocationList';

const cities = [
    'Medellín,co',
    'Bogotá,co',
    'Santa Marta,co',
    'Barranqulla,co',
    'Cartagena,co',
    'Barcelona,es',
    'Zurich'
];

function App() {
    return (
        <div className="App">
            <LocationList cities={cities} />
        </div>
    );
}

export default App;
