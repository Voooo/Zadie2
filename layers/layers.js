ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3006").setExtent([656035.194439, 6574753.959708, 689156.138898, 6595313.258136]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tensta_1 = new ol.format.GeoJSON();
var features_Tensta_1 = format_Tensta_1.readFeatures(json_Tensta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Tensta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tensta_1.addFeatures(features_Tensta_1);
var lyr_Tensta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tensta_1, 
                style: style_Tensta_1,
                popuplayertitle: 'Tensta',
                interactive: true,
                title: '<img src="styles/legend/Tensta_1.png" /> Tensta'
            });
var format_TENSTA1_2 = new ol.format.GeoJSON();
var features_TENSTA1_2 = format_TENSTA1_2.readFeatures(json_TENSTA1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_TENSTA1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TENSTA1_2.addFeatures(features_TENSTA1_2);
var lyr_TENSTA1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TENSTA1_2,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_TENSTA1_2,
                popuplayertitle: 'TENSTA1',
                interactive: true,
                title: '<img src="styles/legend/TENSTA1_2.png" /> TENSTA1'
            });
var format_Kista_3 = new ol.format.GeoJSON();
var features_Kista_3 = format_Kista_3.readFeatures(json_Kista_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Kista_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kista_3.addFeatures(features_Kista_3);
var lyr_Kista_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kista_3, 
                style: style_Kista_3,
                popuplayertitle: 'Kista',
                interactive: true,
                title: '<img src="styles/legend/Kista_3.png" /> Kista'
            });
var format_Danderyd_4 = new ol.format.GeoJSON();
var features_Danderyd_4 = format_Danderyd_4.readFeatures(json_Danderyd_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Danderyd_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Danderyd_4.addFeatures(features_Danderyd_4);
var lyr_Danderyd_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Danderyd_4, 
                style: style_Danderyd_4,
                popuplayertitle: 'Danderyd',
                interactive: true,
                title: '<img src="styles/legend/Danderyd_4.png" /> Danderyd'
            });
var format_stberga_5 = new ol.format.GeoJSON();
var features_stberga_5 = format_stberga_5.readFeatures(json_stberga_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_stberga_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stberga_5.addFeatures(features_stberga_5);
var lyr_stberga_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stberga_5, 
                style: style_stberga_5,
                popuplayertitle: 'Östberga',
                interactive: true,
                title: '<img src="styles/legend/stberga_5.png" /> Östberga'
            });
var format_rby_6 = new ol.format.GeoJSON();
var features_rby_6 = format_rby_6.readFeatures(json_rby_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_rby_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rby_6.addFeatures(features_rby_6);
var lyr_rby_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rby_6, 
                style: style_rby_6,
                popuplayertitle: 'Örby',
                interactive: true,
                title: '<img src="styles/legend/rby_6.png" /> Örby'
            });
var format_rsta_7 = new ol.format.GeoJSON();
var features_rsta_7 = format_rsta_7.readFeatures(json_rsta_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_rsta_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rsta_7.addFeatures(features_rsta_7);
var lyr_rsta_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rsta_7, 
                style: style_rsta_7,
                popuplayertitle: 'Årsta',
                interactive: true,
                title: '<img src="styles/legend/rsta_7.png" /> Årsta'
            });
var format_lvsj_8 = new ol.format.GeoJSON();
var features_lvsj_8 = format_lvsj_8.readFeatures(json_lvsj_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_lvsj_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lvsj_8.addFeatures(features_lvsj_8);
var lyr_lvsj_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lvsj_8, 
                style: style_lvsj_8,
                popuplayertitle: 'Älvsjö',
                interactive: true,
                title: '<img src="styles/legend/lvsj_8.png" /> Älvsjö'
            });
var format_Tallkrogen_9 = new ol.format.GeoJSON();
var features_Tallkrogen_9 = format_Tallkrogen_9.readFeatures(json_Tallkrogen_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Tallkrogen_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tallkrogen_9.addFeatures(features_Tallkrogen_9);
var lyr_Tallkrogen_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tallkrogen_9, 
                style: style_Tallkrogen_9,
                popuplayertitle: 'Tallkrogen',
                interactive: true,
                title: '<img src="styles/legend/Tallkrogen_9.png" /> Tallkrogen'
            });
var format_Stureby_10 = new ol.format.GeoJSON();
var features_Stureby_10 = format_Stureby_10.readFeatures(json_Stureby_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Stureby_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stureby_10.addFeatures(features_Stureby_10);
var lyr_Stureby_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stureby_10, 
                style: style_Stureby_10,
                popuplayertitle: 'Stureby',
                interactive: true,
                title: '<img src="styles/legend/Stureby_10.png" /> Stureby'
            });
var format_Solberga_11 = new ol.format.GeoJSON();
var features_Solberga_11 = format_Solberga_11.readFeatures(json_Solberga_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Solberga_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solberga_11.addFeatures(features_Solberga_11);
var lyr_Solberga_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solberga_11, 
                style: style_Solberga_11,
                popuplayertitle: 'Solberga',
                interactive: true,
                title: '<img src="styles/legend/Solberga_11.png" /> Solberga'
            });
var format_SkarpncksGrd_12 = new ol.format.GeoJSON();
var features_SkarpncksGrd_12 = format_SkarpncksGrd_12.readFeatures(json_SkarpncksGrd_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_SkarpncksGrd_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SkarpncksGrd_12.addFeatures(features_SkarpncksGrd_12);
var lyr_SkarpncksGrd_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SkarpncksGrd_12, 
                style: style_SkarpncksGrd_12,
                popuplayertitle: 'Skarpnäcks Gård',
                interactive: true,
                title: '<img src="styles/legend/SkarpncksGrd_12.png" /> Skarpnäcks Gård'
            });
var format_Mlarhjden_13 = new ol.format.GeoJSON();
var features_Mlarhjden_13 = format_Mlarhjden_13.readFeatures(json_Mlarhjden_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Mlarhjden_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mlarhjden_13.addFeatures(features_Mlarhjden_13);
var lyr_Mlarhjden_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mlarhjden_13, 
                style: style_Mlarhjden_13,
                popuplayertitle: 'Mälarhöjden',
                interactive: true,
                title: '<img src="styles/legend/Mlarhjden_13.png" /> Mälarhöjden'
            });
var format_Midsommarkransen_14 = new ol.format.GeoJSON();
var features_Midsommarkransen_14 = format_Midsommarkransen_14.readFeatures(json_Midsommarkransen_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Midsommarkransen_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Midsommarkransen_14.addFeatures(features_Midsommarkransen_14);
var lyr_Midsommarkransen_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Midsommarkransen_14, 
                style: style_Midsommarkransen_14,
                popuplayertitle: 'Midsommarkransen',
                interactive: true,
                title: '<img src="styles/legend/Midsommarkransen_14.png" /> Midsommarkransen'
            });
var format_Lngbro_15 = new ol.format.GeoJSON();
var features_Lngbro_15 = format_Lngbro_15.readFeatures(json_Lngbro_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Lngbro_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lngbro_15.addFeatures(features_Lngbro_15);
var lyr_Lngbro_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lngbro_15, 
                style: style_Lngbro_15,
                popuplayertitle: 'Långbro',
                interactive: true,
                title: '<img src="styles/legend/Lngbro_15.png" /> Långbro'
            });
var format_Liljeholmen_16 = new ol.format.GeoJSON();
var features_Liljeholmen_16 = format_Liljeholmen_16.readFeatures(json_Liljeholmen_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Liljeholmen_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Liljeholmen_16.addFeatures(features_Liljeholmen_16);
var lyr_Liljeholmen_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Liljeholmen_16, 
                style: style_Liljeholmen_16,
                popuplayertitle: 'Liljeholmen',
                interactive: true,
                title: '<img src="styles/legend/Liljeholmen_16.png" /> Liljeholmen'
            });
var format_Larsboda_17 = new ol.format.GeoJSON();
var features_Larsboda_17 = format_Larsboda_17.readFeatures(json_Larsboda_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Larsboda_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Larsboda_17.addFeatures(features_Larsboda_17);
var lyr_Larsboda_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Larsboda_17, 
                style: style_Larsboda_17,
                popuplayertitle: 'Larsboda',
                interactive: true,
                title: '<img src="styles/legend/Larsboda_17.png" /> Larsboda'
            });
var format_Krrtorp_18 = new ol.format.GeoJSON();
var features_Krrtorp_18 = format_Krrtorp_18.readFeatures(json_Krrtorp_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Krrtorp_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Krrtorp_18.addFeatures(features_Krrtorp_18);
var lyr_Krrtorp_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Krrtorp_18, 
                style: style_Krrtorp_18,
                popuplayertitle: 'Kärrtorp',
                interactive: true,
                title: '<img src="styles/legend/Krrtorp_18.png" /> Kärrtorp'
            });
var format_Johanneshov_19 = new ol.format.GeoJSON();
var features_Johanneshov_19 = format_Johanneshov_19.readFeatures(json_Johanneshov_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Johanneshov_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Johanneshov_19.addFeatures(features_Johanneshov_19);
var lyr_Johanneshov_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Johanneshov_19, 
                style: style_Johanneshov_19,
                popuplayertitle: 'Johanneshov',
                interactive: true,
                title: '<img src="styles/legend/Johanneshov_19.png" /> Johanneshov'
            });
var format_Hkarngen_20 = new ol.format.GeoJSON();
var features_Hkarngen_20 = format_Hkarngen_20.readFeatures(json_Hkarngen_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Hkarngen_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hkarngen_20.addFeatures(features_Hkarngen_20);
var lyr_Hkarngen_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hkarngen_20, 
                style: style_Hkarngen_20,
                popuplayertitle: 'Hökarängen',
                interactive: true,
                title: '<img src="styles/legend/Hkarngen_20.png" /> Hökarängen'
            });
var format_Hgdalen_21 = new ol.format.GeoJSON();
var features_Hgdalen_21 = format_Hgdalen_21.readFeatures(json_Hgdalen_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Hgdalen_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hgdalen_21.addFeatures(features_Hgdalen_21);
var lyr_Hgdalen_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hgdalen_21, 
                style: style_Hgdalen_21,
                popuplayertitle: 'Högdalen',
                interactive: true,
                title: '<img src="styles/legend/Hgdalen_21.png" /> Högdalen'
            });
var format_Hgerstenssen_22 = new ol.format.GeoJSON();
var features_Hgerstenssen_22 = format_Hgerstenssen_22.readFeatures(json_Hgerstenssen_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Hgerstenssen_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hgerstenssen_22.addFeatures(features_Hgerstenssen_22);
var lyr_Hgerstenssen_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hgerstenssen_22, 
                style: style_Hgerstenssen_22,
                popuplayertitle: 'Hägerstensåsen',
                interactive: true,
                title: '<img src="styles/legend/Hgerstenssen_22.png" /> Hägerstensåsen'
            });
var format_Hgersten_23 = new ol.format.GeoJSON();
var features_Hgersten_23 = format_Hgersten_23.readFeatures(json_Hgersten_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Hgersten_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hgersten_23.addFeatures(features_Hgersten_23);
var lyr_Hgersten_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hgersten_23, 
                style: style_Hgersten_23,
                popuplayertitle: 'Hägersten',
                interactive: true,
                title: '<img src="styles/legend/Hgersten_23.png" /> Hägersten'
            });
var format_Hammarbyhjden_24 = new ol.format.GeoJSON();
var features_Hammarbyhjden_24 = format_Hammarbyhjden_24.readFeatures(json_Hammarbyhjden_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Hammarbyhjden_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hammarbyhjden_24.addFeatures(features_Hammarbyhjden_24);
var lyr_Hammarbyhjden_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hammarbyhjden_24, 
                style: style_Hammarbyhjden_24,
                popuplayertitle: 'Hammarbyhöjden',
                interactive: true,
                title: '<img src="styles/legend/Hammarbyhjden_24.png" /> Hammarbyhöjden'
            });
var format_Gubbngen_25 = new ol.format.GeoJSON();
var features_Gubbngen_25 = format_Gubbngen_25.readFeatures(json_Gubbngen_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Gubbngen_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gubbngen_25.addFeatures(features_Gubbngen_25);
var lyr_Gubbngen_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gubbngen_25, 
                style: style_Gubbngen_25,
                popuplayertitle: 'Gubbängen',
                interactive: true,
                title: '<img src="styles/legend/Gubbngen_25.png" /> Gubbängen'
            });
var format_GamlaEnskede_26 = new ol.format.GeoJSON();
var features_GamlaEnskede_26 = format_GamlaEnskede_26.readFeatures(json_GamlaEnskede_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_GamlaEnskede_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GamlaEnskede_26.addFeatures(features_GamlaEnskede_26);
var lyr_GamlaEnskede_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GamlaEnskede_26, 
                style: style_GamlaEnskede_26,
                popuplayertitle: 'Gamla Enskede',
                interactive: true,
                title: '<img src="styles/legend/GamlaEnskede_26.png" /> Gamla Enskede'
            });
var format_Frungen_27 = new ol.format.GeoJSON();
var features_Frungen_27 = format_Frungen_27.readFeatures(json_Frungen_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Frungen_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frungen_27.addFeatures(features_Frungen_27);
var lyr_Frungen_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frungen_27, 
                style: style_Frungen_27,
                popuplayertitle: 'Fruängen',
                interactive: true,
                title: '<img src="styles/legend/Frungen_27.png" /> Fruängen'
            });
var format_FarstaStrand_28 = new ol.format.GeoJSON();
var features_FarstaStrand_28 = format_FarstaStrand_28.readFeatures(json_FarstaStrand_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_FarstaStrand_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FarstaStrand_28.addFeatures(features_FarstaStrand_28);
var lyr_FarstaStrand_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FarstaStrand_28, 
                style: style_FarstaStrand_28,
                popuplayertitle: 'Farsta Strand',
                interactive: true,
                title: '<img src="styles/legend/FarstaStrand_28.png" /> Farsta Strand'
            });
var format_Farsta_29 = new ol.format.GeoJSON();
var features_Farsta_29 = format_Farsta_29.readFeatures(json_Farsta_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Farsta_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Farsta_29.addFeatures(features_Farsta_29);
var lyr_Farsta_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Farsta_29, 
                style: style_Farsta_29,
                popuplayertitle: 'Farsta',
                interactive: true,
                title: '<img src="styles/legend/Farsta_29.png" /> Farsta'
            });
var format_Fagersj_30 = new ol.format.GeoJSON();
var features_Fagersj_30 = format_Fagersj_30.readFeatures(json_Fagersj_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Fagersj_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fagersj_30.addFeatures(features_Fagersj_30);
var lyr_Fagersj_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fagersj_30, 
                style: style_Fagersj_30,
                popuplayertitle: 'Fagersjö',
                interactive: true,
                title: '<img src="styles/legend/Fagersj_30.png" /> Fagersjö'
            });
var format_Enskedefltet_31 = new ol.format.GeoJSON();
var features_Enskedefltet_31 = format_Enskedefltet_31.readFeatures(json_Enskedefltet_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Enskedefltet_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enskedefltet_31.addFeatures(features_Enskedefltet_31);
var lyr_Enskedefltet_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Enskedefltet_31, 
                style: style_Enskedefltet_31,
                popuplayertitle: 'Enskedefältet',
                interactive: true,
                title: '<img src="styles/legend/Enskedefltet_31.png" /> Enskedefältet'
            });
var format_Bredng_32 = new ol.format.GeoJSON();
var features_Bredng_32 = format_Bredng_32.readFeatures(json_Bredng_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Bredng_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bredng_32.addFeatures(features_Bredng_32);
var lyr_Bredng_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bredng_32, 
                style: style_Bredng_32,
                popuplayertitle: 'Bredäng',
                interactive: true,
                title: '<img src="styles/legend/Bredng_32.png" /> Bredäng'
            });
var format_Bagarmossen_33 = new ol.format.GeoJSON();
var features_Bagarmossen_33 = format_Bagarmossen_33.readFeatures(json_Bagarmossen_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Bagarmossen_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bagarmossen_33.addFeatures(features_Bagarmossen_33);
var lyr_Bagarmossen_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bagarmossen_33, 
                style: style_Bagarmossen_33,
                popuplayertitle: 'Bagarmossen',
                interactive: true,
                title: '<img src="styles/legend/Bagarmossen_33.png" /> Bagarmossen'
            });
var format_Aspudden_34 = new ol.format.GeoJSON();
var features_Aspudden_34 = format_Aspudden_34.readFeatures(json_Aspudden_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Aspudden_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aspudden_34.addFeatures(features_Aspudden_34);
var lyr_Aspudden_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aspudden_34, 
                style: style_Aspudden_34,
                popuplayertitle: 'Aspudden',
                interactive: true,
                title: '<img src="styles/legend/Aspudden_34.png" /> Aspudden'
            });
var format_SdraHammarbyhamnen_35 = new ol.format.GeoJSON();
var features_SdraHammarbyhamnen_35 = format_SdraHammarbyhamnen_35.readFeatures(json_SdraHammarbyhamnen_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_SdraHammarbyhamnen_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SdraHammarbyhamnen_35.addFeatures(features_SdraHammarbyhamnen_35);
var lyr_SdraHammarbyhamnen_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SdraHammarbyhamnen_35,
maxResolution:15.402176339082557,
 
                style: style_SdraHammarbyhamnen_35,
                popuplayertitle: 'Södra Hammarbyhamnen',
                interactive: true,
                title: '<img src="styles/legend/SdraHammarbyhamnen_35.png" /> Södra Hammarbyhamnen'
            });
var format_Nacka_36 = new ol.format.GeoJSON();
var features_Nacka_36 = format_Nacka_36.readFeatures(json_Nacka_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Nacka_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nacka_36.addFeatures(features_Nacka_36);
var lyr_Nacka_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nacka_36, 
                style: style_Nacka_36,
                popuplayertitle: 'Nacka',
                interactive: true,
                title: '<img src="styles/legend/Nacka_36.png" /> Nacka'
            });
var format_Jrflla_37 = new ol.format.GeoJSON();
var features_Jrflla_37 = format_Jrflla_37.readFeatures(json_Jrflla_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Jrflla_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jrflla_37.addFeatures(features_Jrflla_37);
var lyr_Jrflla_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jrflla_37, 
                style: style_Jrflla_37,
                popuplayertitle: 'Järfälla',
                interactive: true,
                title: '<img src="styles/legend/Jrflla_37.png" /> Järfälla'
            });
var format_r_38 = new ol.format.GeoJSON();
var features_r_38 = format_r_38.readFeatures(json_r_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_r_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_r_38.addFeatures(features_r_38);
var lyr_r_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_r_38, 
                style: style_r_38,
                popuplayertitle: 'Ör',
                interactive: true,
                title: '<img src="styles/legend/r_38.png" /> Ör'
            });
var format_Storskogen_39 = new ol.format.GeoJSON();
var features_Storskogen_39 = format_Storskogen_39.readFeatures(json_Storskogen_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Storskogen_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Storskogen_39.addFeatures(features_Storskogen_39);
var lyr_Storskogen_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Storskogen_39, 
                style: style_Storskogen_39,
                popuplayertitle: 'Storskogen',
                interactive: true,
                title: '<img src="styles/legend/Storskogen_39.png" /> Storskogen'
            });
var format_StoraUrsvik_40 = new ol.format.GeoJSON();
var features_StoraUrsvik_40 = format_StoraUrsvik_40.readFeatures(json_StoraUrsvik_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_StoraUrsvik_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StoraUrsvik_40.addFeatures(features_StoraUrsvik_40);
var lyr_StoraUrsvik_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StoraUrsvik_40, 
                style: style_StoraUrsvik_40,
                popuplayertitle: 'Stora Ursvik',
                interactive: true,
                title: '<img src="styles/legend/StoraUrsvik_40.png" /> Stora Ursvik'
            });
var format_Rissne_41 = new ol.format.GeoJSON();
var features_Rissne_41 = format_Rissne_41.readFeatures(json_Rissne_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Rissne_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rissne_41.addFeatures(features_Rissne_41);
var lyr_Rissne_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rissne_41, 
                style: style_Rissne_41,
                popuplayertitle: 'Rissne',
                interactive: true,
                title: '<img src="styles/legend/Rissne_41.png" /> Rissne'
            });
var format_LillaUrsvik_42 = new ol.format.GeoJSON();
var features_LillaUrsvik_42 = format_LillaUrsvik_42.readFeatures(json_LillaUrsvik_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_LillaUrsvik_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LillaUrsvik_42.addFeatures(features_LillaUrsvik_42);
var lyr_LillaUrsvik_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LillaUrsvik_42, 
                style: style_LillaUrsvik_42,
                popuplayertitle: 'Lilla Ursvik',
                interactive: true,
                title: '<img src="styles/legend/LillaUrsvik_42.png" /> Lilla Ursvik'
            });
var format_LillaAlby_43 = new ol.format.GeoJSON();
var features_LillaAlby_43 = format_LillaAlby_43.readFeatures(json_LillaAlby_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_LillaAlby_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LillaAlby_43.addFeatures(features_LillaAlby_43);
var lyr_LillaAlby_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LillaAlby_43, 
                style: style_LillaAlby_43,
                popuplayertitle: 'Lilla Alby',
                interactive: true,
                title: '<img src="styles/legend/LillaAlby_43.png" /> Lilla Alby'
            });
var format_Kymlinge_44 = new ol.format.GeoJSON();
var features_Kymlinge_44 = format_Kymlinge_44.readFeatures(json_Kymlinge_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Kymlinge_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kymlinge_44.addFeatures(features_Kymlinge_44);
var lyr_Kymlinge_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kymlinge_44, 
                style: style_Kymlinge_44,
                popuplayertitle: 'Kymlinge',
                interactive: true,
                title: '<img src="styles/legend/Kymlinge_44.png" /> Kymlinge'
            });
var format_Hallonbergen_45 = new ol.format.GeoJSON();
var features_Hallonbergen_45 = format_Hallonbergen_45.readFeatures(json_Hallonbergen_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Hallonbergen_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hallonbergen_45.addFeatures(features_Hallonbergen_45);
var lyr_Hallonbergen_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hallonbergen_45, 
                style: style_Hallonbergen_45,
                popuplayertitle: 'Hallonbergen',
                interactive: true,
                title: '<img src="styles/legend/Hallonbergen_45.png" /> Hallonbergen'
            });
var format_Duvbo_46 = new ol.format.GeoJSON();
var features_Duvbo_46 = format_Duvbo_46.readFeatures(json_Duvbo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Duvbo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Duvbo_46.addFeatures(features_Duvbo_46);
var lyr_Duvbo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Duvbo_46, 
                style: style_Duvbo_46,
                popuplayertitle: 'Duvbo',
                interactive: true,
                title: '<img src="styles/legend/Duvbo_46.png" /> Duvbo'
            });
var format_CentralaSundbyberg_47 = new ol.format.GeoJSON();
var features_CentralaSundbyberg_47 = format_CentralaSundbyberg_47.readFeatures(json_CentralaSundbyberg_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_CentralaSundbyberg_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralaSundbyberg_47.addFeatures(features_CentralaSundbyberg_47);
var lyr_CentralaSundbyberg_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentralaSundbyberg_47, 
                style: style_CentralaSundbyberg_47,
                popuplayertitle: 'Centrala Sundbyberg',
                interactive: true,
                title: '<img src="styles/legend/CentralaSundbyberg_47.png" /> Centrala Sundbyberg'
            });
var format_Brotorp_48 = new ol.format.GeoJSON();
var features_Brotorp_48 = format_Brotorp_48.readFeatures(json_Brotorp_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Brotorp_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brotorp_48.addFeatures(features_Brotorp_48);
var lyr_Brotorp_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brotorp_48, 
                style: style_Brotorp_48,
                popuplayertitle: 'Brotorp',
                interactive: true,
                title: '<img src="styles/legend/Brotorp_48.png" /> Brotorp'
            });
var format_Huvudsta_49 = new ol.format.GeoJSON();
var features_Huvudsta_49 = format_Huvudsta_49.readFeatures(json_Huvudsta_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Huvudsta_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huvudsta_49.addFeatures(features_Huvudsta_49);
var lyr_Huvudsta_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huvudsta_49, 
                style: style_Huvudsta_49,
                popuplayertitle: 'Huvudsta',
                interactive: true,
                title: '<img src="styles/legend/Huvudsta_49.png" /> Huvudsta'
            });
var format_Rsunda_50 = new ol.format.GeoJSON();
var features_Rsunda_50 = format_Rsunda_50.readFeatures(json_Rsunda_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Rsunda_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rsunda_50.addFeatures(features_Rsunda_50);
var lyr_Rsunda_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rsunda_50,
maxResolution:15.402176339082557,
 
                style: style_Rsunda_50,
                popuplayertitle: 'Råsunda',
                interactive: true,
                title: '<img src="styles/legend/Rsunda_50.png" /> Råsunda'
            });
var format_Skytteholm_51 = new ol.format.GeoJSON();
var features_Skytteholm_51 = format_Skytteholm_51.readFeatures(json_Skytteholm_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Skytteholm_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skytteholm_51.addFeatures(features_Skytteholm_51);
var lyr_Skytteholm_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Skytteholm_51,
maxResolution:15.402176339082557,
 
                style: style_Skytteholm_51,
                popuplayertitle: 'Skytteholm',
                interactive: true,
                title: '<img src="styles/legend/Skytteholm_51.png" /> Skytteholm'
            });
var format_Hagalund_52 = new ol.format.GeoJSON();
var features_Hagalund_52 = format_Hagalund_52.readFeatures(json_Hagalund_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Hagalund_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hagalund_52.addFeatures(features_Hagalund_52);
var lyr_Hagalund_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hagalund_52,
maxResolution:15.402176339082557,
 
                style: style_Hagalund_52,
                popuplayertitle: 'Hagalund',
                interactive: true,
                title: '<img src="styles/legend/Hagalund_52.png" /> Hagalund'
            });
var format_Haga_53 = new ol.format.GeoJSON();
var features_Haga_53 = format_Haga_53.readFeatures(json_Haga_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Haga_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haga_53.addFeatures(features_Haga_53);
var lyr_Haga_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haga_53,
maxResolution:15.402176339082557,
 
                style: style_Haga_53,
                popuplayertitle: 'Haga',
                interactive: true,
                title: '<img src="styles/legend/Haga_53.png" /> Haga'
            });
var format_Jrva_54 = new ol.format.GeoJSON();
var features_Jrva_54 = format_Jrva_54.readFeatures(json_Jrva_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Jrva_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jrva_54.addFeatures(features_Jrva_54);
var lyr_Jrva_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jrva_54,
maxResolution:15.402176339082557,
 
                style: style_Jrva_54,
                popuplayertitle: 'Järva',
                interactive: true,
                title: '<img src="styles/legend/Jrva_54.png" /> Järva'
            });
var format_Jrva_55 = new ol.format.GeoJSON();
var features_Jrva_55 = format_Jrva_55.readFeatures(json_Jrva_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Jrva_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jrva_55.addFeatures(features_Jrva_55);
var lyr_Jrva_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jrva_55,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_Jrva_55,
                popuplayertitle: 'Järva',
                interactive: true,
                title: '<img src="styles/legend/Jrva_55.png" /> Järva'
            });
var format_Ulriksdal_56 = new ol.format.GeoJSON();
var features_Ulriksdal_56 = format_Ulriksdal_56.readFeatures(json_Ulriksdal_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Ulriksdal_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ulriksdal_56.addFeatures(features_Ulriksdal_56);
var lyr_Ulriksdal_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ulriksdal_56, 
                style: style_Ulriksdal_56,
                popuplayertitle: 'Ulriksdal',
                interactive: true,
                title: '<img src="styles/legend/Ulriksdal_56.png" /> Ulriksdal'
            });
var format_ULRIKSDAL_57 = new ol.format.GeoJSON();
var features_ULRIKSDAL_57 = format_ULRIKSDAL_57.readFeatures(json_ULRIKSDAL_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_ULRIKSDAL_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULRIKSDAL_57.addFeatures(features_ULRIKSDAL_57);
var lyr_ULRIKSDAL_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULRIKSDAL_57,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_ULRIKSDAL_57,
                popuplayertitle: 'ULRIKSDAL',
                interactive: true,
                title: '<img src="styles/legend/ULRIKSDAL_57.png" /> ULRIKSDAL'
            });
var format_Bergshamra_58 = new ol.format.GeoJSON();
var features_Bergshamra_58 = format_Bergshamra_58.readFeatures(json_Bergshamra_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Bergshamra_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bergshamra_58.addFeatures(features_Bergshamra_58);
var lyr_Bergshamra_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bergshamra_58, 
                style: style_Bergshamra_58,
                popuplayertitle: 'Bergshamra',
                interactive: true,
                title: '<img src="styles/legend/Bergshamra_58.png" /> Bergshamra'
            });
var format_BERGSHAMRA_59 = new ol.format.GeoJSON();
var features_BERGSHAMRA_59 = format_BERGSHAMRA_59.readFeatures(json_BERGSHAMRA_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_BERGSHAMRA_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERGSHAMRA_59.addFeatures(features_BERGSHAMRA_59);
var lyr_BERGSHAMRA_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BERGSHAMRA_59,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_BERGSHAMRA_59,
                popuplayertitle: 'BERGSHAMRA',
                interactive: true,
                title: '<img src="styles/legend/BERGSHAMRA_59.png" /> BERGSHAMRA'
            });
var format_Grndal_60 = new ol.format.GeoJSON();
var features_Grndal_60 = format_Grndal_60.readFeatures(json_Grndal_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Grndal_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grndal_60.addFeatures(features_Grndal_60);
var lyr_Grndal_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grndal_60, 
                style: style_Grndal_60,
                popuplayertitle: 'Gröndal',
                interactive: true,
                title: '<img src="styles/legend/Grndal_60.png" /> Gröndal'
            });
var format_GRNDAL_61 = new ol.format.GeoJSON();
var features_GRNDAL_61 = format_GRNDAL_61.readFeatures(json_GRNDAL_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_GRNDAL_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRNDAL_61.addFeatures(features_GRNDAL_61);
var lyr_GRNDAL_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRNDAL_61,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_GRNDAL_61,
                popuplayertitle: 'GRÖNDAL',
                interactive: true,
                title: '<img src="styles/legend/GRNDAL_61.png" /> GRÖNDAL'
            });
var format_Liding_62 = new ol.format.GeoJSON();
var features_Liding_62 = format_Liding_62.readFeatures(json_Liding_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Liding_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Liding_62.addFeatures(features_Liding_62);
var lyr_Liding_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Liding_62, 
                style: style_Liding_62,
                popuplayertitle: 'Lidingö',
                interactive: true,
                title: '<img src="styles/legend/Liding_62.png" /> Lidingö'
            });
var format_LIDING_63 = new ol.format.GeoJSON();
var features_LIDING_63 = format_LIDING_63.readFeatures(json_LIDING_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_LIDING_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIDING_63.addFeatures(features_LIDING_63);
var lyr_LIDING_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIDING_63,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_LIDING_63,
                popuplayertitle: 'LIDINGÖ',
                interactive: true,
                title: '<img src="styles/legend/LIDING_63.png" /> LIDINGÖ'
            });
var format_VLLINGBY_64 = new ol.format.GeoJSON();
var features_VLLINGBY_64 = format_VLLINGBY_64.readFeatures(json_VLLINGBY_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_VLLINGBY_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VLLINGBY_64.addFeatures(features_VLLINGBY_64);
var lyr_VLLINGBY_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VLLINGBY_64,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_VLLINGBY_64,
                popuplayertitle: 'VÄLLINGBY',
                interactive: true,
                title: '<img src="styles/legend/VLLINGBY_64.png" /> VÄLLINGBY'
            });
var format_Vllingby_65 = new ol.format.GeoJSON();
var features_Vllingby_65 = format_Vllingby_65.readFeatures(json_Vllingby_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Vllingby_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vllingby_65.addFeatures(features_Vllingby_65);
var lyr_Vllingby_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vllingby_65,
maxResolution:15.402176339082557,
 
                style: style_Vllingby_65,
                popuplayertitle: 'Vällingby',
                interactive: true,
                title: '<img src="styles/legend/Vllingby_65.png" /> Vällingby'
            });
var format_VINSTA_66 = new ol.format.GeoJSON();
var features_VINSTA_66 = format_VINSTA_66.readFeatures(json_VINSTA_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_VINSTA_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VINSTA_66.addFeatures(features_VINSTA_66);
var lyr_VINSTA_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VINSTA_66,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_VINSTA_66,
                popuplayertitle: 'VINSTA',
                interactive: true,
                title: '<img src="styles/legend/VINSTA_66.png" /> VINSTA'
            });
var format_Vinsta_67 = new ol.format.GeoJSON();
var features_Vinsta_67 = format_Vinsta_67.readFeatures(json_Vinsta_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Vinsta_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vinsta_67.addFeatures(features_Vinsta_67);
var lyr_Vinsta_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vinsta_67,
maxResolution:15.402176339082557,
 
                style: style_Vinsta_67,
                popuplayertitle: 'Vinsta',
                interactive: true,
                title: '<img src="styles/legend/Vinsta_67.png" /> Vinsta'
            });
var format_RCKSTA_68 = new ol.format.GeoJSON();
var features_RCKSTA_68 = format_RCKSTA_68.readFeatures(json_RCKSTA_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_RCKSTA_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCKSTA_68.addFeatures(features_RCKSTA_68);
var lyr_RCKSTA_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RCKSTA_68,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_RCKSTA_68,
                popuplayertitle: 'RÅCKSTA',
                interactive: true,
                title: '<img src="styles/legend/RCKSTA_68.png" /> RÅCKSTA'
            });
var format_Rcksta_69 = new ol.format.GeoJSON();
var features_Rcksta_69 = format_Rcksta_69.readFeatures(json_Rcksta_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Rcksta_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rcksta_69.addFeatures(features_Rcksta_69);
var lyr_Rcksta_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rcksta_69,
maxResolution:15.402176339082557,
 
                style: style_Rcksta_69,
                popuplayertitle: 'Råcksta',
                interactive: true,
                title: '<img src="styles/legend/Rcksta_69.png" /> Råcksta'
            });
var format_LUNDA_INDUSTRIOMRDE_70 = new ol.format.GeoJSON();
var features_LUNDA_INDUSTRIOMRDE_70 = format_LUNDA_INDUSTRIOMRDE_70.readFeatures(json_LUNDA_INDUSTRIOMRDE_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_LUNDA_INDUSTRIOMRDE_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUNDA_INDUSTRIOMRDE_70.addFeatures(features_LUNDA_INDUSTRIOMRDE_70);
var lyr_LUNDA_INDUSTRIOMRDE_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUNDA_INDUSTRIOMRDE_70,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_LUNDA_INDUSTRIOMRDE_70,
                popuplayertitle: 'LUNDA_INDUSTRIOMRÅDE',
                interactive: true,
                title: '<img src="styles/legend/LUNDA_INDUSTRIOMRDE_70.png" /> LUNDA_INDUSTRIOMRÅDE'
            });
var format_Lunda_71 = new ol.format.GeoJSON();
var features_Lunda_71 = format_Lunda_71.readFeatures(json_Lunda_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Lunda_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lunda_71.addFeatures(features_Lunda_71);
var lyr_Lunda_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lunda_71,
maxResolution:15.402176339082557,
 
                style: style_Lunda_71,
                popuplayertitle: 'Lunda',
                interactive: true,
                title: '<img src="styles/legend/Lunda_71.png" /> Lunda'
            });
var format_KLVESTA_72 = new ol.format.GeoJSON();
var features_KLVESTA_72 = format_KLVESTA_72.readFeatures(json_KLVESTA_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_KLVESTA_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KLVESTA_72.addFeatures(features_KLVESTA_72);
var lyr_KLVESTA_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KLVESTA_72,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_KLVESTA_72,
                popuplayertitle: 'KÄLVESTA',
                interactive: true,
                title: '<img src="styles/legend/KLVESTA_72.png" /> KÄLVESTA'
            });
var format_Klvesta_73 = new ol.format.GeoJSON();
var features_Klvesta_73 = format_Klvesta_73.readFeatures(json_Klvesta_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Klvesta_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klvesta_73.addFeatures(features_Klvesta_73);
var lyr_Klvesta_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Klvesta_73,
maxResolution:15.402176339082557,
 
                style: style_Klvesta_73,
                popuplayertitle: 'Kälvesta',
                interactive: true,
                title: '<img src="styles/legend/Klvesta_73.png" /> Kälvesta'
            });
var format_HsselbyVillastad_74 = new ol.format.GeoJSON();
var features_HsselbyVillastad_74 = format_HsselbyVillastad_74.readFeatures(json_HsselbyVillastad_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_HsselbyVillastad_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HsselbyVillastad_74.addFeatures(features_HsselbyVillastad_74);
var lyr_HsselbyVillastad_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HsselbyVillastad_74,
maxResolution:15.402176339082557,
 
                style: style_HsselbyVillastad_74,
                popuplayertitle: 'Hässelby Villastad',
                interactive: true,
                title: '<img src="styles/legend/HsselbyVillastad_74.png" /> Hässelby Villastad'
            });
var format_HSSELBY_VILLASTAD_75 = new ol.format.GeoJSON();
var features_HSSELBY_VILLASTAD_75 = format_HSSELBY_VILLASTAD_75.readFeatures(json_HSSELBY_VILLASTAD_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_HSSELBY_VILLASTAD_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HSSELBY_VILLASTAD_75.addFeatures(features_HSSELBY_VILLASTAD_75);
var lyr_HSSELBY_VILLASTAD_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HSSELBY_VILLASTAD_75,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_HSSELBY_VILLASTAD_75,
                popuplayertitle: 'HÄSSELBY_VILLASTAD',
                interactive: true,
                title: '<img src="styles/legend/HSSELBY_VILLASTAD_75.png" /> HÄSSELBY_VILLASTAD'
            });
var format_HsselbyStrand_76 = new ol.format.GeoJSON();
var features_HsselbyStrand_76 = format_HsselbyStrand_76.readFeatures(json_HsselbyStrand_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_HsselbyStrand_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HsselbyStrand_76.addFeatures(features_HsselbyStrand_76);
var lyr_HsselbyStrand_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HsselbyStrand_76,
maxResolution:15.402176339082557,
 
                style: style_HsselbyStrand_76,
                popuplayertitle: 'Hässelby Strand',
                interactive: true,
                title: '<img src="styles/legend/HsselbyStrand_76.png" /> Hässelby Strand'
            });
var format_HSSELBY_STRAND_77 = new ol.format.GeoJSON();
var features_HSSELBY_STRAND_77 = format_HSSELBY_STRAND_77.readFeatures(json_HSSELBY_STRAND_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_HSSELBY_STRAND_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HSSELBY_STRAND_77.addFeatures(features_HSSELBY_STRAND_77);
var lyr_HSSELBY_STRAND_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HSSELBY_STRAND_77,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_HSSELBY_STRAND_77,
                popuplayertitle: 'HÄSSELBY_STRAND',
                interactive: true,
                title: '<img src="styles/legend/HSSELBY_STRAND_77.png" /> HÄSSELBY_STRAND'
            });
var format_HsselbyGrd_78 = new ol.format.GeoJSON();
var features_HsselbyGrd_78 = format_HsselbyGrd_78.readFeatures(json_HsselbyGrd_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_HsselbyGrd_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HsselbyGrd_78.addFeatures(features_HsselbyGrd_78);
var lyr_HsselbyGrd_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HsselbyGrd_78,
maxResolution:15.402176339082557,
 
                style: style_HsselbyGrd_78,
                popuplayertitle: 'Hässelby Gård',
                interactive: true,
                title: '<img src="styles/legend/HsselbyGrd_78.png" /> Hässelby Gård'
            });
var format_HSSELBY_GRD_79 = new ol.format.GeoJSON();
var features_HSSELBY_GRD_79 = format_HSSELBY_GRD_79.readFeatures(json_HSSELBY_GRD_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_HSSELBY_GRD_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HSSELBY_GRD_79.addFeatures(features_HSSELBY_GRD_79);
var lyr_HSSELBY_GRD_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HSSELBY_GRD_79,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_HSSELBY_GRD_79,
                popuplayertitle: 'HÄSSELBY_GÅRD',
                interactive: true,
                title: '<img src="styles/legend/HSSELBY_GRD_79.png" /> HÄSSELBY_GÅRD'
            });
var format_GRIMSTA_80 = new ol.format.GeoJSON();
var features_GRIMSTA_80 = format_GRIMSTA_80.readFeatures(json_GRIMSTA_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_GRIMSTA_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRIMSTA_80.addFeatures(features_GRIMSTA_80);
var lyr_GRIMSTA_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRIMSTA_80,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_GRIMSTA_80,
                popuplayertitle: 'GRIMSTA',
                interactive: true,
                title: '<img src="styles/legend/GRIMSTA_80.png" /> GRIMSTA'
            });
var format_Grimsta_81 = new ol.format.GeoJSON();
var features_Grimsta_81 = format_Grimsta_81.readFeatures(json_Grimsta_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Grimsta_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grimsta_81.addFeatures(features_Grimsta_81);
var lyr_Grimsta_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grimsta_81,
maxResolution:15.402176339082557,
 
                style: style_Grimsta_81,
                popuplayertitle: 'Grimsta',
                interactive: true,
                title: '<img src="styles/legend/Grimsta_81.png" /> Grimsta'
            });
var format_BROMSTEN_82 = new ol.format.GeoJSON();
var features_BROMSTEN_82 = format_BROMSTEN_82.readFeatures(json_BROMSTEN_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_BROMSTEN_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BROMSTEN_82.addFeatures(features_BROMSTEN_82);
var lyr_BROMSTEN_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BROMSTEN_82,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_BROMSTEN_82,
                popuplayertitle: 'BROMSTEN',
                interactive: true,
                title: '<img src="styles/legend/BROMSTEN_82.png" /> BROMSTEN'
            });
var format_Bromsten_83 = new ol.format.GeoJSON();
var features_Bromsten_83 = format_Bromsten_83.readFeatures(json_Bromsten_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Bromsten_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bromsten_83.addFeatures(features_Bromsten_83);
var lyr_Bromsten_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bromsten_83,
maxResolution:15.402176339082557,
 
                style: style_Bromsten_83,
                popuplayertitle: 'Bromsten',
                interactive: true,
                title: '<img src="styles/legend/Bromsten_83.png" /> Bromsten'
            });
var format_stermalm_84 = new ol.format.GeoJSON();
var features_stermalm_84 = format_stermalm_84.readFeatures(json_stermalm_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_stermalm_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stermalm_84.addFeatures(features_stermalm_84);
var lyr_stermalm_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stermalm_84,
maxResolution:15.402176339082557,
 
                style: style_stermalm_84,
                popuplayertitle: 'Östermalm',
                interactive: true,
                title: '<img src="styles/legend/stermalm_84.png" /> Östermalm'
            });
var format_STERMALM_85 = new ol.format.GeoJSON();
var features_STERMALM_85 = format_STERMALM_85.readFeatures(json_STERMALM_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_STERMALM_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STERMALM_85.addFeatures(features_STERMALM_85);
var lyr_STERMALM_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STERMALM_85,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_STERMALM_85,
                popuplayertitle: 'ÖSTERMALM',
                interactive: true,
                title: '<img src="styles/legend/STERMALM_85.png" /> ÖSTERMALM'
            });
var format_VASASTADEN_86 = new ol.format.GeoJSON();
var features_VASASTADEN_86 = format_VASASTADEN_86.readFeatures(json_VASASTADEN_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_VASASTADEN_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VASASTADEN_86.addFeatures(features_VASASTADEN_86);
var lyr_VASASTADEN_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VASASTADEN_86,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_VASASTADEN_86,
                popuplayertitle: 'VASASTADEN',
                interactive: true,
                title: '<img src="styles/legend/VASASTADEN_86.png" /> VASASTADEN'
            });
var format_Vasastaden_87 = new ol.format.GeoJSON();
var features_Vasastaden_87 = format_Vasastaden_87.readFeatures(json_Vasastaden_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Vasastaden_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vasastaden_87.addFeatures(features_Vasastaden_87);
var lyr_Vasastaden_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vasastaden_87,
maxResolution:15.402176339082557,
 
                style: style_Vasastaden_87,
                popuplayertitle: 'Vasastaden',
                interactive: true,
                title: '<img src="styles/legend/Vasastaden_87.png" /> Vasastaden'
            });
var format_SDERMALM_88 = new ol.format.GeoJSON();
var features_SDERMALM_88 = format_SDERMALM_88.readFeatures(json_SDERMALM_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_SDERMALM_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDERMALM_88.addFeatures(features_SDERMALM_88);
var lyr_SDERMALM_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDERMALM_88,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_SDERMALM_88,
                popuplayertitle: 'SÖDERMALM',
                interactive: true,
                title: '<img src="styles/legend/SDERMALM_88.png" /> SÖDERMALM'
            });
var format_Sdermalm_89 = new ol.format.GeoJSON();
var features_Sdermalm_89 = format_Sdermalm_89.readFeatures(json_Sdermalm_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Sdermalm_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sdermalm_89.addFeatures(features_Sdermalm_89);
var lyr_Sdermalm_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sdermalm_89,
maxResolution:15.402176339082557,
 
                style: style_Sdermalm_89,
                popuplayertitle: 'Södermalm',
                interactive: true,
                title: '<img src="styles/legend/Sdermalm_89.png" /> Södermalm'
            });
var format_STORA_ESSINGEN_90 = new ol.format.GeoJSON();
var features_STORA_ESSINGEN_90 = format_STORA_ESSINGEN_90.readFeatures(json_STORA_ESSINGEN_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_STORA_ESSINGEN_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STORA_ESSINGEN_90.addFeatures(features_STORA_ESSINGEN_90);
var lyr_STORA_ESSINGEN_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STORA_ESSINGEN_90,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_STORA_ESSINGEN_90,
                popuplayertitle: 'STORA_ESSINGEN',
                interactive: true,
                title: '<img src="styles/legend/STORA_ESSINGEN_90.png" /> STORA_ESSINGEN'
            });
var format_StoraEssingen_91 = new ol.format.GeoJSON();
var features_StoraEssingen_91 = format_StoraEssingen_91.readFeatures(json_StoraEssingen_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_StoraEssingen_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StoraEssingen_91.addFeatures(features_StoraEssingen_91);
var lyr_StoraEssingen_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StoraEssingen_91,
maxResolution:15.402176339082557,
 
                style: style_StoraEssingen_91,
                popuplayertitle: 'Stora Essingen',
                interactive: true,
                title: '<img src="styles/legend/StoraEssingen_91.png" /> Stora Essingen'
            });
var format_STADSHAGEN_92 = new ol.format.GeoJSON();
var features_STADSHAGEN_92 = format_STADSHAGEN_92.readFeatures(json_STADSHAGEN_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_STADSHAGEN_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STADSHAGEN_92.addFeatures(features_STADSHAGEN_92);
var lyr_STADSHAGEN_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STADSHAGEN_92,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_STADSHAGEN_92,
                popuplayertitle: 'STADSHAGEN',
                interactive: true,
                title: '<img src="styles/legend/STADSHAGEN_92.png" /> STADSHAGEN'
            });
var format_Stadshagen_93 = new ol.format.GeoJSON();
var features_Stadshagen_93 = format_Stadshagen_93.readFeatures(json_Stadshagen_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Stadshagen_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadshagen_93.addFeatures(features_Stadshagen_93);
var lyr_Stadshagen_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stadshagen_93,
maxResolution:15.402176339082557,
 
                style: style_Stadshagen_93,
                popuplayertitle: 'Stadshagen',
                interactive: true,
                title: '<img src="styles/legend/Stadshagen_93.png" /> Stadshagen'
            });
var format_SKEPPSHOLMEN_94 = new ol.format.GeoJSON();
var features_SKEPPSHOLMEN_94 = format_SKEPPSHOLMEN_94.readFeatures(json_SKEPPSHOLMEN_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_SKEPPSHOLMEN_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SKEPPSHOLMEN_94.addFeatures(features_SKEPPSHOLMEN_94);
var lyr_SKEPPSHOLMEN_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SKEPPSHOLMEN_94,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_SKEPPSHOLMEN_94,
                popuplayertitle: 'SKEPPSHOLMEN',
                interactive: true,
                title: '<img src="styles/legend/SKEPPSHOLMEN_94.png" /> SKEPPSHOLMEN'
            });
var format_Skeppsholmen_95 = new ol.format.GeoJSON();
var features_Skeppsholmen_95 = format_Skeppsholmen_95.readFeatures(json_Skeppsholmen_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Skeppsholmen_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skeppsholmen_95.addFeatures(features_Skeppsholmen_95);
var lyr_Skeppsholmen_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Skeppsholmen_95,
maxResolution:15.402176339082557,
 
                style: style_Skeppsholmen_95,
                popuplayertitle: 'Skeppsholmen',
                interactive: true,
                title: '<img src="styles/legend/Skeppsholmen_95.png" /> Skeppsholmen'
            });
var format_RIDDARHOLMEN_96 = new ol.format.GeoJSON();
var features_RIDDARHOLMEN_96 = format_RIDDARHOLMEN_96.readFeatures(json_RIDDARHOLMEN_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_RIDDARHOLMEN_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIDDARHOLMEN_96.addFeatures(features_RIDDARHOLMEN_96);
var lyr_RIDDARHOLMEN_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIDDARHOLMEN_96,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_RIDDARHOLMEN_96,
                popuplayertitle: 'RIDDARHOLMEN',
                interactive: true,
                title: '<img src="styles/legend/RIDDARHOLMEN_96.png" /> RIDDARHOLMEN'
            });
var format_Riddarholmen_97 = new ol.format.GeoJSON();
var features_Riddarholmen_97 = format_Riddarholmen_97.readFeatures(json_Riddarholmen_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Riddarholmen_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riddarholmen_97.addFeatures(features_Riddarholmen_97);
var lyr_Riddarholmen_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riddarholmen_97,
maxResolution:15.402176339082557,
 
                style: style_Riddarholmen_97,
                popuplayertitle: 'Riddarholmen',
                interactive: true,
                title: '<img src="styles/legend/Riddarholmen_97.png" /> Riddarholmen'
            });
var format_REIMERSHOLME_98 = new ol.format.GeoJSON();
var features_REIMERSHOLME_98 = format_REIMERSHOLME_98.readFeatures(json_REIMERSHOLME_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_REIMERSHOLME_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REIMERSHOLME_98.addFeatures(features_REIMERSHOLME_98);
var lyr_REIMERSHOLME_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REIMERSHOLME_98,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_REIMERSHOLME_98,
                popuplayertitle: 'REIMERSHOLME',
                interactive: true,
                title: '<img src="styles/legend/REIMERSHOLME_98.png" /> REIMERSHOLME'
            });
var format_Reimersholme_99 = new ol.format.GeoJSON();
var features_Reimersholme_99 = format_Reimersholme_99.readFeatures(json_Reimersholme_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Reimersholme_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reimersholme_99.addFeatures(features_Reimersholme_99);
var lyr_Reimersholme_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reimersholme_99,
maxResolution:15.402176339082557,
 
                style: style_Reimersholme_99,
                popuplayertitle: 'Reimersholme',
                interactive: true,
                title: '<img src="styles/legend/Reimersholme_99.png" /> Reimersholme'
            });
var format_NORRMALM_100 = new ol.format.GeoJSON();
var features_NORRMALM_100 = format_NORRMALM_100.readFeatures(json_NORRMALM_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_NORRMALM_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NORRMALM_100.addFeatures(features_NORRMALM_100);
var lyr_NORRMALM_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NORRMALM_100,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_NORRMALM_100,
                popuplayertitle: 'NORRMALM',
                interactive: true,
                title: '<img src="styles/legend/NORRMALM_100.png" /> NORRMALM'
            });
var format_Norrmalm_101 = new ol.format.GeoJSON();
var features_Norrmalm_101 = format_Norrmalm_101.readFeatures(json_Norrmalm_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Norrmalm_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Norrmalm_101.addFeatures(features_Norrmalm_101);
var lyr_Norrmalm_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Norrmalm_101,
maxResolution:15.402176339082557,
 
                style: style_Norrmalm_101,
                popuplayertitle: 'Norrmalm',
                interactive: true,
                title: '<img src="styles/legend/Norrmalm_101.png" /> Norrmalm'
            });
var format_NORRA_DJURGRDEN_102 = new ol.format.GeoJSON();
var features_NORRA_DJURGRDEN_102 = format_NORRA_DJURGRDEN_102.readFeatures(json_NORRA_DJURGRDEN_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_NORRA_DJURGRDEN_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NORRA_DJURGRDEN_102.addFeatures(features_NORRA_DJURGRDEN_102);
var lyr_NORRA_DJURGRDEN_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NORRA_DJURGRDEN_102,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_NORRA_DJURGRDEN_102,
                popuplayertitle: 'NORRA_DJURGÅRDEN',
                interactive: true,
                title: '<img src="styles/legend/NORRA_DJURGRDEN_102.png" /> NORRA_DJURGÅRDEN'
            });
var format_NorraDjurgrden_103 = new ol.format.GeoJSON();
var features_NorraDjurgrden_103 = format_NorraDjurgrden_103.readFeatures(json_NorraDjurgrden_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_NorraDjurgrden_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorraDjurgrden_103.addFeatures(features_NorraDjurgrden_103);
var lyr_NorraDjurgrden_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorraDjurgrden_103,
maxResolution:15.402176339082557,
 
                style: style_NorraDjurgrden_103,
                popuplayertitle: 'Norra Djurgården',
                interactive: true,
                title: '<img src="styles/legend/NorraDjurgrden_103.png" /> Norra Djurgården'
            });
var format_MARIEBERG_104 = new ol.format.GeoJSON();
var features_MARIEBERG_104 = format_MARIEBERG_104.readFeatures(json_MARIEBERG_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_MARIEBERG_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARIEBERG_104.addFeatures(features_MARIEBERG_104);
var lyr_MARIEBERG_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MARIEBERG_104,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_MARIEBERG_104,
                popuplayertitle: 'MARIEBERG',
                interactive: true,
                title: '<img src="styles/legend/MARIEBERG_104.png" /> MARIEBERG'
            });
var format_Marieberg_105 = new ol.format.GeoJSON();
var features_Marieberg_105 = format_Marieberg_105.readFeatures(json_Marieberg_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Marieberg_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marieberg_105.addFeatures(features_Marieberg_105);
var lyr_Marieberg_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marieberg_105,
maxResolution:15.402176339082557,
 
                style: style_Marieberg_105,
                popuplayertitle: 'Marieberg',
                interactive: true,
                title: '<img src="styles/legend/Marieberg_105.png" /> Marieberg'
            });
var format_LNGHOLMEN_106 = new ol.format.GeoJSON();
var features_LNGHOLMEN_106 = format_LNGHOLMEN_106.readFeatures(json_LNGHOLMEN_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_LNGHOLMEN_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LNGHOLMEN_106.addFeatures(features_LNGHOLMEN_106);
var lyr_LNGHOLMEN_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LNGHOLMEN_106,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_LNGHOLMEN_106,
                popuplayertitle: 'LÅNGHOLMEN',
                interactive: true,
                title: '<img src="styles/legend/LNGHOLMEN_106.png" /> LÅNGHOLMEN'
            });
var format_Lngholmen_107 = new ol.format.GeoJSON();
var features_Lngholmen_107 = format_Lngholmen_107.readFeatures(json_Lngholmen_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Lngholmen_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lngholmen_107.addFeatures(features_Lngholmen_107);
var lyr_Lngholmen_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lngholmen_107,
maxResolution:15.402176339082557,
 
                style: style_Lngholmen_107,
                popuplayertitle: 'Långholmen',
                interactive: true,
                title: '<img src="styles/legend/Lngholmen_107.png" /> Långholmen'
            });
var format_LILLA_ESSINGEN_108 = new ol.format.GeoJSON();
var features_LILLA_ESSINGEN_108 = format_LILLA_ESSINGEN_108.readFeatures(json_LILLA_ESSINGEN_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_LILLA_ESSINGEN_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LILLA_ESSINGEN_108.addFeatures(features_LILLA_ESSINGEN_108);
var lyr_LILLA_ESSINGEN_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LILLA_ESSINGEN_108,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_LILLA_ESSINGEN_108,
                popuplayertitle: 'LILLA_ESSINGEN',
                interactive: true,
                title: '<img src="styles/legend/LILLA_ESSINGEN_108.png" /> LILLA_ESSINGEN'
            });
var format_LillaEssingen_109 = new ol.format.GeoJSON();
var features_LillaEssingen_109 = format_LillaEssingen_109.readFeatures(json_LillaEssingen_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_LillaEssingen_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LillaEssingen_109.addFeatures(features_LillaEssingen_109);
var lyr_LillaEssingen_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LillaEssingen_109,
maxResolution:15.402176339082557,
 
                style: style_LillaEssingen_109,
                popuplayertitle: 'Lilla Essingen',
                interactive: true,
                title: '<img src="styles/legend/LillaEssingen_109.png" /> Lilla Essingen'
            });
var format_LADUGRDSGRDET_110 = new ol.format.GeoJSON();
var features_LADUGRDSGRDET_110 = format_LADUGRDSGRDET_110.readFeatures(json_LADUGRDSGRDET_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_LADUGRDSGRDET_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LADUGRDSGRDET_110.addFeatures(features_LADUGRDSGRDET_110);
var lyr_LADUGRDSGRDET_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LADUGRDSGRDET_110,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_LADUGRDSGRDET_110,
                popuplayertitle: 'LADUGÅRDSGÄRDET',
                interactive: true,
                title: '<img src="styles/legend/LADUGRDSGRDET_110.png" /> LADUGÅRDSGÄRDET'
            });
var format_Ladugrdsgrdet_111 = new ol.format.GeoJSON();
var features_Ladugrdsgrdet_111 = format_Ladugrdsgrdet_111.readFeatures(json_Ladugrdsgrdet_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Ladugrdsgrdet_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladugrdsgrdet_111.addFeatures(features_Ladugrdsgrdet_111);
var lyr_Ladugrdsgrdet_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ladugrdsgrdet_111,
maxResolution:15.402176339082557,
 
                style: style_Ladugrdsgrdet_111,
                popuplayertitle: 'Ladugårdsgärdet',
                interactive: true,
                title: '<img src="styles/legend/Ladugrdsgrdet_111.png" /> Ladugårdsgärdet'
            });
var format_KUNGSHOLMEN_112 = new ol.format.GeoJSON();
var features_KUNGSHOLMEN_112 = format_KUNGSHOLMEN_112.readFeatures(json_KUNGSHOLMEN_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_KUNGSHOLMEN_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KUNGSHOLMEN_112.addFeatures(features_KUNGSHOLMEN_112);
var lyr_KUNGSHOLMEN_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KUNGSHOLMEN_112,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_KUNGSHOLMEN_112,
                popuplayertitle: 'KUNGSHOLMEN',
                interactive: true,
                title: '<img src="styles/legend/KUNGSHOLMEN_112.png" /> KUNGSHOLMEN'
            });
var format_Kungsholmen_113 = new ol.format.GeoJSON();
var features_Kungsholmen_113 = format_Kungsholmen_113.readFeatures(json_Kungsholmen_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Kungsholmen_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kungsholmen_113.addFeatures(features_Kungsholmen_113);
var lyr_Kungsholmen_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kungsholmen_113,
maxResolution:15.402176339082557,
 
                style: style_Kungsholmen_113,
                popuplayertitle: 'Kungsholmen',
                interactive: true,
                title: '<img src="styles/legend/Kungsholmen_113.png" /> Kungsholmen'
            });
var format_KRISTINEBERG_114 = new ol.format.GeoJSON();
var features_KRISTINEBERG_114 = format_KRISTINEBERG_114.readFeatures(json_KRISTINEBERG_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_KRISTINEBERG_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KRISTINEBERG_114.addFeatures(features_KRISTINEBERG_114);
var lyr_KRISTINEBERG_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KRISTINEBERG_114,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_KRISTINEBERG_114,
                popuplayertitle: 'KRISTINEBERG',
                interactive: true,
                title: '<img src="styles/legend/KRISTINEBERG_114.png" /> KRISTINEBERG'
            });
var format_Kristineberg_115 = new ol.format.GeoJSON();
var features_Kristineberg_115 = format_Kristineberg_115.readFeatures(json_Kristineberg_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Kristineberg_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kristineberg_115.addFeatures(features_Kristineberg_115);
var lyr_Kristineberg_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kristineberg_115,
maxResolution:15.402176339082557,
 
                style: style_Kristineberg_115,
                popuplayertitle: 'Kristineberg',
                interactive: true,
                title: '<img src="styles/legend/Kristineberg_115.png" /> Kristineberg'
            });
var format_HJORTHAGEN_116 = new ol.format.GeoJSON();
var features_HJORTHAGEN_116 = format_HJORTHAGEN_116.readFeatures(json_HJORTHAGEN_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_HJORTHAGEN_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HJORTHAGEN_116.addFeatures(features_HJORTHAGEN_116);
var lyr_HJORTHAGEN_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HJORTHAGEN_116,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_HJORTHAGEN_116,
                popuplayertitle: 'HJORTHAGEN',
                interactive: true,
                title: '<img src="styles/legend/HJORTHAGEN_116.png" /> HJORTHAGEN'
            });
var format_Hjorthagen_117 = new ol.format.GeoJSON();
var features_Hjorthagen_117 = format_Hjorthagen_117.readFeatures(json_Hjorthagen_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Hjorthagen_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hjorthagen_117.addFeatures(features_Hjorthagen_117);
var lyr_Hjorthagen_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hjorthagen_117,
maxResolution:15.402176339082557,
 
                style: style_Hjorthagen_117,
                popuplayertitle: 'Hjorthagen',
                interactive: true,
                title: '<img src="styles/legend/Hjorthagen_117.png" /> Hjorthagen'
            });
var format_GAMLA_STAN_118 = new ol.format.GeoJSON();
var features_GAMLA_STAN_118 = format_GAMLA_STAN_118.readFeatures(json_GAMLA_STAN_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_GAMLA_STAN_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAMLA_STAN_118.addFeatures(features_GAMLA_STAN_118);
var lyr_GAMLA_STAN_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GAMLA_STAN_118,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_GAMLA_STAN_118,
                popuplayertitle: 'GAMLA_STAN',
                interactive: true,
                title: '<img src="styles/legend/GAMLA_STAN_118.png" /> GAMLA_STAN'
            });
var format_GamlaStan_119 = new ol.format.GeoJSON();
var features_GamlaStan_119 = format_GamlaStan_119.readFeatures(json_GamlaStan_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_GamlaStan_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GamlaStan_119.addFeatures(features_GamlaStan_119);
var lyr_GamlaStan_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GamlaStan_119,
maxResolution:15.402176339082557,
 
                style: style_GamlaStan_119,
                popuplayertitle: 'Gamla Stan',
                interactive: true,
                title: '<img src="styles/legend/GamlaStan_119.png" /> Gamla Stan'
            });
var format_FREDHLL_120 = new ol.format.GeoJSON();
var features_FREDHLL_120 = format_FREDHLL_120.readFeatures(json_FREDHLL_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_FREDHLL_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FREDHLL_120.addFeatures(features_FREDHLL_120);
var lyr_FREDHLL_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FREDHLL_120,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_FREDHLL_120,
                popuplayertitle: 'FREDHÄLL',
                interactive: true,
                title: '<img src="styles/legend/FREDHLL_120.png" /> FREDHÄLL'
            });
var format_Fredhll_121 = new ol.format.GeoJSON();
var features_Fredhll_121 = format_Fredhll_121.readFeatures(json_Fredhll_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Fredhll_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fredhll_121.addFeatures(features_Fredhll_121);
var lyr_Fredhll_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fredhll_121,
maxResolution:15.402176339082557,
 
                style: style_Fredhll_121,
                popuplayertitle: 'Fredhäll',
                interactive: true,
                title: '<img src="styles/legend/Fredhll_121.png" /> Fredhäll'
            });
var format_DJURGRDEN_122 = new ol.format.GeoJSON();
var features_DJURGRDEN_122 = format_DJURGRDEN_122.readFeatures(json_DJURGRDEN_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_DJURGRDEN_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DJURGRDEN_122.addFeatures(features_DJURGRDEN_122);
var lyr_DJURGRDEN_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DJURGRDEN_122,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_DJURGRDEN_122,
                popuplayertitle: 'DJURGÅRDEN',
                interactive: true,
                title: '<img src="styles/legend/DJURGRDEN_122.png" /> DJURGÅRDEN'
            });
var format_Djurgrden_123 = new ol.format.GeoJSON();
var features_Djurgrden_123 = format_Djurgrden_123.readFeatures(json_Djurgrden_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Djurgrden_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Djurgrden_123.addFeatures(features_Djurgrden_123);
var lyr_Djurgrden_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Djurgrden_123,
maxResolution:15.402176339082557,
 
                style: style_Djurgrden_123,
                popuplayertitle: 'Djurgården',
                interactive: true,
                title: '<img src="styles/legend/Djurgrden_123.png" /> Djurgården'
            });
var format_LSTEN_124 = new ol.format.GeoJSON();
var features_LSTEN_124 = format_LSTEN_124.readFeatures(json_LSTEN_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_LSTEN_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSTEN_124.addFeatures(features_LSTEN_124);
var lyr_LSTEN_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSTEN_124,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_LSTEN_124,
                popuplayertitle: 'ÅLSTEN',
                interactive: true,
                title: '<img src="styles/legend/LSTEN_124.png" /> ÅLSTEN'
            });
var format_lsten_125 = new ol.format.GeoJSON();
var features_lsten_125 = format_lsten_125.readFeatures(json_lsten_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_lsten_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lsten_125.addFeatures(features_lsten_125);
var lyr_lsten_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lsten_125,
maxResolution:15.402176339082557,
 
                style: style_lsten_125,
                popuplayertitle: 'Ålsten',
                interactive: true,
                title: '<img src="styles/legend/lsten_125.png" /> Ålsten'
            });
var format_KESLUND_126 = new ol.format.GeoJSON();
var features_KESLUND_126 = format_KESLUND_126.readFeatures(json_KESLUND_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_KESLUND_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESLUND_126.addFeatures(features_KESLUND_126);
var lyr_KESLUND_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESLUND_126,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_KESLUND_126,
                popuplayertitle: 'ÅKESLUND',
                interactive: true,
                title: '<img src="styles/legend/KESLUND_126.png" /> ÅKESLUND'
            });
var format_keslund_127 = new ol.format.GeoJSON();
var features_keslund_127 = format_keslund_127.readFeatures(json_keslund_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_keslund_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_keslund_127.addFeatures(features_keslund_127);
var lyr_keslund_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_keslund_127,
maxResolution:15.402176339082557,
 
                style: style_keslund_127,
                popuplayertitle: 'Åkeslund',
                interactive: true,
                title: '<img src="styles/legend/keslund_127.png" /> Åkeslund'
            });
var format_KESHOV_128 = new ol.format.GeoJSON();
var features_KESHOV_128 = format_KESHOV_128.readFeatures(json_KESHOV_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_KESHOV_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESHOV_128.addFeatures(features_KESHOV_128);
var lyr_KESHOV_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESHOV_128,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_KESHOV_128,
                popuplayertitle: 'ÅKESHOV',
                interactive: true,
                title: '<img src="styles/legend/KESHOV_128.png" /> ÅKESHOV'
            });
var format_keshov_129 = new ol.format.GeoJSON();
var features_keshov_129 = format_keshov_129.readFeatures(json_keshov_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_keshov_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_keshov_129.addFeatures(features_keshov_129);
var lyr_keshov_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_keshov_129,
maxResolution:15.402176339082557,
 
                style: style_keshov_129,
                popuplayertitle: 'Åkeshov',
                interactive: true,
                title: '<img src="styles/legend/keshov_129.png" /> Åkeshov'
            });
var format_PPELVIKEN_130 = new ol.format.GeoJSON();
var features_PPELVIKEN_130 = format_PPELVIKEN_130.readFeatures(json_PPELVIKEN_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_PPELVIKEN_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPELVIKEN_130.addFeatures(features_PPELVIKEN_130);
var lyr_PPELVIKEN_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPELVIKEN_130,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_PPELVIKEN_130,
                popuplayertitle: 'ÄPPELVIKEN',
                interactive: true,
                title: '<img src="styles/legend/PPELVIKEN_130.png" /> ÄPPELVIKEN'
            });
var format_ppelviken_131 = new ol.format.GeoJSON();
var features_ppelviken_131 = format_ppelviken_131.readFeatures(json_ppelviken_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_ppelviken_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ppelviken_131.addFeatures(features_ppelviken_131);
var lyr_ppelviken_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ppelviken_131,
maxResolution:15.402176339082557,
 
                style: style_ppelviken_131,
                popuplayertitle: 'Äppelviken',
                interactive: true,
                title: '<img src="styles/legend/ppelviken_131.png" /> Äppelviken'
            });
var format_ULVSUNDA_INDUSTRIOMRDE_132 = new ol.format.GeoJSON();
var features_ULVSUNDA_INDUSTRIOMRDE_132 = format_ULVSUNDA_INDUSTRIOMRDE_132.readFeatures(json_ULVSUNDA_INDUSTRIOMRDE_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_ULVSUNDA_INDUSTRIOMRDE_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULVSUNDA_INDUSTRIOMRDE_132.addFeatures(features_ULVSUNDA_INDUSTRIOMRDE_132);
var lyr_ULVSUNDA_INDUSTRIOMRDE_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULVSUNDA_INDUSTRIOMRDE_132,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_ULVSUNDA_INDUSTRIOMRDE_132,
                popuplayertitle: 'ULVSUNDA_INDUSTRIOMRÅDE',
                interactive: true,
                title: '<img src="styles/legend/ULVSUNDA_INDUSTRIOMRDE_132.png" /> ULVSUNDA_INDUSTRIOMRÅDE'
            });
var format_UlvsundaIndustriomrde_133 = new ol.format.GeoJSON();
var features_UlvsundaIndustriomrde_133 = format_UlvsundaIndustriomrde_133.readFeatures(json_UlvsundaIndustriomrde_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_UlvsundaIndustriomrde_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UlvsundaIndustriomrde_133.addFeatures(features_UlvsundaIndustriomrde_133);
var lyr_UlvsundaIndustriomrde_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UlvsundaIndustriomrde_133,
maxResolution:15.402176339082557,
 
                style: style_UlvsundaIndustriomrde_133,
                popuplayertitle: 'Ulvsunda Industriområde',
                interactive: true,
                title: '<img src="styles/legend/UlvsundaIndustriomrde_133.png" /> Ulvsunda Industriområde'
            });
var format_ULVSUNDA_134 = new ol.format.GeoJSON();
var features_ULVSUNDA_134 = format_ULVSUNDA_134.readFeatures(json_ULVSUNDA_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_ULVSUNDA_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULVSUNDA_134.addFeatures(features_ULVSUNDA_134);
var lyr_ULVSUNDA_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULVSUNDA_134,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_ULVSUNDA_134,
                popuplayertitle: 'ULVSUNDA',
                interactive: true,
                title: '<img src="styles/legend/ULVSUNDA_134.png" /> ULVSUNDA'
            });
var format_Ulvsunda_135 = new ol.format.GeoJSON();
var features_Ulvsunda_135 = format_Ulvsunda_135.readFeatures(json_Ulvsunda_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Ulvsunda_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ulvsunda_135.addFeatures(features_Ulvsunda_135);
var lyr_Ulvsunda_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ulvsunda_135,
maxResolution:15.402176339082557,
 
                style: style_Ulvsunda_135,
                popuplayertitle: 'Ulvsunda',
                interactive: true,
                title: '<img src="styles/legend/Ulvsunda_135.png" /> Ulvsunda'
            });
var format_TRANEBERG_136 = new ol.format.GeoJSON();
var features_TRANEBERG_136 = format_TRANEBERG_136.readFeatures(json_TRANEBERG_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_TRANEBERG_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRANEBERG_136.addFeatures(features_TRANEBERG_136);
var lyr_TRANEBERG_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRANEBERG_136,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_TRANEBERG_136,
                popuplayertitle: 'TRANEBERG',
                interactive: true,
                title: '<img src="styles/legend/TRANEBERG_136.png" /> TRANEBERG'
            });
var format_Traneberg_137 = new ol.format.GeoJSON();
var features_Traneberg_137 = format_Traneberg_137.readFeatures(json_Traneberg_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Traneberg_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Traneberg_137.addFeatures(features_Traneberg_137);
var lyr_Traneberg_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Traneberg_137,
maxResolution:15.402176339082557,
 
                style: style_Traneberg_137,
                popuplayertitle: 'Traneberg',
                interactive: true,
                title: '<img src="styles/legend/Traneberg_137.png" /> Traneberg'
            });
var format_SDRA_NGBY_138 = new ol.format.GeoJSON();
var features_SDRA_NGBY_138 = format_SDRA_NGBY_138.readFeatures(json_SDRA_NGBY_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_SDRA_NGBY_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDRA_NGBY_138.addFeatures(features_SDRA_NGBY_138);
var lyr_SDRA_NGBY_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDRA_NGBY_138,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_SDRA_NGBY_138,
                popuplayertitle: 'SÖDRA_ÄNGBY',
                interactive: true,
                title: '<img src="styles/legend/SDRA_NGBY_138.png" /> SÖDRA_ÄNGBY'
            });
var format_Sdrangby_139 = new ol.format.GeoJSON();
var features_Sdrangby_139 = format_Sdrangby_139.readFeatures(json_Sdrangby_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Sdrangby_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sdrangby_139.addFeatures(features_Sdrangby_139);
var lyr_Sdrangby_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sdrangby_139,
maxResolution:15.402176339082557,
 
                style: style_Sdrangby_139,
                popuplayertitle: 'Södra Ängby',
                interactive: true,
                title: '<img src="styles/legend/Sdrangby_139.png" /> Södra Ängby'
            });
var format_SUNDBY_140 = new ol.format.GeoJSON();
var features_SUNDBY_140 = format_SUNDBY_140.readFeatures(json_SUNDBY_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_SUNDBY_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNDBY_140.addFeatures(features_SUNDBY_140);
var lyr_SUNDBY_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNDBY_140,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_SUNDBY_140,
                popuplayertitle: 'SUNDBY',
                interactive: true,
                title: '<img src="styles/legend/SUNDBY_140.png" /> SUNDBY'
            });
var format_Sundby_141 = new ol.format.GeoJSON();
var features_Sundby_141 = format_Sundby_141.readFeatures(json_Sundby_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Sundby_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sundby_141.addFeatures(features_Sundby_141);
var lyr_Sundby_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sundby_141,
maxResolution:15.402176339082557,
 
                style: style_Sundby_141,
                popuplayertitle: 'Sundby',
                interactive: true,
                title: '<img src="styles/legend/Sundby_141.png" /> Sundby'
            });
var format_STORA_MOSSEN_142 = new ol.format.GeoJSON();
var features_STORA_MOSSEN_142 = format_STORA_MOSSEN_142.readFeatures(json_STORA_MOSSEN_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_STORA_MOSSEN_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STORA_MOSSEN_142.addFeatures(features_STORA_MOSSEN_142);
var lyr_STORA_MOSSEN_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STORA_MOSSEN_142,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_STORA_MOSSEN_142,
                popuplayertitle: 'STORA_MOSSEN',
                interactive: true,
                title: '<img src="styles/legend/STORA_MOSSEN_142.png" /> STORA_MOSSEN'
            });
var format_StoraMossen_143 = new ol.format.GeoJSON();
var features_StoraMossen_143 = format_StoraMossen_143.readFeatures(json_StoraMossen_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_StoraMossen_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StoraMossen_143.addFeatures(features_StoraMossen_143);
var lyr_StoraMossen_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StoraMossen_143,
maxResolution:15.402176339082557,
 
                style: style_StoraMossen_143,
                popuplayertitle: 'Stora Mossen',
                interactive: true,
                title: '<img src="styles/legend/StoraMossen_143.png" /> Stora Mossen'
            });
var format_SOLHEM_144 = new ol.format.GeoJSON();
var features_SOLHEM_144 = format_SOLHEM_144.readFeatures(json_SOLHEM_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_SOLHEM_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLHEM_144.addFeatures(features_SOLHEM_144);
var lyr_SOLHEM_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLHEM_144,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_SOLHEM_144,
                popuplayertitle: 'SOLHEM',
                interactive: true,
                title: '<img src="styles/legend/SOLHEM_144.png" /> SOLHEM'
            });
var format_Solhem_145 = new ol.format.GeoJSON();
var features_Solhem_145 = format_Solhem_145.readFeatures(json_Solhem_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Solhem_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solhem_145.addFeatures(features_Solhem_145);
var lyr_Solhem_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solhem_145,
maxResolution:15.402176339082557,
 
                style: style_Solhem_145,
                popuplayertitle: 'Solhem',
                interactive: true,
                title: '<img src="styles/legend/Solhem_145.png" /> Solhem'
            });
var format_SMEDSLTTEN_146 = new ol.format.GeoJSON();
var features_SMEDSLTTEN_146 = format_SMEDSLTTEN_146.readFeatures(json_SMEDSLTTEN_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_SMEDSLTTEN_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMEDSLTTEN_146.addFeatures(features_SMEDSLTTEN_146);
var lyr_SMEDSLTTEN_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMEDSLTTEN_146,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_SMEDSLTTEN_146,
                popuplayertitle: 'SMEDSLÄTTEN',
                interactive: true,
                title: '<img src="styles/legend/SMEDSLTTEN_146.png" /> SMEDSLÄTTEN'
            });
var format_Smedsltten_147 = new ol.format.GeoJSON();
var features_Smedsltten_147 = format_Smedsltten_147.readFeatures(json_Smedsltten_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Smedsltten_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Smedsltten_147.addFeatures(features_Smedsltten_147);
var lyr_Smedsltten_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Smedsltten_147,
maxResolution:15.402176339082557,
 
                style: style_Smedsltten_147,
                popuplayertitle: 'Smedslätten',
                interactive: true,
                title: '<img src="styles/legend/Smedsltten_147.png" /> Smedslätten'
            });
var format_RIKSBY_148 = new ol.format.GeoJSON();
var features_RIKSBY_148 = format_RIKSBY_148.readFeatures(json_RIKSBY_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_RIKSBY_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIKSBY_148.addFeatures(features_RIKSBY_148);
var lyr_RIKSBY_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIKSBY_148,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_RIKSBY_148,
                popuplayertitle: 'RIKSBY',
                interactive: true,
                title: '<img src="styles/legend/RIKSBY_148.png" /> RIKSBY'
            });
var format_Riksby_149 = new ol.format.GeoJSON();
var features_Riksby_149 = format_Riksby_149.readFeatures(json_Riksby_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Riksby_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riksby_149.addFeatures(features_Riksby_149);
var lyr_Riksby_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riksby_149,
maxResolution:15.402176339082557,
 
                style: style_Riksby_149,
                popuplayertitle: 'Riksby',
                interactive: true,
                title: '<img src="styles/legend/Riksby_149.png" /> Riksby'
            });
var format_OLOVSLUND_150 = new ol.format.GeoJSON();
var features_OLOVSLUND_150 = format_OLOVSLUND_150.readFeatures(json_OLOVSLUND_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_OLOVSLUND_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLOVSLUND_150.addFeatures(features_OLOVSLUND_150);
var lyr_OLOVSLUND_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OLOVSLUND_150,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_OLOVSLUND_150,
                popuplayertitle: 'OLOVSLUND',
                interactive: true,
                title: '<img src="styles/legend/OLOVSLUND_150.png" /> OLOVSLUND'
            });
var format_Olovslund_151 = new ol.format.GeoJSON();
var features_Olovslund_151 = format_Olovslund_151.readFeatures(json_Olovslund_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Olovslund_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Olovslund_151.addFeatures(features_Olovslund_151);
var lyr_Olovslund_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Olovslund_151,
maxResolution:15.402176339082557,
 
                style: style_Olovslund_151,
                popuplayertitle: 'Olovslund',
                interactive: true,
                title: '<img src="styles/legend/Olovslund_151.png" /> Olovslund'
            });
var format_NLSTA_152 = new ol.format.GeoJSON();
var features_NLSTA_152 = format_NLSTA_152.readFeatures(json_NLSTA_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_NLSTA_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NLSTA_152.addFeatures(features_NLSTA_152);
var lyr_NLSTA_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NLSTA_152,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_NLSTA_152,
                popuplayertitle: 'NÄLSTA',
                interactive: true,
                title: '<img src="styles/legend/NLSTA_152.png" /> NÄLSTA'
            });
var format_Nlsta_153 = new ol.format.GeoJSON();
var features_Nlsta_153 = format_Nlsta_153.readFeatures(json_Nlsta_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Nlsta_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nlsta_153.addFeatures(features_Nlsta_153);
var lyr_Nlsta_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nlsta_153,
maxResolution:15.402176339082557,
 
                style: style_Nlsta_153,
                popuplayertitle: 'Nälsta',
                interactive: true,
                title: '<img src="styles/legend/Nlsta_153.png" /> Nälsta'
            });
var format_NORRA_NGBY_154 = new ol.format.GeoJSON();
var features_NORRA_NGBY_154 = format_NORRA_NGBY_154.readFeatures(json_NORRA_NGBY_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_NORRA_NGBY_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NORRA_NGBY_154.addFeatures(features_NORRA_NGBY_154);
var lyr_NORRA_NGBY_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NORRA_NGBY_154,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_NORRA_NGBY_154,
                popuplayertitle: 'NORRA_ÄNGBY',
                interactive: true,
                title: '<img src="styles/legend/NORRA_NGBY_154.png" /> NORRA_ÄNGBY'
            });
var format_Norrangby_155 = new ol.format.GeoJSON();
var features_Norrangby_155 = format_Norrangby_155.readFeatures(json_Norrangby_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Norrangby_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Norrangby_155.addFeatures(features_Norrangby_155);
var lyr_Norrangby_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Norrangby_155,
maxResolution:15.402176339082557,
 
                style: style_Norrangby_155,
                popuplayertitle: 'Norra Ängby',
                interactive: true,
                title: '<img src="styles/legend/Norrangby_155.png" /> Norra Ängby'
            });
var format_NOCKEBYHOV_156 = new ol.format.GeoJSON();
var features_NOCKEBYHOV_156 = format_NOCKEBYHOV_156.readFeatures(json_NOCKEBYHOV_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_NOCKEBYHOV_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOCKEBYHOV_156.addFeatures(features_NOCKEBYHOV_156);
var lyr_NOCKEBYHOV_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NOCKEBYHOV_156,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_NOCKEBYHOV_156,
                popuplayertitle: 'NOCKEBYHOV',
                interactive: true,
                title: '<img src="styles/legend/NOCKEBYHOV_156.png" /> NOCKEBYHOV'
            });
var format_Nockebyhov_157 = new ol.format.GeoJSON();
var features_Nockebyhov_157 = format_Nockebyhov_157.readFeatures(json_Nockebyhov_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Nockebyhov_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nockebyhov_157.addFeatures(features_Nockebyhov_157);
var lyr_Nockebyhov_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nockebyhov_157,
maxResolution:15.402176339082557,
 
                style: style_Nockebyhov_157,
                popuplayertitle: 'Nockebyhov',
                interactive: true,
                title: '<img src="styles/legend/Nockebyhov_157.png" /> Nockebyhov'
            });
var format_NOCKEBY_158 = new ol.format.GeoJSON();
var features_NOCKEBY_158 = format_NOCKEBY_158.readFeatures(json_NOCKEBY_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_NOCKEBY_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOCKEBY_158.addFeatures(features_NOCKEBY_158);
var lyr_NOCKEBY_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NOCKEBY_158,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_NOCKEBY_158,
                popuplayertitle: 'NOCKEBY',
                interactive: true,
                title: '<img src="styles/legend/NOCKEBY_158.png" /> NOCKEBY'
            });
var format_Nockeby_159 = new ol.format.GeoJSON();
var features_Nockeby_159 = format_Nockeby_159.readFeatures(json_Nockeby_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Nockeby_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nockeby_159.addFeatures(features_Nockeby_159);
var lyr_Nockeby_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nockeby_159,
maxResolution:15.402176339082557,
 
                style: style_Nockeby_159,
                popuplayertitle: 'Nockeby',
                interactive: true,
                title: '<img src="styles/legend/Nockeby_159.png" /> Nockeby'
            });
var format_MARIEHLL_160 = new ol.format.GeoJSON();
var features_MARIEHLL_160 = format_MARIEHLL_160.readFeatures(json_MARIEHLL_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_MARIEHLL_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARIEHLL_160.addFeatures(features_MARIEHLL_160);
var lyr_MARIEHLL_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MARIEHLL_160,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_MARIEHLL_160,
                popuplayertitle: 'MARIEHÄLL',
                interactive: true,
                title: '<img src="styles/legend/MARIEHLL_160.png" /> MARIEHÄLL'
            });
var format_Mariehll_161 = new ol.format.GeoJSON();
var features_Mariehll_161 = format_Mariehll_161.readFeatures(json_Mariehll_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Mariehll_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mariehll_161.addFeatures(features_Mariehll_161);
var lyr_Mariehll_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mariehll_161,
maxResolution:15.402176339082557,
 
                style: style_Mariehll_161,
                popuplayertitle: 'Mariehäll',
                interactive: true,
                title: '<img src="styles/legend/Mariehll_161.png" /> Mariehäll'
            });
var format_HGLANDET_162 = new ol.format.GeoJSON();
var features_HGLANDET_162 = format_HGLANDET_162.readFeatures(json_HGLANDET_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_HGLANDET_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HGLANDET_162.addFeatures(features_HGLANDET_162);
var lyr_HGLANDET_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HGLANDET_162,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_HGLANDET_162,
                popuplayertitle: 'HÖGLANDET',
                interactive: true,
                title: '<img src="styles/legend/HGLANDET_162.png" /> HÖGLANDET'
            });
var format_Hglandet_163 = new ol.format.GeoJSON();
var features_Hglandet_163 = format_Hglandet_163.readFeatures(json_Hglandet_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Hglandet_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hglandet_163.addFeatures(features_Hglandet_163);
var lyr_Hglandet_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hglandet_163,
maxResolution:15.402176339082557,
 
                style: style_Hglandet_163,
                popuplayertitle: 'Höglandet',
                interactive: true,
                title: '<img src="styles/legend/Hglandet_163.png" /> Höglandet'
            });
var format_FLYSTA_164 = new ol.format.GeoJSON();
var features_FLYSTA_164 = format_FLYSTA_164.readFeatures(json_FLYSTA_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_FLYSTA_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FLYSTA_164.addFeatures(features_FLYSTA_164);
var lyr_FLYSTA_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FLYSTA_164,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_FLYSTA_164,
                popuplayertitle: 'FLYSTA',
                interactive: true,
                title: '<img src="styles/legend/FLYSTA_164.png" /> FLYSTA'
            });
var format_Flysta_165 = new ol.format.GeoJSON();
var features_Flysta_165 = format_Flysta_165.readFeatures(json_Flysta_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Flysta_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flysta_165.addFeatures(features_Flysta_165);
var lyr_Flysta_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flysta_165,
maxResolution:15.402176339082557,
 
                style: style_Flysta_165,
                popuplayertitle: 'Flysta',
                interactive: true,
                title: '<img src="styles/legend/Flysta_165.png" /> Flysta'
            });
var format_ENEBY_166 = new ol.format.GeoJSON();
var features_ENEBY_166 = format_ENEBY_166.readFeatures(json_ENEBY_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_ENEBY_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENEBY_166.addFeatures(features_ENEBY_166);
var lyr_ENEBY_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENEBY_166,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_ENEBY_166,
                popuplayertitle: 'ENEBY',
                interactive: true,
                title: '<img src="styles/legend/ENEBY_166.png" /> ENEBY'
            });
var format_Eneby_167 = new ol.format.GeoJSON();
var features_Eneby_167 = format_Eneby_167.readFeatures(json_Eneby_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Eneby_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eneby_167.addFeatures(features_Eneby_167);
var lyr_Eneby_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eneby_167,
maxResolution:15.402176339082557,
 
                style: style_Eneby_167,
                popuplayertitle: 'Eneby',
                interactive: true,
                title: '<img src="styles/legend/Eneby_167.png" /> Eneby'
            });
var format_BLLSTA_168 = new ol.format.GeoJSON();
var features_BLLSTA_168 = format_BLLSTA_168.readFeatures(json_BLLSTA_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_BLLSTA_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLLSTA_168.addFeatures(features_BLLSTA_168);
var lyr_BLLSTA_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLLSTA_168,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_BLLSTA_168,
                popuplayertitle: 'BÄLLSTA',
                interactive: true,
                title: '<img src="styles/legend/BLLSTA_168.png" /> BÄLLSTA'
            });
var format_Bllsta_169 = new ol.format.GeoJSON();
var features_Bllsta_169 = format_Bllsta_169.readFeatures(json_Bllsta_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Bllsta_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bllsta_169.addFeatures(features_Bllsta_169);
var lyr_Bllsta_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bllsta_169,
maxResolution:15.402176339082557,
 
                style: style_Bllsta_169,
                popuplayertitle: 'Bällsta',
                interactive: true,
                title: '<img src="styles/legend/Bllsta_169.png" /> Bällsta'
            });
var format_BROMMA_KYRKA_170 = new ol.format.GeoJSON();
var features_BROMMA_KYRKA_170 = format_BROMMA_KYRKA_170.readFeatures(json_BROMMA_KYRKA_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_BROMMA_KYRKA_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BROMMA_KYRKA_170.addFeatures(features_BROMMA_KYRKA_170);
var lyr_BROMMA_KYRKA_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BROMMA_KYRKA_170,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_BROMMA_KYRKA_170,
                popuplayertitle: 'BROMMA_KYRKA',
                interactive: true,
                title: '<img src="styles/legend/BROMMA_KYRKA_170.png" /> BROMMA_KYRKA'
            });
var format_BrommaKyrka_171 = new ol.format.GeoJSON();
var features_BrommaKyrka_171 = format_BrommaKyrka_171.readFeatures(json_BrommaKyrka_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_BrommaKyrka_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrommaKyrka_171.addFeatures(features_BrommaKyrka_171);
var lyr_BrommaKyrka_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BrommaKyrka_171,
maxResolution:15.402176339082557,
 
                style: style_BrommaKyrka_171,
                popuplayertitle: 'Bromma Kyrka',
                interactive: true,
                title: '<img src="styles/legend/BrommaKyrka_171.png" /> Bromma Kyrka'
            });
var format_BLACKEBERG_172 = new ol.format.GeoJSON();
var features_BLACKEBERG_172 = format_BLACKEBERG_172.readFeatures(json_BLACKEBERG_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_BLACKEBERG_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLACKEBERG_172.addFeatures(features_BLACKEBERG_172);
var lyr_BLACKEBERG_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLACKEBERG_172,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_BLACKEBERG_172,
                popuplayertitle: 'BLACKEBERG',
                interactive: true,
                title: '<img src="styles/legend/BLACKEBERG_172.png" /> BLACKEBERG'
            });
var format_Blackeberg_173 = new ol.format.GeoJSON();
var features_Blackeberg_173 = format_Blackeberg_173.readFeatures(json_Blackeberg_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Blackeberg_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blackeberg_173.addFeatures(features_Blackeberg_173);
var lyr_Blackeberg_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Blackeberg_173,
maxResolution:15.402176339082557,
 
                style: style_Blackeberg_173,
                popuplayertitle: 'Blackeberg',
                interactive: true,
                title: '<img src="styles/legend/Blackeberg_173.png" /> Blackeberg'
            });
var format_BECKOMBERGA_174 = new ol.format.GeoJSON();
var features_BECKOMBERGA_174 = format_BECKOMBERGA_174.readFeatures(json_BECKOMBERGA_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_BECKOMBERGA_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BECKOMBERGA_174.addFeatures(features_BECKOMBERGA_174);
var lyr_BECKOMBERGA_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BECKOMBERGA_174,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_BECKOMBERGA_174,
                popuplayertitle: 'BECKOMBERGA',
                interactive: true,
                title: '<img src="styles/legend/BECKOMBERGA_174.png" /> BECKOMBERGA'
            });
var format_Beckomberga_175 = new ol.format.GeoJSON();
var features_Beckomberga_175 = format_Beckomberga_175.readFeatures(json_Beckomberga_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Beckomberga_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beckomberga_175.addFeatures(features_Beckomberga_175);
var lyr_Beckomberga_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beckomberga_175,
maxResolution:15.402176339082557,
 
                style: style_Beckomberga_175,
                popuplayertitle: 'Beckomberga',
                interactive: true,
                title: '<img src="styles/legend/Beckomberga_175.png" /> Beckomberga'
            });
var format_ALVIK_176 = new ol.format.GeoJSON();
var features_ALVIK_176 = format_ALVIK_176.readFeatures(json_ALVIK_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_ALVIK_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALVIK_176.addFeatures(features_ALVIK_176);
var lyr_ALVIK_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALVIK_176,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_ALVIK_176,
                popuplayertitle: 'ALVIK',
                interactive: true,
                title: '<img src="styles/legend/ALVIK_176.png" /> ALVIK'
            });
var format_Alvik_177 = new ol.format.GeoJSON();
var features_Alvik_177 = format_Alvik_177.readFeatures(json_Alvik_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Alvik_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alvik_177.addFeatures(features_Alvik_177);
var lyr_Alvik_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alvik_177,
maxResolution:15.402176339082557,
 
                style: style_Alvik_177,
                popuplayertitle: 'Alvik',
                interactive: true,
                title: '<img src="styles/legend/Alvik_177.png" /> Alvik'
            });
var format_ABRAHAMSBERG_178 = new ol.format.GeoJSON();
var features_ABRAHAMSBERG_178 = format_ABRAHAMSBERG_178.readFeatures(json_ABRAHAMSBERG_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_ABRAHAMSBERG_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABRAHAMSBERG_178.addFeatures(features_ABRAHAMSBERG_178);
var lyr_ABRAHAMSBERG_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABRAHAMSBERG_178,
maxResolution:28004.466152261964,
 minResolution:15.402456383744077,

                style: style_ABRAHAMSBERG_178,
                popuplayertitle: 'ABRAHAMSBERG',
                interactive: true,
                title: '<img src="styles/legend/ABRAHAMSBERG_178.png" /> ABRAHAMSBERG'
            });
var format_Abrahamsberg_179 = new ol.format.GeoJSON();
var features_Abrahamsberg_179 = format_Abrahamsberg_179.readFeatures(json_Abrahamsberg_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Abrahamsberg_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Abrahamsberg_179.addFeatures(features_Abrahamsberg_179);
var lyr_Abrahamsberg_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Abrahamsberg_179,
maxResolution:15.402176339082557,
 
                style: style_Abrahamsberg_179,
                popuplayertitle: 'Abrahamsberg',
                interactive: true,
                title: '<img src="styles/legend/Abrahamsberg_179.png" /> Abrahamsberg'
            });
var group_Abrahamsberg = new ol.layer.Group({
                                layers: [lyr_ABRAHAMSBERG_178,lyr_Abrahamsberg_179,],
                                fold: 'open',
                                title: 'Abrahamsberg'});
var group_Alvik = new ol.layer.Group({
                                layers: [lyr_ALVIK_176,lyr_Alvik_177,],
                                fold: 'close',
                                title: 'Alvik'});
var group_Beckomberga = new ol.layer.Group({
                                layers: [lyr_BECKOMBERGA_174,lyr_Beckomberga_175,],
                                fold: 'close',
                                title: 'Beckomberga'});
var group_Blackeberg = new ol.layer.Group({
                                layers: [lyr_BLACKEBERG_172,lyr_Blackeberg_173,],
                                fold: 'close',
                                title: 'Blackeberg'});
var group_BrommaKyrka = new ol.layer.Group({
                                layers: [lyr_BROMMA_KYRKA_170,lyr_BrommaKyrka_171,],
                                fold: 'close',
                                title: 'Bromma Kyrka'});
var group_Bllsta = new ol.layer.Group({
                                layers: [lyr_BLLSTA_168,lyr_Bllsta_169,],
                                fold: 'close',
                                title: 'Bällsta'});
var group_Eneby = new ol.layer.Group({
                                layers: [lyr_ENEBY_166,lyr_Eneby_167,],
                                fold: 'close',
                                title: 'Eneby'});
var group_Flysta = new ol.layer.Group({
                                layers: [lyr_FLYSTA_164,lyr_Flysta_165,],
                                fold: 'close',
                                title: 'Flysta'});
var group_Hglandet = new ol.layer.Group({
                                layers: [lyr_HGLANDET_162,lyr_Hglandet_163,],
                                fold: 'close',
                                title: 'Höglandet'});
var group_Mariehll = new ol.layer.Group({
                                layers: [lyr_MARIEHLL_160,lyr_Mariehll_161,],
                                fold: 'close',
                                title: 'Mariehäll'});
var group_Nockeby = new ol.layer.Group({
                                layers: [lyr_NOCKEBY_158,lyr_Nockeby_159,],
                                fold: 'close',
                                title: 'Nockeby'});
var group_Nockebyhov = new ol.layer.Group({
                                layers: [lyr_NOCKEBYHOV_156,lyr_Nockebyhov_157,],
                                fold: 'close',
                                title: 'Nockebyhov'});
var group_Norrangby = new ol.layer.Group({
                                layers: [lyr_NORRA_NGBY_154,lyr_Norrangby_155,],
                                fold: 'close',
                                title: 'Norra Ängby'});
var group_Nlsta = new ol.layer.Group({
                                layers: [lyr_NLSTA_152,lyr_Nlsta_153,],
                                fold: 'close',
                                title: 'Nälsta'});
var group_Olovslund = new ol.layer.Group({
                                layers: [lyr_OLOVSLUND_150,lyr_Olovslund_151,],
                                fold: 'close',
                                title: 'Olovslund'});
var group_Riksby = new ol.layer.Group({
                                layers: [lyr_RIKSBY_148,lyr_Riksby_149,],
                                fold: 'close',
                                title: 'Riksby'});
var group_Smedsltten = new ol.layer.Group({
                                layers: [lyr_SMEDSLTTEN_146,lyr_Smedsltten_147,],
                                fold: 'close',
                                title: 'Smedslätten'});
var group_Solhem = new ol.layer.Group({
                                layers: [lyr_SOLHEM_144,lyr_Solhem_145,],
                                fold: 'close',
                                title: 'Solhem'});
var group_StoraMossen = new ol.layer.Group({
                                layers: [lyr_STORA_MOSSEN_142,lyr_StoraMossen_143,],
                                fold: 'close',
                                title: 'Stora Mossen'});
var group_Sundby = new ol.layer.Group({
                                layers: [lyr_SUNDBY_140,lyr_Sundby_141,],
                                fold: 'close',
                                title: 'Sundby'});
var group_Sdrangby = new ol.layer.Group({
                                layers: [lyr_SDRA_NGBY_138,lyr_Sdrangby_139,],
                                fold: 'close',
                                title: 'Södra Ängby'});
var group_Traneberg = new ol.layer.Group({
                                layers: [lyr_TRANEBERG_136,lyr_Traneberg_137,],
                                fold: 'close',
                                title: 'Traneberg'});
var group_Ulvsunda = new ol.layer.Group({
                                layers: [lyr_ULVSUNDA_134,lyr_Ulvsunda_135,],
                                fold: 'close',
                                title: 'Ulvsunda'});
var group_UlvsundaIndustriomrde = new ol.layer.Group({
                                layers: [lyr_ULVSUNDA_INDUSTRIOMRDE_132,lyr_UlvsundaIndustriomrde_133,],
                                fold: 'close',
                                title: 'Ulvsunda Industriområde'});
var group_ppelviken = new ol.layer.Group({
                                layers: [lyr_PPELVIKEN_130,lyr_ppelviken_131,],
                                fold: 'close',
                                title: 'Äppelviken'});
var group_keshov = new ol.layer.Group({
                                layers: [lyr_KESHOV_128,lyr_keshov_129,],
                                fold: 'close',
                                title: 'Åkeshov'});
var group_keslund = new ol.layer.Group({
                                layers: [lyr_KESLUND_126,lyr_keslund_127,],
                                fold: 'close',
                                title: 'Åkeslund'});
var group_lsten = new ol.layer.Group({
                                layers: [lyr_LSTEN_124,lyr_lsten_125,],
                                fold: 'close',
                                title: 'Ålsten'});
var group_Djurgrden = new ol.layer.Group({
                                layers: [lyr_DJURGRDEN_122,lyr_Djurgrden_123,],
                                fold: 'close',
                                title: 'Djurgården'});
var group_Fredhll = new ol.layer.Group({
                                layers: [lyr_FREDHLL_120,lyr_Fredhll_121,],
                                fold: 'close',
                                title: 'Fredhäll'});
var group_GamlaStan = new ol.layer.Group({
                                layers: [lyr_GAMLA_STAN_118,lyr_GamlaStan_119,],
                                fold: 'close',
                                title: 'Gamla Stan'});
var group_Hjorthagen = new ol.layer.Group({
                                layers: [lyr_HJORTHAGEN_116,lyr_Hjorthagen_117,],
                                fold: 'close',
                                title: 'Hjorthagen'});
var group_Kristineberg = new ol.layer.Group({
                                layers: [lyr_KRISTINEBERG_114,lyr_Kristineberg_115,],
                                fold: 'close',
                                title: 'Kristineberg'});
var group_Kungsholmen = new ol.layer.Group({
                                layers: [lyr_KUNGSHOLMEN_112,lyr_Kungsholmen_113,],
                                fold: 'close',
                                title: 'Kungsholmen'});
var group_Ladugrdsgrdet = new ol.layer.Group({
                                layers: [lyr_LADUGRDSGRDET_110,lyr_Ladugrdsgrdet_111,],
                                fold: 'close',
                                title: 'Ladugårdsgärdet'});
var group_LillaEssingen = new ol.layer.Group({
                                layers: [lyr_LILLA_ESSINGEN_108,lyr_LillaEssingen_109,],
                                fold: 'close',
                                title: 'Lilla Essingen'});
var group_Lngholmen = new ol.layer.Group({
                                layers: [lyr_LNGHOLMEN_106,lyr_Lngholmen_107,],
                                fold: 'close',
                                title: 'Långholmen'});
var group_Marieberg = new ol.layer.Group({
                                layers: [lyr_MARIEBERG_104,lyr_Marieberg_105,],
                                fold: 'close',
                                title: 'Marieberg'});
var group_NorraDjurgrden = new ol.layer.Group({
                                layers: [lyr_NORRA_DJURGRDEN_102,lyr_NorraDjurgrden_103,],
                                fold: 'close',
                                title: 'Norra Djurgården'});
var group_Norrmalm = new ol.layer.Group({
                                layers: [lyr_NORRMALM_100,lyr_Norrmalm_101,],
                                fold: 'close',
                                title: 'Norrmalm'});
var group_Reimersholme = new ol.layer.Group({
                                layers: [lyr_REIMERSHOLME_98,lyr_Reimersholme_99,],
                                fold: 'close',
                                title: 'Reimersholme'});
var group_Riddarholmen = new ol.layer.Group({
                                layers: [lyr_RIDDARHOLMEN_96,lyr_Riddarholmen_97,],
                                fold: 'close',
                                title: 'Riddarholmen'});
var group_Skeppsholmen = new ol.layer.Group({
                                layers: [lyr_SKEPPSHOLMEN_94,lyr_Skeppsholmen_95,],
                                fold: 'close',
                                title: 'Skeppsholmen'});
var group_Stadshagen = new ol.layer.Group({
                                layers: [lyr_STADSHAGEN_92,lyr_Stadshagen_93,],
                                fold: 'close',
                                title: 'Stadshagen'});
var group_StoraEssingen = new ol.layer.Group({
                                layers: [lyr_STORA_ESSINGEN_90,lyr_StoraEssingen_91,],
                                fold: 'close',
                                title: 'Stora Essingen'});
var group_Sdermalm = new ol.layer.Group({
                                layers: [lyr_SDERMALM_88,lyr_Sdermalm_89,],
                                fold: 'close',
                                title: 'Södermalm'});
var group_Vasastaden = new ol.layer.Group({
                                layers: [lyr_VASASTADEN_86,lyr_Vasastaden_87,],
                                fold: 'close',
                                title: 'Vasastaden'});
var group_stermalm = new ol.layer.Group({
                                layers: [lyr_stermalm_84,lyr_STERMALM_85,],
                                fold: 'close',
                                title: 'Östermalm'});
var group_Bromsten = new ol.layer.Group({
                                layers: [lyr_BROMSTEN_82,lyr_Bromsten_83,],
                                fold: 'close',
                                title: 'Bromsten'});
var group_Grimsta = new ol.layer.Group({
                                layers: [lyr_GRIMSTA_80,lyr_Grimsta_81,],
                                fold: 'close',
                                title: 'Grimsta'});
var group_HsselbyGrd = new ol.layer.Group({
                                layers: [lyr_HsselbyGrd_78,lyr_HSSELBY_GRD_79,],
                                fold: 'close',
                                title: 'Hässelby Gård'});
var group_HsselbyStrand = new ol.layer.Group({
                                layers: [lyr_HsselbyStrand_76,lyr_HSSELBY_STRAND_77,],
                                fold: 'close',
                                title: 'Hässelby Strand'});
var group_HsselbyVillastad = new ol.layer.Group({
                                layers: [lyr_HsselbyVillastad_74,lyr_HSSELBY_VILLASTAD_75,],
                                fold: 'close',
                                title: 'Hässelby Villastad'});
var group_Klvesta = new ol.layer.Group({
                                layers: [lyr_KLVESTA_72,lyr_Klvesta_73,],
                                fold: 'close',
                                title: 'Kälvesta'});
var group_LundaIndustriomrde = new ol.layer.Group({
                                layers: [lyr_LUNDA_INDUSTRIOMRDE_70,lyr_Lunda_71,],
                                fold: 'close',
                                title: 'Lunda Industriområde'});
var group_Rcksta = new ol.layer.Group({
                                layers: [lyr_RCKSTA_68,lyr_Rcksta_69,],
                                fold: 'close',
                                title: 'Råcksta'});
var group_Vinsta = new ol.layer.Group({
                                layers: [lyr_VINSTA_66,lyr_Vinsta_67,],
                                fold: 'close',
                                title: 'Vinsta'});
var group_Vllingby = new ol.layer.Group({
                                layers: [lyr_VLLINGBY_64,lyr_Vllingby_65,],
                                fold: 'close',
                                title: 'Vällingby'});
var group_Liding = new ol.layer.Group({
                                layers: [lyr_Liding_62,lyr_LIDING_63,],
                                fold: 'close',
                                title: 'Lidingö'});
var group_Sderort = new ol.layer.Group({
                                layers: [lyr_stberga_5,lyr_rby_6,lyr_rsta_7,lyr_lvsj_8,lyr_Tallkrogen_9,lyr_Stureby_10,lyr_Solberga_11,lyr_SkarpncksGrd_12,lyr_Mlarhjden_13,lyr_Midsommarkransen_14,lyr_Lngbro_15,lyr_Liljeholmen_16,lyr_Larsboda_17,lyr_Krrtorp_18,lyr_Johanneshov_19,lyr_Hkarngen_20,lyr_Hgdalen_21,lyr_Hgerstenssen_22,lyr_Hgersten_23,lyr_Hammarbyhjden_24,lyr_Gubbngen_25,lyr_GamlaEnskede_26,lyr_Frungen_27,lyr_FarstaStrand_28,lyr_Farsta_29,lyr_Fagersj_30,lyr_Enskedefltet_31,lyr_Bredng_32,lyr_Bagarmossen_33,lyr_Aspudden_34,],
                                fold: 'close',
                                title: 'Söderort'});
var group_Bergshamra = new ol.layer.Group({
                                layers: [lyr_Bergshamra_58,lyr_BERGSHAMRA_59,],
                                fold: 'close',
                                title: 'Bergshamra'});
var group_Ulriksdal = new ol.layer.Group({
                                layers: [lyr_Ulriksdal_56,lyr_ULRIKSDAL_57,],
                                fold: 'close',
                                title: 'Ulriksdal'});
var group_Jrva = new ol.layer.Group({
                                layers: [lyr_Jrva_54,lyr_Jrva_55,],
                                fold: 'open',
                                title: 'Järva'});
var group_Haga = new ol.layer.Group({
                                layers: [lyr_Haga_53,],
                                fold: 'close',
                                title: 'Haga'});
var group_Hagalund = new ol.layer.Group({
                                layers: [lyr_Hagalund_52,],
                                fold: 'close',
                                title: 'Hagalund'});
var group_Skytteholm = new ol.layer.Group({
                                layers: [lyr_Skytteholm_51,],
                                fold: 'close',
                                title: 'Skytteholm'});
var group_Rsunda = new ol.layer.Group({
                                layers: [lyr_Rsunda_50,],
                                fold: 'close',
                                title: 'Råsunda'});
var group_Huvudsta = new ol.layer.Group({
                                layers: [lyr_Huvudsta_49,],
                                fold: 'close',
                                title: 'Huvudsta'});
var group_Brotorp = new ol.layer.Group({
                                layers: [lyr_Brotorp_48,],
                                fold: 'close',
                                title: 'Brotorp'});
var group_CentralSundbyberg = new ol.layer.Group({
                                layers: [lyr_CentralaSundbyberg_47,],
                                fold: 'close',
                                title: 'Central Sundbyberg'});
var group_Duvbo = new ol.layer.Group({
                                layers: [lyr_Duvbo_46,],
                                fold: 'close',
                                title: 'Duvbo'});
var group_Hallonbergen = new ol.layer.Group({
                                layers: [lyr_Hallonbergen_45,],
                                fold: 'close',
                                title: 'Hallonbergen'});
var group_Kymlinge = new ol.layer.Group({
                                layers: [lyr_Kymlinge_44,],
                                fold: 'close',
                                title: 'Kymlinge'});
var group_LillaAlby = new ol.layer.Group({
                                layers: [lyr_LillaAlby_43,],
                                fold: 'close',
                                title: 'Lilla Alby'});
var group_LillaUrsvik = new ol.layer.Group({
                                layers: [lyr_LillaUrsvik_42,],
                                fold: 'close',
                                title: 'Lilla Ursvik'});
var group_Rissne = new ol.layer.Group({
                                layers: [lyr_Rissne_41,],
                                fold: 'close',
                                title: 'Rissne'});
var group_StoraUrsvik = new ol.layer.Group({
                                layers: [lyr_StoraUrsvik_40,],
                                fold: 'close',
                                title: 'Stora Ursvik'});
var group_Storskogen = new ol.layer.Group({
                                layers: [lyr_Storskogen_39,],
                                fold: 'close',
                                title: 'Storskogen'});
var group_r = new ol.layer.Group({
                                layers: [lyr_r_38,],
                                fold: 'close',
                                title: 'Ör'});
var group_Jrflla = new ol.layer.Group({
                                layers: [lyr_Jrflla_37,],
                                fold: 'close',
                                title: 'Järfälla'});
var group_Nacka = new ol.layer.Group({
                                layers: [lyr_Nacka_36,],
                                fold: 'close',
                                title: 'Nacka'});
var group_SdraHammarbyhamnen = new ol.layer.Group({
                                layers: [lyr_SdraHammarbyhamnen_35,],
                                fold: 'open',
                                title: 'Södra Hammarbyhamnen'});
var group_Danderyd = new ol.layer.Group({
                                layers: [lyr_Danderyd_4,],
                                fold: 'close',
                                title: 'Danderyd'});
var group_Kista = new ol.layer.Group({
                                layers: [lyr_Kista_3,],
                                fold: 'close',
                                title: 'Kista'});
var group_Akalla = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Akalla'});
var group_Hansta = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Hansta'});
var group_Rinkeby = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Rinkeby'});
var group_Tensta = new ol.layer.Group({
                                layers: [lyr_Tensta_1,lyr_TENSTA1_2,],
                                fold: 'close',
                                title: 'Tensta'});
var group_Husby = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Husby'});
var group_Vgar = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Vägar'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Tensta_1.setVisible(true);lyr_TENSTA1_2.setVisible(true);lyr_Kista_3.setVisible(true);lyr_Danderyd_4.setVisible(true);lyr_stberga_5.setVisible(true);lyr_rby_6.setVisible(true);lyr_rsta_7.setVisible(true);lyr_lvsj_8.setVisible(true);lyr_Tallkrogen_9.setVisible(true);lyr_Stureby_10.setVisible(true);lyr_Solberga_11.setVisible(true);lyr_SkarpncksGrd_12.setVisible(true);lyr_Mlarhjden_13.setVisible(true);lyr_Midsommarkransen_14.setVisible(true);lyr_Lngbro_15.setVisible(true);lyr_Liljeholmen_16.setVisible(true);lyr_Larsboda_17.setVisible(true);lyr_Krrtorp_18.setVisible(true);lyr_Johanneshov_19.setVisible(true);lyr_Hkarngen_20.setVisible(true);lyr_Hgdalen_21.setVisible(true);lyr_Hgerstenssen_22.setVisible(true);lyr_Hgersten_23.setVisible(true);lyr_Hammarbyhjden_24.setVisible(true);lyr_Gubbngen_25.setVisible(true);lyr_GamlaEnskede_26.setVisible(true);lyr_Frungen_27.setVisible(true);lyr_FarstaStrand_28.setVisible(true);lyr_Farsta_29.setVisible(true);lyr_Fagersj_30.setVisible(true);lyr_Enskedefltet_31.setVisible(true);lyr_Bredng_32.setVisible(true);lyr_Bagarmossen_33.setVisible(true);lyr_Aspudden_34.setVisible(true);lyr_SdraHammarbyhamnen_35.setVisible(true);lyr_Nacka_36.setVisible(true);lyr_Jrflla_37.setVisible(true);lyr_r_38.setVisible(true);lyr_Storskogen_39.setVisible(true);lyr_StoraUrsvik_40.setVisible(true);lyr_Rissne_41.setVisible(true);lyr_LillaUrsvik_42.setVisible(true);lyr_LillaAlby_43.setVisible(true);lyr_Kymlinge_44.setVisible(true);lyr_Hallonbergen_45.setVisible(true);lyr_Duvbo_46.setVisible(true);lyr_CentralaSundbyberg_47.setVisible(true);lyr_Brotorp_48.setVisible(true);lyr_Huvudsta_49.setVisible(true);lyr_Rsunda_50.setVisible(true);lyr_Skytteholm_51.setVisible(true);lyr_Hagalund_52.setVisible(true);lyr_Haga_53.setVisible(true);lyr_Jrva_54.setVisible(true);lyr_Jrva_55.setVisible(true);lyr_Ulriksdal_56.setVisible(true);lyr_ULRIKSDAL_57.setVisible(true);lyr_Bergshamra_58.setVisible(true);lyr_BERGSHAMRA_59.setVisible(true);lyr_Grndal_60.setVisible(true);lyr_GRNDAL_61.setVisible(true);lyr_Liding_62.setVisible(true);lyr_LIDING_63.setVisible(true);lyr_VLLINGBY_64.setVisible(true);lyr_Vllingby_65.setVisible(true);lyr_VINSTA_66.setVisible(true);lyr_Vinsta_67.setVisible(true);lyr_RCKSTA_68.setVisible(true);lyr_Rcksta_69.setVisible(true);lyr_LUNDA_INDUSTRIOMRDE_70.setVisible(true);lyr_Lunda_71.setVisible(true);lyr_KLVESTA_72.setVisible(true);lyr_Klvesta_73.setVisible(true);lyr_HsselbyVillastad_74.setVisible(true);lyr_HSSELBY_VILLASTAD_75.setVisible(true);lyr_HsselbyStrand_76.setVisible(true);lyr_HSSELBY_STRAND_77.setVisible(true);lyr_HsselbyGrd_78.setVisible(true);lyr_HSSELBY_GRD_79.setVisible(true);lyr_GRIMSTA_80.setVisible(true);lyr_Grimsta_81.setVisible(true);lyr_BROMSTEN_82.setVisible(true);lyr_Bromsten_83.setVisible(true);lyr_stermalm_84.setVisible(true);lyr_STERMALM_85.setVisible(true);lyr_VASASTADEN_86.setVisible(true);lyr_Vasastaden_87.setVisible(true);lyr_SDERMALM_88.setVisible(true);lyr_Sdermalm_89.setVisible(true);lyr_STORA_ESSINGEN_90.setVisible(true);lyr_StoraEssingen_91.setVisible(true);lyr_STADSHAGEN_92.setVisible(true);lyr_Stadshagen_93.setVisible(true);lyr_SKEPPSHOLMEN_94.setVisible(true);lyr_Skeppsholmen_95.setVisible(true);lyr_RIDDARHOLMEN_96.setVisible(true);lyr_Riddarholmen_97.setVisible(true);lyr_REIMERSHOLME_98.setVisible(true);lyr_Reimersholme_99.setVisible(true);lyr_NORRMALM_100.setVisible(true);lyr_Norrmalm_101.setVisible(true);lyr_NORRA_DJURGRDEN_102.setVisible(true);lyr_NorraDjurgrden_103.setVisible(true);lyr_MARIEBERG_104.setVisible(true);lyr_Marieberg_105.setVisible(true);lyr_LNGHOLMEN_106.setVisible(true);lyr_Lngholmen_107.setVisible(true);lyr_LILLA_ESSINGEN_108.setVisible(true);lyr_LillaEssingen_109.setVisible(true);lyr_LADUGRDSGRDET_110.setVisible(true);lyr_Ladugrdsgrdet_111.setVisible(true);lyr_KUNGSHOLMEN_112.setVisible(true);lyr_Kungsholmen_113.setVisible(true);lyr_KRISTINEBERG_114.setVisible(true);lyr_Kristineberg_115.setVisible(true);lyr_HJORTHAGEN_116.setVisible(true);lyr_Hjorthagen_117.setVisible(true);lyr_GAMLA_STAN_118.setVisible(true);lyr_GamlaStan_119.setVisible(true);lyr_FREDHLL_120.setVisible(true);lyr_Fredhll_121.setVisible(true);lyr_DJURGRDEN_122.setVisible(true);lyr_Djurgrden_123.setVisible(true);lyr_LSTEN_124.setVisible(true);lyr_lsten_125.setVisible(true);lyr_KESLUND_126.setVisible(true);lyr_keslund_127.setVisible(true);lyr_KESHOV_128.setVisible(true);lyr_keshov_129.setVisible(true);lyr_PPELVIKEN_130.setVisible(true);lyr_ppelviken_131.setVisible(true);lyr_ULVSUNDA_INDUSTRIOMRDE_132.setVisible(true);lyr_UlvsundaIndustriomrde_133.setVisible(true);lyr_ULVSUNDA_134.setVisible(true);lyr_Ulvsunda_135.setVisible(true);lyr_TRANEBERG_136.setVisible(true);lyr_Traneberg_137.setVisible(true);lyr_SDRA_NGBY_138.setVisible(true);lyr_Sdrangby_139.setVisible(true);lyr_SUNDBY_140.setVisible(true);lyr_Sundby_141.setVisible(true);lyr_STORA_MOSSEN_142.setVisible(true);lyr_StoraMossen_143.setVisible(true);lyr_SOLHEM_144.setVisible(true);lyr_Solhem_145.setVisible(true);lyr_SMEDSLTTEN_146.setVisible(true);lyr_Smedsltten_147.setVisible(true);lyr_RIKSBY_148.setVisible(true);lyr_Riksby_149.setVisible(true);lyr_OLOVSLUND_150.setVisible(true);lyr_Olovslund_151.setVisible(true);lyr_NLSTA_152.setVisible(true);lyr_Nlsta_153.setVisible(true);lyr_NORRA_NGBY_154.setVisible(true);lyr_Norrangby_155.setVisible(true);lyr_NOCKEBYHOV_156.setVisible(true);lyr_Nockebyhov_157.setVisible(true);lyr_NOCKEBY_158.setVisible(true);lyr_Nockeby_159.setVisible(true);lyr_MARIEHLL_160.setVisible(true);lyr_Mariehll_161.setVisible(true);lyr_HGLANDET_162.setVisible(true);lyr_Hglandet_163.setVisible(true);lyr_FLYSTA_164.setVisible(true);lyr_Flysta_165.setVisible(true);lyr_ENEBY_166.setVisible(true);lyr_Eneby_167.setVisible(true);lyr_BLLSTA_168.setVisible(true);lyr_Bllsta_169.setVisible(true);lyr_BROMMA_KYRKA_170.setVisible(true);lyr_BrommaKyrka_171.setVisible(true);lyr_BLACKEBERG_172.setVisible(true);lyr_Blackeberg_173.setVisible(true);lyr_BECKOMBERGA_174.setVisible(true);lyr_Beckomberga_175.setVisible(true);lyr_ALVIK_176.setVisible(true);lyr_Alvik_177.setVisible(true);lyr_ABRAHAMSBERG_178.setVisible(true);lyr_Abrahamsberg_179.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Tensta,group_Kista,group_Danderyd,group_Sderort,group_SdraHammarbyhamnen,group_Nacka,group_Jrflla,group_r,group_Storskogen,group_StoraUrsvik,group_Rissne,group_LillaUrsvik,group_LillaAlby,group_Kymlinge,group_Hallonbergen,group_Duvbo,group_CentralSundbyberg,group_Brotorp,group_Huvudsta,group_Rsunda,group_Skytteholm,group_Hagalund,group_Haga,group_Jrva,group_Ulriksdal,group_Bergshamra,lyr_Grndal_60,lyr_GRNDAL_61,group_Liding,group_Vllingby,group_Vinsta,group_Rcksta,group_LundaIndustriomrde,group_Klvesta,group_HsselbyVillastad,group_HsselbyStrand,group_HsselbyGrd,group_Grimsta,group_Bromsten,group_stermalm,group_Vasastaden,group_Sdermalm,group_StoraEssingen,group_Stadshagen,group_Skeppsholmen,group_Riddarholmen,group_Reimersholme,group_Norrmalm,group_NorraDjurgrden,group_Marieberg,group_Lngholmen,group_LillaEssingen,group_Ladugrdsgrdet,group_Kungsholmen,group_Kristineberg,group_Hjorthagen,group_GamlaStan,group_Fredhll,group_Djurgrden,group_lsten,group_keslund,group_keshov,group_ppelviken,group_UlvsundaIndustriomrde,group_Ulvsunda,group_Traneberg,group_Sdrangby,group_Sundby,group_StoraMossen,group_Solhem,group_Smedsltten,group_Riksby,group_Olovslund,group_Nlsta,group_Norrangby,group_Nockebyhov,group_Nockeby,group_Mariehll,group_Hglandet,group_Flysta,group_Eneby,group_Bllsta,group_BrommaKyrka,group_Blackeberg,group_Beckomberga,group_Alvik,group_Abrahamsberg];
lyr_Tensta_1.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_TENSTA1_2.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Kista_3.set('fieldAliases', {'fid': 'fid', });
lyr_Danderyd_4.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_stberga_5.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_rby_6.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_rsta_7.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_lvsj_8.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Tallkrogen_9.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Stureby_10.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Solberga_11.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_SkarpncksGrd_12.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Mlarhjden_13.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Midsommarkransen_14.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Lngbro_15.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Liljeholmen_16.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Larsboda_17.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Krrtorp_18.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Johanneshov_19.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Hkarngen_20.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Hgdalen_21.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Hgerstenssen_22.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Hgersten_23.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Hammarbyhjden_24.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Gubbngen_25.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_GamlaEnskede_26.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Frungen_27.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_FarstaStrand_28.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Farsta_29.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Fagersj_30.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Enskedefltet_31.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Bredng_32.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Bagarmossen_33.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Aspudden_34.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_SdraHammarbyhamnen_35.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Nacka_36.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Jrflla_37.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_r_38.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Storskogen_39.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_StoraUrsvik_40.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Rissne_41.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_LillaUrsvik_42.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_LillaAlby_43.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Kymlinge_44.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Hallonbergen_45.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Duvbo_46.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_CentralaSundbyberg_47.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Brotorp_48.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Huvudsta_49.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Rsunda_50.set('fieldAliases', {'fid': 'fid', });
lyr_Skytteholm_51.set('fieldAliases', {'fid': 'fid', });
lyr_Hagalund_52.set('fieldAliases', {'fid': 'fid', });
lyr_Haga_53.set('fieldAliases', {'fid': 'fid', });
lyr_Jrva_54.set('fieldAliases', {'fid': 'fid', });
lyr_Jrva_55.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Ulriksdal_56.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_ULRIKSDAL_57.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Bergshamra_58.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_BERGSHAMRA_59.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Grndal_60.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_GRNDAL_61.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Liding_62.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_LIDING_63.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_VLLINGBY_64.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Vllingby_65.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_VINSTA_66.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Vinsta_67.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_RCKSTA_68.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Rcksta_69.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_LUNDA_INDUSTRIOMRDE_70.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Lunda_71.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_KLVESTA_72.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Klvesta_73.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_HsselbyVillastad_74.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_HSSELBY_VILLASTAD_75.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_HsselbyStrand_76.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_HSSELBY_STRAND_77.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_HsselbyGrd_78.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_HSSELBY_GRD_79.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_GRIMSTA_80.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Grimsta_81.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_BROMSTEN_82.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Bromsten_83.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_stermalm_84.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_STERMALM_85.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_VASASTADEN_86.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Vasastaden_87.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_SDERMALM_88.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Sdermalm_89.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_STORA_ESSINGEN_90.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_StoraEssingen_91.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_STADSHAGEN_92.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Stadshagen_93.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_SKEPPSHOLMEN_94.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Skeppsholmen_95.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_RIDDARHOLMEN_96.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Riddarholmen_97.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_REIMERSHOLME_98.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Reimersholme_99.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_NORRMALM_100.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Norrmalm_101.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_NORRA_DJURGRDEN_102.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_NorraDjurgrden_103.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_MARIEBERG_104.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Marieberg_105.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_LNGHOLMEN_106.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Lngholmen_107.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_LILLA_ESSINGEN_108.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_LillaEssingen_109.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_LADUGRDSGRDET_110.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Ladugrdsgrdet_111.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_KUNGSHOLMEN_112.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Kungsholmen_113.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_KRISTINEBERG_114.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Kristineberg_115.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_HJORTHAGEN_116.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Hjorthagen_117.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_GAMLA_STAN_118.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_GamlaStan_119.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_FREDHLL_120.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Fredhll_121.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_DJURGRDEN_122.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Djurgrden_123.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_LSTEN_124.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_lsten_125.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_KESLUND_126.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_keslund_127.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_KESHOV_128.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_keshov_129.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_PPELVIKEN_130.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_ppelviken_131.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_ULVSUNDA_INDUSTRIOMRDE_132.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_UlvsundaIndustriomrde_133.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_ULVSUNDA_134.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Ulvsunda_135.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_TRANEBERG_136.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Traneberg_137.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_SDRA_NGBY_138.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Sdrangby_139.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_SUNDBY_140.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Sundby_141.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_STORA_MOSSEN_142.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_StoraMossen_143.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_SOLHEM_144.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Solhem_145.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_SMEDSLTTEN_146.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Smedsltten_147.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_RIKSBY_148.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Riksby_149.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_OLOVSLUND_150.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Olovslund_151.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_NLSTA_152.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Nlsta_153.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_NORRA_NGBY_154.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Norrangby_155.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_NOCKEBYHOV_156.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Nockebyhov_157.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_NOCKEBY_158.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Nockeby_159.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_MARIEHLL_160.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Mariehll_161.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_HGLANDET_162.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Hglandet_163.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_FLYSTA_164.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Flysta_165.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_ENEBY_166.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Eneby_167.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_BLLSTA_168.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Bllsta_169.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_BROMMA_KYRKA_170.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_BrommaKyrka_171.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_BLACKEBERG_172.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Blackeberg_173.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_BECKOMBERGA_174.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Beckomberga_175.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_ALVIK_176.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Alvik_177.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_ABRAHAMSBERG_178.set('fieldAliases', {'fid': 'fid', 'NAMN': 'NAMN', 'KATEGORI': 'KATEGORI', 'color_id': 'color_id', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_Abrahamsberg_179.set('fieldAliases', {'fid': 'fid', 'Stadsdelsområde': 'Stadsdelsområde', 'Stadsdelsnamn': 'Stadsdelsnamn', });
lyr_Tensta_1.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_TENSTA1_2.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Kista_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Danderyd_4.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_stberga_5.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_rby_6.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_rsta_7.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_lvsj_8.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Tallkrogen_9.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Stureby_10.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Solberga_11.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_SkarpncksGrd_12.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Mlarhjden_13.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Midsommarkransen_14.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Lngbro_15.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Liljeholmen_16.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Larsboda_17.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Krrtorp_18.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Johanneshov_19.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Hkarngen_20.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Hgdalen_21.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Hgerstenssen_22.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Hgersten_23.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Hammarbyhjden_24.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Gubbngen_25.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_GamlaEnskede_26.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Frungen_27.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_FarstaStrand_28.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Farsta_29.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Fagersj_30.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Enskedefltet_31.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Bredng_32.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Bagarmossen_33.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Aspudden_34.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_SdraHammarbyhamnen_35.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Nacka_36.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Jrflla_37.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_r_38.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Storskogen_39.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_StoraUrsvik_40.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Rissne_41.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_LillaUrsvik_42.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_LillaAlby_43.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Kymlinge_44.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Hallonbergen_45.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Duvbo_46.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_CentralaSundbyberg_47.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Brotorp_48.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Huvudsta_49.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Rsunda_50.set('fieldImages', {'fid': 'TextEdit', });
lyr_Skytteholm_51.set('fieldImages', {'fid': 'TextEdit', });
lyr_Hagalund_52.set('fieldImages', {'fid': 'TextEdit', });
lyr_Haga_53.set('fieldImages', {'fid': 'TextEdit', });
lyr_Jrva_54.set('fieldImages', {'fid': 'TextEdit', });
lyr_Jrva_55.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Ulriksdal_56.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_ULRIKSDAL_57.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Bergshamra_58.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_BERGSHAMRA_59.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Grndal_60.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_GRNDAL_61.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Liding_62.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_LIDING_63.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_VLLINGBY_64.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Vllingby_65.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_VINSTA_66.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Vinsta_67.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_RCKSTA_68.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Rcksta_69.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_LUNDA_INDUSTRIOMRDE_70.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Lunda_71.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_KLVESTA_72.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Klvesta_73.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_HsselbyVillastad_74.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_HSSELBY_VILLASTAD_75.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_HsselbyStrand_76.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_HSSELBY_STRAND_77.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_HsselbyGrd_78.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_HSSELBY_GRD_79.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_GRIMSTA_80.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Grimsta_81.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_BROMSTEN_82.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Bromsten_83.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_stermalm_84.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_STERMALM_85.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_VASASTADEN_86.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Vasastaden_87.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_SDERMALM_88.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Sdermalm_89.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_STORA_ESSINGEN_90.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_StoraEssingen_91.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_STADSHAGEN_92.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Stadshagen_93.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_SKEPPSHOLMEN_94.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Skeppsholmen_95.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_RIDDARHOLMEN_96.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Riddarholmen_97.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_REIMERSHOLME_98.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Reimersholme_99.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_NORRMALM_100.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Norrmalm_101.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_NORRA_DJURGRDEN_102.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_NorraDjurgrden_103.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_MARIEBERG_104.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Marieberg_105.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_LNGHOLMEN_106.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Lngholmen_107.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_LILLA_ESSINGEN_108.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_LillaEssingen_109.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_LADUGRDSGRDET_110.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Ladugrdsgrdet_111.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_KUNGSHOLMEN_112.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Kungsholmen_113.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_KRISTINEBERG_114.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Kristineberg_115.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_HJORTHAGEN_116.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Hjorthagen_117.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_GAMLA_STAN_118.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_GamlaStan_119.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_FREDHLL_120.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Fredhll_121.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_DJURGRDEN_122.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Djurgrden_123.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_LSTEN_124.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_lsten_125.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_KESLUND_126.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_keslund_127.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_KESHOV_128.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_keshov_129.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_PPELVIKEN_130.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_ppelviken_131.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_ULVSUNDA_INDUSTRIOMRDE_132.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_UlvsundaIndustriomrde_133.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_ULVSUNDA_134.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Ulvsunda_135.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_TRANEBERG_136.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Traneberg_137.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_SDRA_NGBY_138.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Sdrangby_139.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_SUNDBY_140.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Sundby_141.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_STORA_MOSSEN_142.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_StoraMossen_143.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_SOLHEM_144.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Solhem_145.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_SMEDSLTTEN_146.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Smedsltten_147.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_RIKSBY_148.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Riksby_149.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_OLOVSLUND_150.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Olovslund_151.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_NLSTA_152.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Nlsta_153.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_NORRA_NGBY_154.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Norrangby_155.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_NOCKEBYHOV_156.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Nockebyhov_157.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_NOCKEBY_158.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Nockeby_159.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_MARIEHLL_160.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Mariehll_161.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_HGLANDET_162.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Hglandet_163.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_FLYSTA_164.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Flysta_165.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_ENEBY_166.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Eneby_167.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_BLLSTA_168.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Bllsta_169.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_BROMMA_KYRKA_170.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_BrommaKyrka_171.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_BLACKEBERG_172.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Blackeberg_173.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_BECKOMBERGA_174.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Beckomberga_175.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_ALVIK_176.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Alvik_177.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_ABRAHAMSBERG_178.set('fieldImages', {'fid': '', 'NAMN': '', 'KATEGORI': '', 'color_id': '', 'id': '', 'layer': '', 'path': '', });
lyr_Abrahamsberg_179.set('fieldImages', {'fid': 'TextEdit', 'Stadsdelsområde': '', 'Stadsdelsnamn': '', });
lyr_Tensta_1.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_TENSTA1_2.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Kista_3.set('fieldLabels', {'fid': 'no label', });
lyr_Danderyd_4.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_stberga_5.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_rby_6.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_rsta_7.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_lvsj_8.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Tallkrogen_9.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Stureby_10.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Solberga_11.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_SkarpncksGrd_12.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Mlarhjden_13.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Midsommarkransen_14.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Lngbro_15.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Liljeholmen_16.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Larsboda_17.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Krrtorp_18.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Johanneshov_19.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Hkarngen_20.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Hgdalen_21.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Hgerstenssen_22.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Hgersten_23.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Hammarbyhjden_24.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Gubbngen_25.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_GamlaEnskede_26.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Frungen_27.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_FarstaStrand_28.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Farsta_29.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Fagersj_30.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Enskedefltet_31.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Bredng_32.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Bagarmossen_33.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Aspudden_34.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_SdraHammarbyhamnen_35.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Nacka_36.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Jrflla_37.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_r_38.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Storskogen_39.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_StoraUrsvik_40.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Rissne_41.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_LillaUrsvik_42.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_LillaAlby_43.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Kymlinge_44.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Hallonbergen_45.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Duvbo_46.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_CentralaSundbyberg_47.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Brotorp_48.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Huvudsta_49.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Rsunda_50.set('fieldLabels', {'fid': 'no label', });
lyr_Skytteholm_51.set('fieldLabels', {'fid': 'no label', });
lyr_Hagalund_52.set('fieldLabels', {'fid': 'no label', });
lyr_Haga_53.set('fieldLabels', {'fid': 'no label', });
lyr_Jrva_54.set('fieldLabels', {'fid': 'no label', });
lyr_Jrva_55.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ulriksdal_56.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_ULRIKSDAL_57.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Bergshamra_58.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_BERGSHAMRA_59.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Grndal_60.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_GRNDAL_61.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Liding_62.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_LIDING_63.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_VLLINGBY_64.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vllingby_65.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_VINSTA_66.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vinsta_67.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_RCKSTA_68.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Rcksta_69.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_LUNDA_INDUSTRIOMRDE_70.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Lunda_71.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_KLVESTA_72.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Klvesta_73.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_HsselbyVillastad_74.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_HSSELBY_VILLASTAD_75.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_HsselbyStrand_76.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_HSSELBY_STRAND_77.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_HsselbyGrd_78.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_HSSELBY_GRD_79.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_GRIMSTA_80.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Grimsta_81.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_BROMSTEN_82.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Bromsten_83.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_stermalm_84.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_STERMALM_85.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_VASASTADEN_86.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vasastaden_87.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_SDERMALM_88.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Sdermalm_89.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_STORA_ESSINGEN_90.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_StoraEssingen_91.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_STADSHAGEN_92.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Stadshagen_93.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_SKEPPSHOLMEN_94.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Skeppsholmen_95.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_RIDDARHOLMEN_96.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Riddarholmen_97.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_REIMERSHOLME_98.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Reimersholme_99.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_NORRMALM_100.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Norrmalm_101.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_NORRA_DJURGRDEN_102.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_NorraDjurgrden_103.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_MARIEBERG_104.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Marieberg_105.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_LNGHOLMEN_106.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Lngholmen_107.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_LILLA_ESSINGEN_108.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_LillaEssingen_109.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_LADUGRDSGRDET_110.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ladugrdsgrdet_111.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_KUNGSHOLMEN_112.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Kungsholmen_113.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_KRISTINEBERG_114.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Kristineberg_115.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_HJORTHAGEN_116.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Hjorthagen_117.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_GAMLA_STAN_118.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_GamlaStan_119.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_FREDHLL_120.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Fredhll_121.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_DJURGRDEN_122.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Djurgrden_123.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_LSTEN_124.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_lsten_125.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_KESLUND_126.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_keslund_127.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_KESHOV_128.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_keshov_129.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_PPELVIKEN_130.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ppelviken_131.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_ULVSUNDA_INDUSTRIOMRDE_132.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_UlvsundaIndustriomrde_133.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_ULVSUNDA_134.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ulvsunda_135.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_TRANEBERG_136.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Traneberg_137.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_SDRA_NGBY_138.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Sdrangby_139.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_SUNDBY_140.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Sundby_141.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_STORA_MOSSEN_142.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_StoraMossen_143.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_SOLHEM_144.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Solhem_145.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_SMEDSLTTEN_146.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Smedsltten_147.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_RIKSBY_148.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Riksby_149.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_OLOVSLUND_150.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Olovslund_151.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_NLSTA_152.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Nlsta_153.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_NORRA_NGBY_154.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Norrangby_155.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_NOCKEBYHOV_156.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Nockebyhov_157.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_NOCKEBY_158.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Nockeby_159.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_MARIEHLL_160.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Mariehll_161.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_HGLANDET_162.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Hglandet_163.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_FLYSTA_164.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Flysta_165.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_ENEBY_166.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Eneby_167.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_BLLSTA_168.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Bllsta_169.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_BROMMA_KYRKA_170.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_BrommaKyrka_171.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_BLACKEBERG_172.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Blackeberg_173.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_BECKOMBERGA_174.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Beckomberga_175.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_ALVIK_176.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Alvik_177.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_ABRAHAMSBERG_178.set('fieldLabels', {'fid': 'no label', 'NAMN': 'no label', 'KATEGORI': 'no label', 'color_id': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Abrahamsberg_179.set('fieldLabels', {'fid': 'no label', 'Stadsdelsområde': 'no label', 'Stadsdelsnamn': 'no label', });
lyr_Abrahamsberg_179.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});