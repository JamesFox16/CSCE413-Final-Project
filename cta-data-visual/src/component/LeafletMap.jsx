import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const style = {
    width: '100%',
    height: '85vh'
};

export default class LeafletMap extends Component {
    componentDidMount() {
        this.map = L.map('leafletMap', {
            center: [41.876465, -87.621887],
            zoom: 11,
            layers: [
                L.tileLayer(
                    'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}',
                    {
                        attribution:
                            'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                        subdomains: 'abcd',
                        minZoom: 0,
                        maxZoom: 18,
                        ext: 'png'
                    }
                )
            ]
        });
    }

    componentDidUpdate() {}

    render() {
        return <div id="leafletMap" style={style}></div>;
    }
}
