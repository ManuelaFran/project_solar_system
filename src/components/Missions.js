import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    const listMissions = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />
    ));
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        <div className="listMissions">{ listMissions }</div>
      </div>
    );
  }
}

export default Missions;
