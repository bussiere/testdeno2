/**
 * map.ts
 */
/**
 * */
//
 
// n
// @ts-ignore
// @ts-nocheck
 
//test
// @deno-types="./libs/@types/geojson/index.d.ts"
// @deno-types="./libs/@types/mapbox-gl/index.d.ts"
import mapboxgl from "./libs/mapbox-gl.js";
mapboxgl.accessToken =  "toto";

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
  });