import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GOOGLE_MAPS_KEY from '../api-keys';

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 87.6298,
            lng: 41.8781
        },
        zoom: 11
    };
    
    render() {
        debugger;
        return (
            
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }} //FIX THIS
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                ></GoogleMapReact>
            </div>
        );
    }
}
export default GoogleMap;
