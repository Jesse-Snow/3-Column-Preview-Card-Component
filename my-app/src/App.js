import React from 'react';
import './index.css';
import iconSedans from './assets/icon-sedans.svg';
import iconLuxury from './assets/icon-luxury.svg';
import iconSvus from './assets/icon-suvs.svg';

function App() {
  return (
    <div className="App">
      <Card color='cardComponent--bk-orange' image={iconSedans} >
        Choose a sedan for its affordability 
        and excellent fuel economy. Ideal for
        cruising in the city or on your next 
        road trip, its fast.
      </Card>

      <Card color='cardComponent--bk-dkSyan' image={iconSvus}>
       Take an SUV for its spacious interior, power,
       and versatility. Perfect for your next family 
       vacation and off-road adventures.
      </Card>

      <Card color='cardComponent--bk-vrDkSyan' image={iconLuxury}>
        Cruise in the best car brands without the 
        bloated prices. Enjoy the enhanced comfort 
        of a luxury rental and arrive in style.
      </Card>
    </div>
  );
}

class Card extends React.Component {
  render(){
    return (
      <div className={`cardComponent ${this.props.color}`}>
        <img className = 'cardComponent__icon' src={this.props.image} alt='Sedan Car' />
          <h1 className='cardComponent__header'>SEDANS</h1>
          <p className='cardComponent__txt'>
            {this.props.children}
          </p>

          <a href='#' className='cardComponent__btn'>Learn More</a>
      </div>
    )
  }
}

export default App;
