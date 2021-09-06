console.log("Empiezo el programa");
// mod1 es una referencia a todo el fichero mod1.
// Para acceder a los diferentes metodos/variables tendremos que usar mod1.METODO()
const  mod1= require("./mod1");
mod1.pepe();
mod1.love("mod1 .... llamando a mod1.love desde el server.js")
const m=new mod1.miclase();
m.dentrodeMiclase();

console.log(mod1.var1)

const {f_adios,f_hastaluego,xx} = require ("./mod2"); 

f_adios();
f_hastaluego();

console.log(xx)

mod3 = require("./mod3")
console.log("Valor de mod3 -> "+mod3)

console.log('-----------------------')

const v1= require('./                                                                                                                                                                           ')

v1.param1V1()
v1.param2V1('estrellas')
console.log('       Peeeeeerooooooooo')
v1.param2V1('no estrellas')

console.log('       ->'+v1.arrowV1('careful'))
console.log('   O')
console.log(v1.arrowV1())

console.log('-----------------------')

const {saludar}=require ('./v2')

saludar()

/* npm i express */