var map = new ol.Map({
    target: 'map',
    layers: [
       new ol.layer.Tile({
         source: new ol.source.OSM()
       })
    ],
    view: new ol.View({
       center: ol.proj.fromLonLat([-122.4194, 37.7749]),
       zoom: 12
    })
   });
// sourcery skip: avoid-using-var
   var marker = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-122.4194, 37.7749]))
   });
   
   var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
       features: [marker]
    })
   });
   
   map.addLayer(vectorLayer);
