ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32614").setExtent([472201.170822, 2131647.672257, 480082.366833, 2136804.982341]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Prediosdeunslouso_1 = new ol.format.GeoJSON();
var features_Prediosdeunslouso_1 = format_Prediosdeunslouso_1.readFeatures(json_Prediosdeunslouso_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Prediosdeunslouso_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prediosdeunslouso_1.addFeatures(features_Prediosdeunslouso_1);
var lyr_Prediosdeunslouso_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prediosdeunslouso_1, 
                style: style_Prediosdeunslouso_1,
                popuplayertitle: 'Predios de un sólo uso',
                interactive: true,
    title: 'Predios de un sólo uso<br />\
    <img src="styles/legend/Prediosdeunslouso_1_0.png" /> Abasto<br />\
    <img src="styles/legend/Prediosdeunslouso_1_1.png" /> Agrícola<br />\
    <img src="styles/legend/Prediosdeunslouso_1_2.png" /> Baldío<br />\
    <img src="styles/legend/Prediosdeunslouso_1_3.png" /> Cancha deportiva<br />\
    <img src="styles/legend/Prediosdeunslouso_1_4.png" /> Comercio<br />\
    <img src="styles/legend/Prediosdeunslouso_1_5.png" /> Cultura<br />\
    <img src="styles/legend/Prediosdeunslouso_1_6.png" /> Deportes<br />\
    <img src="styles/legend/Prediosdeunslouso_1_7.png" /> Educación<br />\
    <img src="styles/legend/Prediosdeunslouso_1_8.png" /> Estacionamiento<br />\
    <img src="styles/legend/Prediosdeunslouso_1_9.png" /> Habitacional<br />\
    <img src="styles/legend/Prediosdeunslouso_1_10.png" /> Industria<br />\
    <img src="styles/legend/Prediosdeunslouso_1_11.png" /> Jardín<br />\
    <img src="styles/legend/Prediosdeunslouso_1_12.png" /> Oficina<br />\
    <img src="styles/legend/Prediosdeunslouso_1_13.png" /> Panteón<br />\
    <img src="styles/legend/Prediosdeunslouso_1_14.png" /> Salud<br />\
    <img src="styles/legend/Prediosdeunslouso_1_15.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_Prediosdeunslouso_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Prediosdeunslouso_1];
lyr_Prediosdeunslouso_1.set('fieldAliases', {'fid': 'fid', 'Cuenta catastral': 'Cuenta catastral', 'Propietario': 'Propietario', 'Calle': 'Calle', 'Código postal': 'Código postal', 'Colonia': 'Colonia', 'Superficie de suelo': 'Superficie de suelo', 'Superficie de construcción': 'Superficie de construcción', 'Uso': 'Uso', 'Rango de niveles': 'Rango de niveles', 'Calidad de la construcción': 'Calidad de la construcción', 'Año de la construcción': 'Año de la construcción', 'Valor unitario de suelo': 'Valor unitario de suelo', 'Valor del suelo': 'Valor del suelo', 'Valor unitario de construcción': 'Valor unitario de construcción', 'Valor de la construcción': 'Valor de la construcción', 'Valor catastral': 'Valor catastral', 'Impuesto bimestral': 'Impuesto bimestral', });
lyr_Prediosdeunslouso_1.set('fieldImages', {'fid': 'TextEdit', 'Cuenta catastral': 'TextEdit', 'Propietario': 'TextEdit', 'Calle': 'TextEdit', 'Código postal': 'TextEdit', 'Colonia': 'TextEdit', 'Superficie de suelo': 'TextEdit', 'Superficie de construcción': 'TextEdit', 'Uso': 'TextEdit', 'Rango de niveles': 'TextEdit', 'Calidad de la construcción': 'TextEdit', 'Año de la construcción': 'Range', 'Valor unitario de suelo': 'TextEdit', 'Valor del suelo': 'TextEdit', 'Valor unitario de construcción': 'TextEdit', 'Valor de la construcción': 'TextEdit', 'Valor catastral': 'TextEdit', 'Impuesto bimestral': 'TextEdit', });
lyr_Prediosdeunslouso_1.set('fieldLabels', {'fid': 'no label', 'Cuenta catastral': 'inline label - always visible', 'Propietario': 'inline label - always visible', 'Calle': 'inline label - always visible', 'Código postal': 'inline label - always visible', 'Colonia': 'inline label - always visible', 'Superficie de suelo': 'inline label - always visible', 'Superficie de construcción': 'inline label - always visible', 'Uso': 'inline label - always visible', 'Rango de niveles': 'inline label - always visible', 'Calidad de la construcción': 'inline label - always visible', 'Año de la construcción': 'inline label - always visible', 'Valor unitario de suelo': 'inline label - always visible', 'Valor del suelo': 'inline label - always visible', 'Valor unitario de construcción': 'inline label - always visible', 'Valor de la construcción': 'inline label - always visible', 'Valor catastral': 'inline label - always visible', 'Impuesto bimestral': 'inline label - always visible', });
lyr_Prediosdeunslouso_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'hard-light';
});