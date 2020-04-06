import React, { Component } from 'react';
import data from './data';
import './Section.css';
import Buttons from '../Components/Buttons';

export default class Section extends Component {
  constructor() {
    super();

    this.state = {
      person: data,
      count: 0,
    };
    this.nextBtn = this.nextBtn.bind(this);
    this.prevBtn = this.prevBtn.bind(this);
  }

  nextBtn() {
    console.log('button pressed');
    this.setState({ count: this.state.count + 1 });
  }

  prevBtn() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    // console.log(this.state.person);
    const mappedPerson = this.state.person.map((e) => {
      return (
        <div key={e.id} className='person-info'>
          <h1>
            {e.name.first} {e.name.last}
          </h1>
          <p>
            <span>From:</span> {e.city}, {e.country}
          </p>
          <p>
            <span>Job Title:</span> {e.title}
          </p>
          <p>
            <span>Employer</span> {e.employer}
          </p>
          <br />
          <p>
            <span>Favorite Movies:</span>
          </p>
          <p className='movies'>
            1. {e.favoriteMovies[0]}
            <br />
            2. {e.favoriteMovies[1]}
            <br />
            3. {e.favoriteMovies[2]}
          </p>
        </div>
      );
    });

    return (
      <div>
        <div className='section'>
          <h1 className='counter'>{this.state.count}/25</h1>
          {mappedPerson[this.state.count]}
        </div>
        <Buttons next={this.nextBtn} prev={this.prevBtn} />
      </div>
    );
  }
}
