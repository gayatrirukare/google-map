import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';

class MapC extends Component {
  render(){
      return (
        <div className="App">
          <Map google={this.props.google} zoom={14}>
    
            <Marker onClick={this.onMarkerClick}
              name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>

            </InfoWindow>
          </Map>
    );
            
        </div>
      );
      }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyD4-ZuXiIx1hKEPW68pScO-K18FcHU2U3I")
})(MapC)

