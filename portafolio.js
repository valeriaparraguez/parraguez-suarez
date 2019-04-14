// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/VP2.jpg",
    title: "Peluches sensoriales",
    about: "olaboración microemprendimiento Mi Tuti Cuanti, dedicado a productos infantiles en tela.",
}, {
    figure: "media/VP1.jpg",
    title: "Leyendas latinas",
    about: "Página web con mapa que al pasar el mouse muestran diferentes leyendas dependiendo del país.",
}, {
    figure: "media/CP3.jpg",
    title: "Propuestas de Logos",
    about: "Serie de logos para la página Paga Rápido que es un emprendimiento en camino a surgir.",
},{
    figure: "media/VP5.jpg",
    title: "Gatos",
    about: "Ilustracion con técnica de acuarela para ramo.",
}, {
    figure: "media/VP4.jpg",
    title: "Charlotte",
    about: "Ilustración de mascota con técnica de acuarela.",
}, {
    figure: "media/VP3.jpg",
    title: "Acuarela experimental",
    about: "Ilustraciones hechas en acuarela con diferentes materiales y técnicas.",
},{
    figure: "media/CV0.jpg",
    title: "Portada cuaderno personalizado",
    about: "Ilustración y edición de imagen para crear portadas de libretas personalizadas.",
}, {
    figure: "media/CP2.jpg",
    title: "El café de media tarde",
    about: "Ilustración digital de personaje para proyecto de historia ilustrada.",
}, {
    figure: "media/CP6.jpg",
    title: "Blake",
    about: "Ilustración digital del diseño de personaje para historia ilustrada digitalmente.",
},
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h2>' + trabajos[i].title + '</h2>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
