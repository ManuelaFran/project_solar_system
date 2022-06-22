import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    const listPlanets = planets.map(({ name, image }) => (
      <PlanetCard key={ name } planetName={ name } planetImage={ image } />
    ));
    return (
      <div data-testid="solar-system" className="solarSystem">
        <Title headline="Planetas" />
        <div className="listPlanets">{ listPlanets }</div>
      </div>
    );
  }
}

export default SolarSystem;
