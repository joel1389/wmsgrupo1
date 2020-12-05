var wms_layers = [];


        var lyr_GooglecnNormal_0 = new ol.layer.Tile({
            'title': 'Google.cn Normal',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Vias_1 = new ol.format.GeoJSON();
var features_Vias_1 = format_Vias_1.readFeatures(json_Vias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_1.addFeatures(features_Vias_1);
var lyr_Vias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vias_1, 
                style: style_Vias_1,
                interactive: true,
                title: '<img src="styles/legend/Vias_1.png" /> Vias'
            });
var format_Manzanas_2 = new ol.format.GeoJSON();
var features_Manzanas_2 = format_Manzanas_2.readFeatures(json_Manzanas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_2.addFeatures(features_Manzanas_2);
var lyr_Manzanas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_2, 
                style: style_Manzanas_2,
                interactive: true,
                title: '<img src="styles/legend/Manzanas_2.png" /> Manzanas'
            });
var format_areas_publicas_3 = new ol.format.GeoJSON();
var features_areas_publicas_3 = format_areas_publicas_3.readFeatures(json_areas_publicas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_publicas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_publicas_3.addFeatures(features_areas_publicas_3);
var lyr_areas_publicas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_areas_publicas_3, 
                style: style_areas_publicas_3,
                interactive: true,
                title: '<img src="styles/legend/areas_publicas_3.png" /> areas_publicas'
            });
var format_Predios_4 = new ol.format.GeoJSON();
var features_Predios_4 = format_Predios_4.readFeatures(json_Predios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_4.addFeatures(features_Predios_4);
var lyr_Predios_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Predios_4, 
                style: style_Predios_4,
                interactive: true,
                title: '<img src="styles/legend/Predios_4.png" /> Predios'
            });
var format_Barrios_5 = new ol.format.GeoJSON();
var features_Barrios_5 = format_Barrios_5.readFeatures(json_Barrios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_5.addFeatures(features_Barrios_5);
var lyr_Barrios_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Barrios_5, 
                style: style_Barrios_5,
                interactive: true,
                title: '<img src="styles/legend/Barrios_5.png" /> Barrios'
            });
var format_Distritos_6 = new ol.format.GeoJSON();
var features_Distritos_6 = format_Distritos_6.readFeatures(json_Distritos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_6.addFeatures(features_Distritos_6);
var lyr_Distritos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Distritos_6, 
                style: style_Distritos_6,
                interactive: true,
                title: '<img src="styles/legend/Distritos_6.png" /> Distritos'
            });
var format_Macrodistritos_7 = new ol.format.GeoJSON();
var features_Macrodistritos_7 = format_Macrodistritos_7.readFeatures(json_Macrodistritos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Macrodistritos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Macrodistritos_7.addFeatures(features_Macrodistritos_7);
var lyr_Macrodistritos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Macrodistritos_7, 
                style: style_Macrodistritos_7,
                interactive: true,
                title: '<img src="styles/legend/Macrodistritos_7.png" /> Macrodistritos'
            });
var format_Area_de_Trabajo_8 = new ol.format.GeoJSON();
var features_Area_de_Trabajo_8 = format_Area_de_Trabajo_8.readFeatures(json_Area_de_Trabajo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_de_Trabajo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_de_Trabajo_8.addFeatures(features_Area_de_Trabajo_8);
var lyr_Area_de_Trabajo_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_de_Trabajo_8, 
                style: style_Area_de_Trabajo_8,
                interactive: true,
                title: '<img src="styles/legend/Area_de_Trabajo_8.png" /> Area_de_Trabajo'
            });
var format_Farmacias_9 = new ol.format.GeoJSON();
var features_Farmacias_9 = format_Farmacias_9.readFeatures(json_Farmacias_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Farmacias_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Farmacias_9.addFeatures(features_Farmacias_9);
var lyr_Farmacias_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Farmacias_9, 
                style: style_Farmacias_9,
                interactive: true,
                title: '<img src="styles/legend/Farmacias_9.png" /> Farmacias'
            });
var format_Plazas_y_Parques_10 = new ol.format.GeoJSON();
var features_Plazas_y_Parques_10 = format_Plazas_y_Parques_10.readFeatures(json_Plazas_y_Parques_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plazas_y_Parques_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plazas_y_Parques_10.addFeatures(features_Plazas_y_Parques_10);
var lyr_Plazas_y_Parques_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Plazas_y_Parques_10, 
                style: style_Plazas_y_Parques_10,
                interactive: true,
                title: '<img src="styles/legend/Plazas_y_Parques_10.png" /> Plazas_y_Parques'
            });
var format_Centros_de_Salud_11 = new ol.format.GeoJSON();
var features_Centros_de_Salud_11 = format_Centros_de_Salud_11.readFeatures(json_Centros_de_Salud_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centros_de_Salud_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centros_de_Salud_11.addFeatures(features_Centros_de_Salud_11);
var lyr_Centros_de_Salud_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centros_de_Salud_11, 
                style: style_Centros_de_Salud_11,
                interactive: true,
                title: '<img src="styles/legend/Centros_de_Salud_11.png" /> Centros_de_Salud'
            });
var format_Servicios_Financieros_12 = new ol.format.GeoJSON();
var features_Servicios_Financieros_12 = format_Servicios_Financieros_12.readFeatures(json_Servicios_Financieros_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicios_Financieros_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicios_Financieros_12.addFeatures(features_Servicios_Financieros_12);
var lyr_Servicios_Financieros_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicios_Financieros_12, 
                style: style_Servicios_Financieros_12,
                interactive: true,
                title: '<img src="styles/legend/Servicios_Financieros_12.png" /> Servicios_Financieros'
            });
var format_Modulos_Policiales_13 = new ol.format.GeoJSON();
var features_Modulos_Policiales_13 = format_Modulos_Policiales_13.readFeatures(json_Modulos_Policiales_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Modulos_Policiales_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Modulos_Policiales_13.addFeatures(features_Modulos_Policiales_13);
var lyr_Modulos_Policiales_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Modulos_Policiales_13, 
                style: style_Modulos_Policiales_13,
                interactive: true,
                title: '<img src="styles/legend/Modulos_Policiales_13.png" /> Modulos_Policiales'
            });
var format_Supermercados_14 = new ol.format.GeoJSON();
var features_Supermercados_14 = format_Supermercados_14.readFeatures(json_Supermercados_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermercados_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermercados_14.addFeatures(features_Supermercados_14);
var lyr_Supermercados_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Supermercados_14, 
                style: style_Supermercados_14,
                interactive: true,
                title: '<img src="styles/legend/Supermercados_14.png" /> Supermercados'
            });
var format_Mercados_15 = new ol.format.GeoJSON();
var features_Mercados_15 = format_Mercados_15.readFeatures(json_Mercados_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mercados_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mercados_15.addFeatures(features_Mercados_15);
var lyr_Mercados_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mercados_15, 
                style: style_Mercados_15,
                interactive: true,
                title: '<img src="styles/legend/Mercados_15.png" /> Mercados'
            });
var format_Ferias_16 = new ol.format.GeoJSON();
var features_Ferias_16 = format_Ferias_16.readFeatures(json_Ferias_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferias_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferias_16.addFeatures(features_Ferias_16);
var lyr_Ferias_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ferias_16, 
                style: style_Ferias_16,
                interactive: true,
                title: '<img src="styles/legend/Ferias_16.png" /> Ferias'
            });

lyr_GooglecnNormal_0.setVisible(true);lyr_Vias_1.setVisible(true);lyr_Manzanas_2.setVisible(true);lyr_areas_publicas_3.setVisible(true);lyr_Predios_4.setVisible(true);lyr_Barrios_5.setVisible(true);lyr_Distritos_6.setVisible(true);lyr_Macrodistritos_7.setVisible(true);lyr_Area_de_Trabajo_8.setVisible(true);lyr_Farmacias_9.setVisible(true);lyr_Plazas_y_Parques_10.setVisible(true);lyr_Centros_de_Salud_11.setVisible(true);lyr_Servicios_Financieros_12.setVisible(true);lyr_Modulos_Policiales_13.setVisible(true);lyr_Supermercados_14.setVisible(true);lyr_Mercados_15.setVisible(true);lyr_Ferias_16.setVisible(true);
var layersList = [lyr_GooglecnNormal_0,lyr_Vias_1,lyr_Manzanas_2,lyr_areas_publicas_3,lyr_Predios_4,lyr_Barrios_5,lyr_Distritos_6,lyr_Macrodistritos_7,lyr_Area_de_Trabajo_8,lyr_Farmacias_9,lyr_Plazas_y_Parques_10,lyr_Centros_de_Salud_11,lyr_Servicios_Financieros_12,lyr_Modulos_Policiales_13,lyr_Supermercados_14,lyr_Mercados_15,lyr_Ferias_16];
lyr_Vias_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'GDBSNOVI': 'GDBSNOVI', 'ruteo': 'ruteo', 'Shape_Le_1': 'Shape_Le_1', 'RuteoIDA': 'RuteoIDA', 'Shape_Le_2': 'Shape_Le_2', 'cod_pro': 'cod_pro', 'id_macrodi': 'id_macrodi', 'SHAPE_Le_3': 'SHAPE_Le_3', });
lyr_Manzanas_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gml_id': 'gml_id', 'objectid_1': 'objectid_1', 'shape_leng': 'shape_leng', 'Shape_Le_1': 'Shape_Le_1', 'cod_pro': 'cod_pro', 'id_barrio': 'id_barrio', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', });
lyr_areas_publicas_3.set('fieldAliases', {'tipo': 'tipo', 'nom_ub': 'nom_ub', 'x': 'x', 'y': 'y', 'sup_m2': 'sup_m2', });
lyr_Predios_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Linetype': 'Linetype', 'propietari': 'propietari', 'cod_pro': 'cod_pro', 'id_manzano': 'id_manzano', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Barrios_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gml_id': 'gml_id', 'objectid_1': 'objectid_1', 'nom_otb': 'nom_otb', 'sub_alcald': 'sub_alcald', 'estado': 'estado', 'numero': 'numero', 'distrito': 'distrito', 'codigo': 'codigo', 'shape_leng': 'shape_leng', 'atlas': 'atlas', 'mostrar': 'mostrar', 'correla': 'correla', 'shape_le_1': 'shape_le_1', 'tipo': 'tipo', 'cod_pro': 'cod_pro', 'id_distrit': 'id_distrit', 'SHAPE_Le_2': 'SHAPE_Le_2', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Distritos_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'nombre': 'nombre', 'cod_pro': 'cod_pro', 'id_macrodi': 'id_macrodi', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Macrodistritos_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'nombre': 'nombre', 'cod_pro': 'cod_pro', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Area_de_Trabajo_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'tipo': 'tipo', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Farmacias_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'TELEFONO_1': 'TELEFONO_1', 'TELEFONO_2': 'TELEFONO_2', 'TELEFONO_3': 'TELEFONO_3', 'FAX': 'FAX', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', 'HORARIO_AT': 'HORARIO_AT', 'REV': 'REV', 'CLAVE': 'CLAVE', 'FAR': 'FAR', 'cod_pro': 'cod_pro', 'id_barrios': 'id_barrios', });
lyr_Plazas_y_Parques_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nombre': 'Nombre', 'Zona': 'Zona', 'IdTipo': 'IdTipo', 'Tipo': 'Tipo', 'distrito': 'distrito', 'fechaActua': 'fechaActua', 'cod_pro': 'cod_pro', 'id_distrit': 'id_distrit', });
lyr_Centros_de_Salud_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gml_id': 'gml_id', 'cod_cs_1': 'cod_cs_1', 'establecim': 'establecim', 'idtipoaten': 'idtipoaten', 'ni_at_i': 'ni_at_i', 'idtiposect': 'idtiposect', 'sub__sec': 'sub__sec', 'h__at': 'h__at', 'idnivel': 'idnivel', 'direccion': 'direccion', 'bar_zon': 'bar_zon', 'fuente': 'fuente', 'observacio': 'observacio', 'nombre': 'nombre', 'md': 'md', 'dst': 'dst', 'usuario': 'usuario', 'fechaactua': 'fechaactua', 'observac_1': 'observac_1', 'tipo': 'tipo', 'cod_pro': 'cod_pro', 'id_barrios': 'id_barrios', });
lyr_Servicios_Financieros_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'TELEFONO_1': 'TELEFONO_1', 'TELEFONO_2': 'TELEFONO_2', 'TELEFONO_3': 'TELEFONO_3', 'FAX': 'FAX', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', 'TIPO_OFIC': 'TIPO_OFIC', 'DESCR_OFIC': 'DESCR_OFIC', 'ENCARGADO': 'ENCARGADO', 'FECHA_FUND': 'FECHA_FUND', 'CASILL_OFC': 'CASILL_OFC', 'TARJ_ACEP': 'TARJ_ACEP', 'HORARIO_AT': 'HORARIO_AT', 'EMAIL': 'EMAIL', 'PAG_WEB': 'PAG_WEB', 'SERVICIOS': 'SERVICIOS', 'REV': 'REV', 'CLAVE': 'CLAVE', 'BAN': 'BAN', 'cod_pro': 'cod_pro', 'id_barrio': 'id_barrio', });
lyr_Modulos_Policiales_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nombre': 'Nombre', 'Direccion': 'Direccion', 'Zona': 'Zona', 'Tipo': 'Tipo', 'distrito': 'distrito', 'fechaActua': 'fechaActua', 'cod_pro': 'cod_pro', 'id_distrit': 'id_distrit', });
lyr_Supermercados_14.set('fieldAliases', {'Id': 'Id', 'NOMBRE': 'NOMBRE', 'ZONA': 'ZONA', 'DIRECCION': 'DIRECCION', 'Y': 'Y', 'X': 'X', });
lyr_Mercados_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nombre': 'Nombre', 'Direccion': 'Direccion', 'Municipio': 'Municipio', 'codigo': 'codigo', 'departamen': 'departamen', 'provincia': 'provincia', 'ciudad': 'ciudad', 'cod_pro': 'cod_pro', 'id_barrios': 'id_barrios', });
lyr_Ferias_16.set('fieldAliases', {'Id': 'Id', 'NOMBRE': 'NOMBRE', 'ZONA': 'ZONA', 'DIRECCION': 'DIRECCION', 'Y': 'Y', 'X': 'X', });
lyr_Vias_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'GDBSNOVI': 'TextEdit', 'ruteo': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'RuteoIDA': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'cod_pro': 'TextEdit', 'id_macrodi': 'TextEdit', 'SHAPE_Le_3': 'TextEdit', });
lyr_Manzanas_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'gml_id': 'TextEdit', 'objectid_1': 'TextEdit', 'shape_leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'cod_pro': 'TextEdit', 'id_barrio': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_areas_publicas_3.set('fieldImages', {'tipo': 'TextEdit', 'nom_ub': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'sup_m2': 'TextEdit', });
lyr_Predios_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Linetype': 'TextEdit', 'propietari': 'TextEdit', 'cod_pro': 'TextEdit', 'id_manzano': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Barrios_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'gml_id': 'TextEdit', 'objectid_1': 'TextEdit', 'nom_otb': 'TextEdit', 'sub_alcald': 'TextEdit', 'estado': 'TextEdit', 'numero': 'TextEdit', 'distrito': 'TextEdit', 'codigo': 'TextEdit', 'shape_leng': 'TextEdit', 'atlas': 'TextEdit', 'mostrar': 'TextEdit', 'correla': 'TextEdit', 'shape_le_1': 'TextEdit', 'tipo': 'TextEdit', 'cod_pro': 'TextEdit', 'id_distrit': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Distritos_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'nombre': 'TextEdit', 'cod_pro': 'TextEdit', 'id_macrodi': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Macrodistritos_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'nombre': 'TextEdit', 'cod_pro': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Area_de_Trabajo_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'tipo': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Farmacias_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'TELEFONO_1': 'TextEdit', 'TELEFONO_2': 'TextEdit', 'TELEFONO_3': 'TextEdit', 'FAX': 'TextEdit', 'DIRECCION': 'TextEdit', 'ZONA': 'TextEdit', 'HORARIO_AT': 'TextEdit', 'REV': 'TextEdit', 'CLAVE': 'TextEdit', 'FAR': 'TextEdit', 'cod_pro': 'TextEdit', 'id_barrios': 'TextEdit', });
lyr_Plazas_y_Parques_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nombre': 'TextEdit', 'Zona': 'TextEdit', 'IdTipo': 'TextEdit', 'Tipo': 'TextEdit', 'distrito': 'TextEdit', 'fechaActua': 'TextEdit', 'cod_pro': 'TextEdit', 'id_distrit': 'TextEdit', });
lyr_Centros_de_Salud_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'gml_id': 'TextEdit', 'cod_cs_1': 'TextEdit', 'establecim': 'TextEdit', 'idtipoaten': 'TextEdit', 'ni_at_i': 'TextEdit', 'idtiposect': 'TextEdit', 'sub__sec': 'TextEdit', 'h__at': 'TextEdit', 'idnivel': 'TextEdit', 'direccion': 'TextEdit', 'bar_zon': 'TextEdit', 'fuente': 'TextEdit', 'observacio': 'TextEdit', 'nombre': 'TextEdit', 'md': 'TextEdit', 'dst': 'TextEdit', 'usuario': 'TextEdit', 'fechaactua': 'TextEdit', 'observac_1': 'TextEdit', 'tipo': 'TextEdit', 'cod_pro': 'TextEdit', 'id_barrios': 'TextEdit', });
lyr_Servicios_Financieros_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'TELEFONO_1': 'TextEdit', 'TELEFONO_2': 'TextEdit', 'TELEFONO_3': 'TextEdit', 'FAX': 'TextEdit', 'DIRECCION': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO_OFIC': 'TextEdit', 'DESCR_OFIC': 'TextEdit', 'ENCARGADO': 'TextEdit', 'FECHA_FUND': 'DateTime', 'CASILL_OFC': 'TextEdit', 'TARJ_ACEP': 'TextEdit', 'HORARIO_AT': 'TextEdit', 'EMAIL': 'TextEdit', 'PAG_WEB': 'TextEdit', 'SERVICIOS': 'TextEdit', 'REV': 'TextEdit', 'CLAVE': 'TextEdit', 'BAN': 'TextEdit', 'cod_pro': 'TextEdit', 'id_barrio': 'TextEdit', });
lyr_Modulos_Policiales_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nombre': 'TextEdit', 'Direccion': 'TextEdit', 'Zona': 'TextEdit', 'Tipo': 'TextEdit', 'distrito': 'TextEdit', 'fechaActua': 'TextEdit', 'cod_pro': 'TextEdit', 'id_distrit': 'TextEdit', });
lyr_Supermercados_14.set('fieldImages', {'Id': 'TextEdit', 'NOMBRE': 'TextEdit', 'ZONA': 'TextEdit', 'DIRECCION': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Mercados_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nombre': 'TextEdit', 'Direccion': 'TextEdit', 'Municipio': 'TextEdit', 'codigo': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'ciudad': 'TextEdit', 'cod_pro': 'TextEdit', 'id_barrios': 'TextEdit', });
lyr_Ferias_16.set('fieldImages', {'Id': 'TextEdit', 'NOMBRE': 'TextEdit', 'ZONA': 'TextEdit', 'DIRECCION': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_Vias_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'GDBSNOVI': 'inline label', 'ruteo': 'no label', 'Shape_Le_1': 'no label', 'RuteoIDA': 'no label', 'Shape_Le_2': 'no label', 'cod_pro': 'no label', 'id_macrodi': 'no label', 'SHAPE_Le_3': 'no label', });
lyr_Manzanas_2.set('fieldLabels', {'OBJECTID': 'no label', 'gml_id': 'no label', 'objectid_1': 'no label', 'shape_leng': 'no label', 'Shape_Le_1': 'no label', 'cod_pro': 'no label', 'id_barrio': 'no label', 'SHAPE_Le_2': 'no label', 'SHAPE_Area': 'no label', });
lyr_areas_publicas_3.set('fieldLabels', {'tipo': 'no label', 'nom_ub': 'no label', 'x': 'no label', 'y': 'no label', 'sup_m2': 'no label', });
lyr_Predios_4.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Linetype': 'no label', 'propietari': 'no label', 'cod_pro': 'no label', 'id_manzano': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Barrios_5.set('fieldLabels', {'OBJECTID': 'no label', 'gml_id': 'no label', 'objectid_1': 'no label', 'nom_otb': 'no label', 'sub_alcald': 'no label', 'estado': 'no label', 'numero': 'no label', 'distrito': 'no label', 'codigo': 'no label', 'shape_leng': 'no label', 'atlas': 'no label', 'mostrar': 'no label', 'correla': 'no label', 'shape_le_1': 'no label', 'tipo': 'no label', 'cod_pro': 'no label', 'id_distrit': 'no label', 'SHAPE_Le_2': 'no label', 'SHAPE_Area': 'no label', });
lyr_Distritos_6.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'nombre': 'no label', 'cod_pro': 'no label', 'id_macrodi': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Area': 'no label', });
lyr_Macrodistritos_7.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'nombre': 'no label', 'cod_pro': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Area_de_Trabajo_8.set('fieldLabels', {'OBJECTID': 'no label', 'tipo': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Farmacias_9.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'TELEFONO_1': 'no label', 'TELEFONO_2': 'no label', 'TELEFONO_3': 'no label', 'FAX': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', 'HORARIO_AT': 'no label', 'REV': 'no label', 'CLAVE': 'no label', 'FAR': 'no label', 'cod_pro': 'no label', 'id_barrios': 'no label', });
lyr_Plazas_y_Parques_10.set('fieldLabels', {'OBJECTID': 'no label', 'Nombre': 'no label', 'Zona': 'no label', 'IdTipo': 'no label', 'Tipo': 'no label', 'distrito': 'no label', 'fechaActua': 'no label', 'cod_pro': 'no label', 'id_distrit': 'no label', });
lyr_Centros_de_Salud_11.set('fieldLabels', {'OBJECTID': 'no label', 'gml_id': 'no label', 'cod_cs_1': 'no label', 'establecim': 'no label', 'idtipoaten': 'no label', 'ni_at_i': 'no label', 'idtiposect': 'no label', 'sub__sec': 'no label', 'h__at': 'no label', 'idnivel': 'no label', 'direccion': 'no label', 'bar_zon': 'no label', 'fuente': 'no label', 'observacio': 'no label', 'nombre': 'no label', 'md': 'no label', 'dst': 'no label', 'usuario': 'no label', 'fechaactua': 'no label', 'observac_1': 'no label', 'tipo': 'no label', 'cod_pro': 'no label', 'id_barrios': 'no label', });
lyr_Servicios_Financieros_12.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'TELEFONO_1': 'no label', 'TELEFONO_2': 'no label', 'TELEFONO_3': 'no label', 'FAX': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', 'TIPO_OFIC': 'no label', 'DESCR_OFIC': 'no label', 'ENCARGADO': 'no label', 'FECHA_FUND': 'no label', 'CASILL_OFC': 'no label', 'TARJ_ACEP': 'no label', 'HORARIO_AT': 'no label', 'EMAIL': 'no label', 'PAG_WEB': 'no label', 'SERVICIOS': 'no label', 'REV': 'no label', 'CLAVE': 'no label', 'BAN': 'no label', 'cod_pro': 'no label', 'id_barrio': 'no label', });
lyr_Modulos_Policiales_13.set('fieldLabels', {'OBJECTID': 'no label', 'Nombre': 'no label', 'Direccion': 'no label', 'Zona': 'no label', 'Tipo': 'no label', 'distrito': 'no label', 'fechaActua': 'no label', 'cod_pro': 'no label', 'id_distrit': 'no label', });
lyr_Supermercados_14.set('fieldLabels', {'Id': 'no label', 'NOMBRE': 'inline label', 'ZONA': 'no label', 'DIRECCION': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_Mercados_15.set('fieldLabels', {'OBJECTID': 'no label', 'Nombre': 'inline label', 'Direccion': 'no label', 'Municipio': 'no label', 'codigo': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'ciudad': 'no label', 'cod_pro': 'no label', 'id_barrios': 'no label', });
lyr_Ferias_16.set('fieldLabels', {'Id': 'no label', 'NOMBRE': 'inline label', 'ZONA': 'no label', 'DIRECCION': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_Ferias_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});