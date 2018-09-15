import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Mainsection from "./components/Mainsection";
import LuxuryCarsF from "./components/LuxuryCarsF";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import LuxuryCarD from "./LuxuryCars.json";
import './App.css';

class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
    LuxuryCarD: LuxuryCarD,
    unclickedLuxuryCar: LuxuryCarD,
  };

  componentDidMount() {
  }

  CarsArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectLuxuryCar = cars => {
      const findCars = this.state.unclickedLuxuryCar.find(item => item.cars === cars);

      if(findCars === undefined) {
        this.setState({ 
            message: "Incorrect!",
            topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
            curScore: 0,
            LuxuryCarD: LuxuryCarD,
            unclickedLuxuryCar: LuxuryCarD,
        });
      }
      else {
        const newCars = this.state.unclickedLuxuryCar.filter(item => item.cars !== cars);
        
        this.setState({ 
            message: "Correct!",
            curScore: this.state.curScore + 1,
            LuxuryCarD: LuxuryCarD,
            unclickedLuxuryCar: newCars,
        });
      }

      this.CarsArray(LuxuryCarD);

  };


  render() {
    return (
      <div>
        <Navbar     
            message={this.state.message}
            curScore={this.state.curScore}
            topScore={this.state.topScore}/>
        <Mainsection />
        <Wrapper>
          {this.state.LuxuryCarD.map(carsImg => (
            <LuxuryCarsF
              cars={carsImg.cars}
              image={carsImg.image}
              selectLuxuryCar={this.selectLuxuryCar}
              curScore={this.state.curScore}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
