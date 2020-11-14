import React, { Component } from 'react';
import { tourData } from '../../tourData';
import Tour from '../Tour/Tour';
import './tourlist.scss';

export default class Tourlist extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
    // console.log(id);
    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };
  render() {
    const { tours } = this.state;
    console.log('====================================');
    console.log(this.state.tours);
    console.log('====================================');
    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    );
  }
}
