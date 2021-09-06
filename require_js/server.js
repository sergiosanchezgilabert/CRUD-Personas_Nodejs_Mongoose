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