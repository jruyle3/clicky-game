import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"
//image imports (since I'm not using a server)
import img_1 from "./images/img_1.png"
import img_2 from "./images/img_2.png"
import img_3 from "./images/img_3.png"
import img_4 from "./images/img_4.png"
import img_5 from "./images/img_5.png"
import img_6 from "./images/img_6.png"
import img_7 from "./images/img_7.png"
import img_8 from "./images/img_8.png"
import img_9 from "./images/img_9.png"
import img_10 from "./images/img_10.png"
import img_11 from "./images/img_11.png"
import img_12 from "./images/img_12.png"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "img_1":
        return `${img_1}`
      case "img_2":
        return `${img_2}`
      case "img_3":
        return `${img_3}`
      case "img_4":
        return `${img_4}`
      case "img_5":
        return `${img_5}`
      case "img_6":
        return `${img_6}`
      case "img_7":
        return `${img_7}`
      case "img_8":
        return `${img_8}`
      case "img_9":
        return `${img_9}`
      case "img_10":
        return `${img_10}`
      case "img_11":
        return `${img_11}`
      case "img_12":
        return `${img_12}`
      default:
        return `${img_1}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
