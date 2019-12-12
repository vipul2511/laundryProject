import React ,{Component} from 'react';
import './App.css';
import YouTube from 'react-youtube';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
class App extends Component{
  
  render(){
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
  return (
   <div className="App">
     <div className="bg-img">
    <section className="section_img">
    <img className="background" src={require('./img/iron.jpg')} alt="laundry"/>
    <p className="item-1">We Care For All Your Valued Clothes.</p>
     <p className="item-2">  Trust Us, We Save Your Time.</p>
    <p className="item-3">  We Offer The Best Laundry Services.</p> 
    </section>
    <section className="second_img"> 
 
<Row>
  <Col></Col>

  <Col className="youtube_video">
    <YouTube
        videoId="sEm6U83v7SQ"
        opts={opts}
        onReady={this._onReady}
      /></Col></Row></section>
    <section> <img className="background second_img" src={require('./img/laundry.jpg')} alt="laundry"/></section>
  </div>
     </div> 
  );
}
_onReady(event) { 
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}
}

export default App;
