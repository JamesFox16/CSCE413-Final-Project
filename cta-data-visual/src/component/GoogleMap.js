import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { keys } from '@material-ui/core/styles/createBreakpoints';

var googleKey = require('../api-keys.json');

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 0,
            lng: -41.81
        },
        zoom: 2
    };

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: googleKey.GOOGLE_MAPS_KEY
                    }} //FIX THIS
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                ></GoogleMapReact>
            </div>
        );
    }
}
export default GoogleMap;
