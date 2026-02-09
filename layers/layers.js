var wms_layers = [];

var format_Sollentuna_0 = new ol.format.GeoJSON();
var features_Sollentuna_0 = format_Sollentuna_0.readFeatures(json_Sollentuna_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sollentuna_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sollentuna_0.addFeatures(features_Sollentuna_0);
var lyr_Sollentuna_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sollentuna_0, 
                style: style_Sollentuna_0,
                popuplayertitle: 'Sollentuna',
                interactive: true,
                title: '<img src="styles/legend/Sollentuna_0.png" /> Sollentuna'
            });
var format_Hansta_1 = new ol.format.GeoJSON();
var features_Hansta_1 = format_Hansta_1.readFeatures(json_Hansta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hansta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hansta_1.addFeatures(features_Hansta_1);
var lyr_Hansta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hansta_1, 
                style: style_Hansta_1,
                popuplayertitle: 'Hansta',
                interactive: true,
                title: '<img src="styles/legend/Hansta_1.png" /> Hansta'
            });
var format_Kista_2 = new ol.format.GeoJSON();
var features_Kista_2 = format_Kista_2.readFeatures(json_Kista_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kista_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kista_2.addFeatures(features_Kista_2);
var lyr_Kista_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kista_2, 
                style: style_Kista_2,
                popuplayertitle: 'Kista',
                interactive: true,
                title: '<img src="styles/legend/Kista_2.png" /> Kista'
            });
var format_r_3 = new ol.format.GeoJSON();
var features_r_3 = format_r_3.readFeatures(json_r_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_r_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_r_3.addFeatures(features_r_3);
var lyr_r_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_r_3, 
                style: style_r_3,
                popuplayertitle: 'Ör',
                interactive: true,
                title: '<img src="styles/legend/r_3.png" /> Ör'
            });
var format_Storskogen_4 = new ol.format.GeoJSON();
var features_Storskogen_4 = format_Storskogen_4.readFeatures(json_Storskogen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Storskogen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Storskogen_4.addFeatures(features_Storskogen_4);
var lyr_Storskogen_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Storskogen_4, 
                style: style_Storskogen_4,
                popuplayertitle: 'Storskogen',
                interactive: true,
                title: '<img src="styles/legend/Storskogen_4.png" /> Storskogen'
            });
var format_StoraUrsvik_5 = new ol.format.GeoJSON();
var features_StoraUrsvik_5 = format_StoraUrsvik_5.readFeatures(json_StoraUrsvik_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StoraUrsvik_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StoraUrsvik_5.addFeatures(features_StoraUrsvik_5);
var lyr_StoraUrsvik_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StoraUrsvik_5, 
                style: style_StoraUrsvik_5,
                popuplayertitle: 'Stora Ursvik',
                interactive: true,
                title: '<img src="styles/legend/StoraUrsvik_5.png" /> Stora Ursvik'
            });
var format_Rissne_6 = new ol.format.GeoJSON();
var features_Rissne_6 = format_Rissne_6.readFeatures(json_Rissne_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rissne_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rissne_6.addFeatures(features_Rissne_6);
var lyr_Rissne_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rissne_6, 
                style: style_Rissne_6,
                popuplayertitle: 'Rissne',
                interactive: true,
                title: '<img src="styles/legend/Rissne_6.png" /> Rissne'
            });
var format_LillaUrsvik_7 = new ol.format.GeoJSON();
var features_LillaUrsvik_7 = format_LillaUrsvik_7.readFeatures(json_LillaUrsvik_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LillaUrsvik_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LillaUrsvik_7.addFeatures(features_LillaUrsvik_7);
var lyr_LillaUrsvik_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LillaUrsvik_7, 
                style: style_LillaUrsvik_7,
                popuplayertitle: 'Lilla Ursvik',
                interactive: true,
                title: '<img src="styles/legend/LillaUrsvik_7.png" /> Lilla Ursvik'
            });
var format_LillaAlby_8 = new ol.format.GeoJSON();
var features_LillaAlby_8 = format_LillaAlby_8.readFeatures(json_LillaAlby_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LillaAlby_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LillaAlby_8.addFeatures(features_LillaAlby_8);
var lyr_LillaAlby_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LillaAlby_8, 
                style: style_LillaAlby_8,
                popuplayertitle: 'Lilla Alby',
                interactive: true,
                title: '<img src="styles/legend/LillaAlby_8.png" /> Lilla Alby'
            });
var format_Hallonbergen_9 = new ol.format.GeoJSON();
var features_Hallonbergen_9 = format_Hallonbergen_9.readFeatures(json_Hallonbergen_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hallonbergen_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hallonbergen_9.addFeatures(features_Hallonbergen_9);
var lyr_Hallonbergen_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hallonbergen_9, 
                style: style_Hallonbergen_9,
                popuplayertitle: 'Hallonbergen',
                interactive: true,
                title: '<img src="styles/legend/Hallonbergen_9.png" /> Hallonbergen'
            });
var format_Duvbo_10 = new ol.format.GeoJSON();
var features_Duvbo_10 = format_Duvbo_10.readFeatures(json_Duvbo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Duvbo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Duvbo_10.addFeatures(features_Duvbo_10);
var lyr_Duvbo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Duvbo_10, 
                style: style_Duvbo_10,
                popuplayertitle: 'Duvbo',
                interactive: true,
                title: '<img src="styles/legend/Duvbo_10.png" /> Duvbo'
            });
var format_CentralaSundbyberg_11 = new ol.format.GeoJSON();
var features_CentralaSundbyberg_11 = format_CentralaSundbyberg_11.readFeatures(json_CentralaSundbyberg_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentralaSundbyberg_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralaSundbyberg_11.addFeatures(features_CentralaSundbyberg_11);
var lyr_CentralaSundbyberg_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentralaSundbyberg_11, 
                style: style_CentralaSundbyberg_11,
                popuplayertitle: 'Centrala Sundbyberg',
                interactive: true,
                title: '<img src="styles/legend/CentralaSundbyberg_11.png" /> Centrala Sundbyberg'
            });
var format_Huvudsta_12 = new ol.format.GeoJSON();
var features_Huvudsta_12 = format_Huvudsta_12.readFeatures(json_Huvudsta_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huvudsta_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huvudsta_12.addFeatures(features_Huvudsta_12);
var lyr_Huvudsta_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huvudsta_12, 
                style: style_Huvudsta_12,
                popuplayertitle: 'Huvudsta',
                interactive: true,
                title: '<img src="styles/legend/Huvudsta_12.png" /> Huvudsta'
            });
var format_Rsunda_13 = new ol.format.GeoJSON();
var features_Rsunda_13 = format_Rsunda_13.readFeatures(json_Rsunda_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rsunda_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rsunda_13.addFeatures(features_Rsunda_13);
var lyr_Rsunda_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rsunda_13, 
                style: style_Rsunda_13,
                popuplayertitle: 'Råsunda',
                interactive: true,
                title: '<img src="styles/legend/Rsunda_13.png" /> Råsunda'
            });
var format_Skytteholm_14 = new ol.format.GeoJSON();
var features_Skytteholm_14 = format_Skytteholm_14.readFeatures(json_Skytteholm_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Skytteholm_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skytteholm_14.addFeatures(features_Skytteholm_14);
var lyr_Skytteholm_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Skytteholm_14, 
                style: style_Skytteholm_14,
                popuplayertitle: 'Skytteholm',
                interactive: true,
                title: '<img src="styles/legend/Skytteholm_14.png" /> Skytteholm'
            });
var format_Hagalund_15 = new ol.format.GeoJSON();
var features_Hagalund_15 = format_Hagalund_15.readFeatures(json_Hagalund_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hagalund_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hagalund_15.addFeatures(features_Hagalund_15);
var lyr_Hagalund_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hagalund_15, 
                style: style_Hagalund_15,
                popuplayertitle: 'Hagalund',
                interactive: true,
                title: '<img src="styles/legend/Hagalund_15.png" /> Hagalund'
            });
var format_Haga_16 = new ol.format.GeoJSON();
var features_Haga_16 = format_Haga_16.readFeatures(json_Haga_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Haga_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haga_16.addFeatures(features_Haga_16);
var lyr_Haga_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haga_16, 
                style: style_Haga_16,
                popuplayertitle: 'Haga',
                interactive: true,
                title: '<img src="styles/legend/Haga_16.png" /> Haga'
            });
var format_Kymlinge_17 = new ol.format.GeoJSON();
var features_Kymlinge_17 = format_Kymlinge_17.readFeatures(json_Kymlinge_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kymlinge_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kymlinge_17.addFeatures(features_Kymlinge_17);
var lyr_Kymlinge_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kymlinge_17,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_Kymlinge_17,
                popuplayertitle: 'Kymlinge',
                interactive: true,
                title: '<img src="styles/legend/Kymlinge_17.png" /> Kymlinge'
            });
var format_Kymlinge_18 = new ol.format.GeoJSON();
var features_Kymlinge_18 = format_Kymlinge_18.readFeatures(json_Kymlinge_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kymlinge_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kymlinge_18.addFeatures(features_Kymlinge_18);
var lyr_Kymlinge_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kymlinge_18,
maxResolution:15.402176339082557,
 
                style: style_Kymlinge_18,
                popuplayertitle: 'Kymlinge',
                interactive: true,
                title: '<img src="styles/legend/Kymlinge_18.png" /> Kymlinge'
            });
var format_Brotorp_19 = new ol.format.GeoJSON();
var features_Brotorp_19 = format_Brotorp_19.readFeatures(json_Brotorp_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brotorp_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brotorp_19.addFeatures(features_Brotorp_19);
var lyr_Brotorp_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brotorp_19,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_Brotorp_19,
                popuplayertitle: 'Brotorp',
                interactive: true,
                title: '<img src="styles/legend/Brotorp_19.png" /> Brotorp'
            });
var format_Brotorp_20 = new ol.format.GeoJSON();
var features_Brotorp_20 = format_Brotorp_20.readFeatures(json_Brotorp_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brotorp_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brotorp_20.addFeatures(features_Brotorp_20);
var lyr_Brotorp_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brotorp_20,
maxResolution:15.402176339082557,
 
                style: style_Brotorp_20,
                popuplayertitle: 'Brotorp',
                interactive: true,
                title: '<img src="styles/legend/Brotorp_20.png" /> Brotorp'
            });
var format_Jrva_21 = new ol.format.GeoJSON();
var features_Jrva_21 = format_Jrva_21.readFeatures(json_Jrva_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jrva_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jrva_21.addFeatures(features_Jrva_21);
var lyr_Jrva_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jrva_21,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_Jrva_21,
                popuplayertitle: 'Järva',
                interactive: true,
                title: '<img src="styles/legend/Jrva_21.png" /> Järva'
            });
var format_Jrva_22 = new ol.format.GeoJSON();
var features_Jrva_22 = format_Jrva_22.readFeatures(json_Jrva_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jrva_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jrva_22.addFeatures(features_Jrva_22);
var lyr_Jrva_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jrva_22,
maxResolution:15.402176339082557,
 
                style: style_Jrva_22,
                popuplayertitle: 'Järva',
                interactive: true,
                title: '<img src="styles/legend/Jrva_22.png" /> Järva'
            });
var format_Ulriksdal_23 = new ol.format.GeoJSON();
var features_Ulriksdal_23 = format_Ulriksdal_23.readFeatures(json_Ulriksdal_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ulriksdal_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ulriksdal_23.addFeatures(features_Ulriksdal_23);
var lyr_Ulriksdal_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ulriksdal_23,
maxResolution:15.402176339082557,
 
                style: style_Ulriksdal_23,
                popuplayertitle: 'Ulriksdal',
                interactive: true,
                title: '<img src="styles/legend/Ulriksdal_23.png" /> Ulriksdal'
            });
var format_ULRIKSDAL_24 = new ol.format.GeoJSON();
var features_ULRIKSDAL_24 = format_ULRIKSDAL_24.readFeatures(json_ULRIKSDAL_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ULRIKSDAL_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULRIKSDAL_24.addFeatures(features_ULRIKSDAL_24);
var lyr_ULRIKSDAL_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULRIKSDAL_24,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_ULRIKSDAL_24,
                popuplayertitle: 'ULRIKSDAL',
                interactive: true,
                title: '<img src="styles/legend/ULRIKSDAL_24.png" /> ULRIKSDAL'
            });
var format_BERGSHAMRA_25 = new ol.format.GeoJSON();
var features_BERGSHAMRA_25 = format_BERGSHAMRA_25.readFeatures(json_BERGSHAMRA_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERGSHAMRA_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERGSHAMRA_25.addFeatures(features_BERGSHAMRA_25);
var lyr_BERGSHAMRA_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BERGSHAMRA_25,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_BERGSHAMRA_25,
                popuplayertitle: 'BERGSHAMRA',
                interactive: true,
                title: '<img src="styles/legend/BERGSHAMRA_25.png" /> BERGSHAMRA'
            });
var format_Bergshamra_26 = new ol.format.GeoJSON();
var features_Bergshamra_26 = format_Bergshamra_26.readFeatures(json_Bergshamra_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bergshamra_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bergshamra_26.addFeatures(features_Bergshamra_26);
var lyr_Bergshamra_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bergshamra_26,
maxResolution:15.402176339082557,
 
                style: style_Bergshamra_26,
                popuplayertitle: 'Bergshamra',
                interactive: true,
                title: '<img src="styles/legend/Bergshamra_26.png" /> Bergshamra'
            });
var group_Abrahamsberg = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Abrahamsberg'});
var group_Alvik = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Alvik'});
var group_Beckomberga = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Beckomberga'});
var group_Blackeberg = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Blackeberg'});
var group_BrommaKyrka = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Bromma Kyrka'});
var group_Bllsta = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Bällsta'});
var group_Eneby = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Eneby'});
var group_Flysta = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Flysta'});
var group_Hglandet = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Höglandet'});
var group_Mariehll = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mariehäll'});
var group_Nockeby = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Nockeby'});
var group_Nockebyhov = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Nockebyhov'});
var group_Norrangby = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Norra Ängby'});
var group_Nlsta = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Nälsta'});
var group_Olovslund = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Olovslund'});
var group_Riksby = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Riksby'});
var group_Smedsltten = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Smedslätten'});
var group_Solhem = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Solhem'});
var group_StoraMossen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Stora Mossen'});
var group_Sundby = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Sundby'});
var group_Sdrangby = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Södra Ängby'});
var group_Traneberg = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Traneberg'});
var group_Ulvsunda = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ulvsunda'});
var group_UlvsundaIndustriomrde = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ulvsunda Industriområde'});
var group_ppelviken = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Äppelviken'});
var group_keshov = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Åkeshov'});
var group_keslund = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Åkeslund'});
var group_lsten = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ålsten'});
var group_Djurgrden = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Djurgården'});
var group_Fredhll = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Fredhäll'});
var group_GamlaStan = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Gamla Stan'});
var group_Hjorthagen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hjorthagen'});
var group_Kristineberg = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Kristineberg'});
var group_Kungsholmen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Kungsholmen'});
var group_Ladugrdsgrdet = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ladugårdsgärdet'});
var group_LillaEssingen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lilla Essingen'});
var group_Lngholmen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Långholmen'});
var group_Marieberg = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Marieberg'});
var group_NorraDjurgrden = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Norra Djurgården'});
var group_Norrmalm = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Norrmalm'});
var group_Reimersholme = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Reimersholme'});
var group_Riddarholmen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Riddarholmen'});
var group_Skeppsholmen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Skeppsholmen'});
var group_Stadshagen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Stadshagen'});
var group_StoraEssingen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Stora Essingen'});
var group_Sdermalm = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Södermalm'});
var group_Vasastaden = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vasastaden'});
var group_stermalm = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Östermalm'});
var group_Bromsten = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Bromsten'});
var group_Grimsta = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Grimsta'});
var group_HsselbyGrd = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hässelby Gård'});
var group_HsselbyStrand = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hässelby Strand'});
var group_HsselbyVillastad = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hässelby Villastad'});
var group_Klvesta = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Kälvesta'});
var group_LundaIndustriomrde = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lunda Industriområde'});
var group_Rcksta = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Råcksta'});
var group_Vinsta = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vinsta'});
var group_Vllingby = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vällingby'});
var group_Liding = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lidingö'});
var group_Sderort = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Söderort'});
var group_Bergshamra = new ol.layer.Group({
                                layers: [lyr_BERGSHAMRA_25,lyr_Bergshamra_26,],
                                fold: 'close',
                                title: 'Bergshamra'});
var group_Ulriksdal = new ol.layer.Group({
                                layers: [lyr_Ulriksdal_23,lyr_ULRIKSDAL_24,],
                                fold: 'close',
                                title: 'Ulriksdal'});
var group_Jrva = new ol.layer.Group({
                                layers: [lyr_Jrva_21,lyr_Jrva_22,],
                                fold: 'close',
                                title: 'Järva'});
var group_Brotorp = new ol.layer.Group({
                                layers: [lyr_Brotorp_19,lyr_Brotorp_20,],
                                fold: 'open',
                                title: 'Brotorp'});
var group_Kymlinge = new ol.layer.Group({
                                layers: [lyr_Kymlinge_17,lyr_Kymlinge_18,],
                                fold: 'close',
                                title: 'Kymlinge'});
var group_Haga = new ol.layer.Group({
                                layers: [lyr_Haga_16,],
                                fold: 'close',
                                title: 'Haga'});
var group_Hagalund = new ol.layer.Group({
                                layers: [lyr_Hagalund_15,],
                                fold: 'close',
                                title: 'Hagalund'});
var group_Skytteholm = new ol.layer.Group({
                                layers: [lyr_Skytteholm_14,],
                                fold: 'close',
                                title: 'Skytteholm'});
var group_Rsunda = new ol.layer.Group({
                                layers: [lyr_Rsunda_13,],
                                fold: 'close',
                                title: 'Råsunda'});
var group_Huvudsta = new ol.layer.Group({
                                layers: [lyr_Huvudsta_12,],
                                fold: 'close',
                                title: 'Huvudsta'});
var group_CentralSundbyberg = new ol.layer.Group({
                                layers: [lyr_CentralaSundbyberg_11,],
                                fold: 'close',
                                title: 'Central Sundbyberg'});
var group_Duvbo = new ol.layer.Group({
                                layers: [lyr_Duvbo_10,],
                                fold: 'close',
                                title: 'Duvbo'});
var group_Hallonbergen = new ol.layer.Group({
                                layers: [lyr_Hallonbergen_9,],
                                fold: 'close',
                                title: 'Hallonbergen'});
var group_LillaAlby = new ol.layer.Group({
                                layers: [lyr_LillaAlby_8,],
                                fold: 'close',
                                title: 'Lilla Alby'});
var group_LillaUrsvik = new ol.layer.Group({
                                layers: [lyr_LillaUrsvik_7,],
                                fold: 'close',
                                title: 'Lilla Ursvik'});
var group_Rissne = new ol.layer.Group({
                                layers: [lyr_Rissne_6,],
                                fold: 'close',
                                title: 'Rissne'});
var group_StoraUrsvik = new ol.layer.Group({
                                layers: [lyr_StoraUrsvik_5,],
                                fold: 'close',
                                title: 'Stora Ursvik'});
var group_Storskogen = new ol.layer.Group({
                                layers: [lyr_Storskogen_4,],
                                fold: 'close',
                                title: 'Storskogen'});
var group_r = new ol.layer.Group({
                                layers: [lyr_r_3,],
                                fold: 'close',
                                title: 'Ör'});
var group_Jrflla = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Järfälla'});
var group_Nacka = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Nacka'});
var group_SdraHammarbyhamnen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Södra Hammarbyhamnen'});
var group_Danderyd = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Danderyd'});
var group_Kista = new ol.layer.Group({
                                layers: [lyr_Kista_2,],
                                fold: 'close',
                                title: 'Kista'});
var group_Akalla = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Akalla'});
var group_Hansta = new ol.layer.Group({
                                layers: [lyr_Hansta_1,],
                                fold: 'close',
                                title: 'Hansta'});
var group_Rinkeby = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Rinkeby'});
var group_Tensta = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Tensta'});
var group_Husby = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Husby'});
var group_Sollentuna = new ol.layer.Group({
                                layers: [lyr_Sollentuna_0,],
                                fold: 'close',
                                title: 'Sollentuna'});
var group_Vgar = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vägar'});

lyr_Sollentuna_0.setVisible(true);lyr_Hansta_1.setVisible(true);lyr_Kista_2.setVisible(true);lyr_r_3.setVisible(true);lyr_Storskogen_4.setVisible(true);lyr_StoraUrsvik_5.setVisible(true);lyr_Rissne_6.setVisible(true);lyr_LillaUrsvik_7.setVisible(true);lyr_LillaAlby_8.setVisible(true);lyr_Hallonbergen_9.setVisible(true);lyr_Duvbo_10.setVisible(true);lyr_CentralaSundbyberg_11.setVisible(true);lyr_Huvudsta_12.setVisible(true);lyr_Rsunda_13.setVisible(true);lyr_Skytteholm_14.setVisible(true);lyr_Hagalund_15.setVisible(true);lyr_Haga_16.setVisible(true);lyr_Kymlinge_17.setVisible(true);lyr_Kymlinge_18.setVisible(true);lyr_Brotorp_19.setVisible(true);lyr_Brotorp_20.setVisible(true);lyr_Jrva_21.setVisible(true);lyr_Jrva_22.setVisible(true);lyr_Ulriksdal_23.setVisible(true);lyr_ULRIKSDAL_24.setVisible(true);lyr_BERGSHAMRA_25.setVisible(true);lyr_Bergshamra_26.setVisible(true);
var layersList = [group_Sollentuna,group_Hansta,group_Kista,group_r,group_Storskogen,group_StoraUrsvik,group_Rissne,group_LillaUrsvik,group_LillaAlby,group_Hallonbergen,group_Duvbo,group_CentralSundbyberg,group_Huvudsta,group_Rsunda,group_Skytteholm,group_Hagalund,group_Haga,group_Kymlinge,group_Brotorp,group_Jrva,group_Ulriksdal,group_Bergshamra];
lyr_Sollentuna_0.set('fieldAliases', {'fid': 'fid', });
lyr_Hansta_1.set('fieldAliases', {'fid': 'fid', });
lyr_Kista_2.set('fieldAliases', {'fid': 'fid', });
lyr_r_3.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Storskogen_4.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_StoraUrsvik_5.set('fieldAliases', {'fid': 'fid', });
lyr_Rissne_6.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_LillaUrsvik_7.set('fieldAliases', {'fid': 'fid', });
lyr_LillaAlby_8.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Hallonbergen_9.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Duvbo_10.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_CentralaSundbyberg_11.set('fieldAliases', {'fid': 'fid', });
lyr_Huvudsta_12.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Rsunda_13.set('fieldAliases', {'fid': 'fid', });
lyr_Skytteholm_14.set('fieldAliases', {'fid': 'fid', });
lyr_Hagalund_15.set('fieldAliases', {'fid': 'fid', });
lyr_Haga_16.set('fieldAliases', {'fid': 'fid', });
lyr_Kymlinge_17.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Kymlinge_18.set('fieldAliases', {'fid': 'fid', });
lyr_Brotorp_19.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Brotorp_20.set('fieldAliases', {'fid': 'fid', });
lyr_Jrva_21.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Jrva_22.set('fieldAliases', {'fid': 'fid', });
lyr_Ulriksdal_23.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_ULRIKSDAL_24.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_BERGSHAMRA_25.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Bergshamra_26.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Sollentuna_0.set('fieldImages', {'fid': 'TextEdit', });
lyr_Hansta_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_Kista_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_r_3.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Storskogen_4.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_StoraUrsvik_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_Rissne_6.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_LillaUrsvik_7.set('fieldImages', {'fid': 'TextEdit', });
lyr_LillaAlby_8.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Hallonbergen_9.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Duvbo_10.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_CentralaSundbyberg_11.set('fieldImages', {'fid': 'TextEdit', });
lyr_Huvudsta_12.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Rsunda_13.set('fieldImages', {'fid': 'TextEdit', });
lyr_Skytteholm_14.set('fieldImages', {'fid': 'TextEdit', });
lyr_Hagalund_15.set('fieldImages', {'fid': 'TextEdit', });
lyr_Haga_16.set('fieldImages', {'fid': 'TextEdit', });
lyr_Kymlinge_17.set('fieldImages', {'fid': 'TextEdit', 'NAMN': 'TextEdit', 'KATEGORI': 'TextEdit', 'color_id': 'Range', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Kymlinge_18.set('fieldImages', {'fid': 'TextEdit', });
lyr_Brotorp_19.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Brotorp_20.set('fieldImages', {'fid': 'TextEdit', });
lyr_Jrva_21.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Jrva_22.set('fieldImages', {'fid': 'TextEdit', });
lyr_Ulriksdal_23.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_ULRIKSDAL_24.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_BERGSHAMRA_25.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Bergshamra_26.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Sollentuna_0.set('fieldLabels', {'fid': 'no label', });
lyr_Hansta_1.set('fieldLabels', {'fid': 'no label', });
lyr_Kista_2.set('fieldLabels', {'fid': 'no label', });
lyr_r_3.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Storskogen_4.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_StoraUrsvik_5.set('fieldLabels', {'fid': 'no label', });
lyr_Rissne_6.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_LillaUrsvik_7.set('fieldLabels', {'fid': 'no label', });
lyr_LillaAlby_8.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Hallonbergen_9.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Duvbo_10.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_CentralaSundbyberg_11.set('fieldLabels', {'fid': 'no label', });
lyr_Huvudsta_12.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Rsunda_13.set('fieldLabels', {'fid': 'no label', });
lyr_Skytteholm_14.set('fieldLabels', {'fid': 'no label', });
lyr_Hagalund_15.set('fieldLabels', {'fid': 'no label', });
lyr_Haga_16.set('fieldLabels', {'fid': 'no label', });
lyr_Kymlinge_17.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Kymlinge_18.set('fieldLabels', {'fid': 'no label', });
lyr_Brotorp_19.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Brotorp_20.set('fieldLabels', {'fid': 'no label', });
lyr_Jrva_21.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Jrva_22.set('fieldLabels', {'fid': 'no label', });
lyr_Ulriksdal_23.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_ULRIKSDAL_24.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_BERGSHAMRA_25.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Bergshamra_26.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Bergshamra_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});