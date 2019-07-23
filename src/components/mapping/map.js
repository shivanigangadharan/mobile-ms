import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import 'ol/ol.css';
import Map from 'ol/Map';
import Draw from 'ol/interaction/Draw.js';
import View from 'ol/View.js';
import '../mapping/react-geo.css';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import { OSM, Vector as VectorSource } from 'ol/source.js';
import WKT from 'ol/format/WKT.js';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceOsm from 'ol/source/OSM';
import OlSourceVector from 'ol/source/Vector';
import { fromLonLat } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';

// import {
//   SimpleButton,
//   MapComponent,
//   DigitizeButton,
//   ToggleGroup
// } from '@terrestris/react-geo';

// const map = new OlMap({
//   layers: [
//     new OlLayerTile({
//       name: 'OSM',
//       source: new OlSourceOsm()
//     }),
//   ],
//   view: new OlView({
//     center: fromLonLat([77.1025, 28.7041]),
//     zoom: 12
//   })
// });

const ControlPanel = () => {
  return (
    <div>
      <Button>Layers</Button>
    </div>
  )
}

const MapDiv = styled.div`
  width: 100%;
  height: 500px;
  background-color: red;
`
const DrawBtn = styled(Button)`
margin: 2%;
`
var raster = new TileLayer({
  source: new OSM()
});

var source = new VectorSource({ wrapX: false });

var vector = new VectorLayer({
  source: source
});

var mapp = new Map({
  layers: [raster, vector],
  target: 'map',
  view: new View({
    center: [-11000000, 4600000],
    zoom: 4
  })
});
var draw;

function handleDraw(event) {
  var value = "Polygon";
  draw = new Draw({
    source: source,
    type: "Polygon"
  });
  mapp.addInteraction(draw);
}
function handleStop() {
  mapp.removeInteraction(draw);
}
function getLocation() {
  //to get coordinates
  var features = vector.getSource().getFeatures();

  features.forEach(function (feature) {
    console.log(feature.getGeometry().getCoordinates());
  })
}
export const MapView = () => {
  const mapDiv = useRef(null);

  useEffect((() => {
    mapp.setTarget(mapDiv.current);
    // map.renderSync();
  }), []);

  return (
    <>
      {/* <ControlPanel /> */}
      {/* <MapComponent map={map} /> */}
      <MapDiv ref={mapDiv} />
      <DrawBtn onClick={handleDraw} type="primary"><Icon type="edit" /> Draw </DrawBtn>
      <DrawBtn onClick={handleStop} type="primary"><Icon type="edit" /> Stop drawing </DrawBtn>
      <DrawBtn onClick={getLocation} type="primary"><Icon type="edit" /> Get coordinates </DrawBtn>

    </>
  )
}