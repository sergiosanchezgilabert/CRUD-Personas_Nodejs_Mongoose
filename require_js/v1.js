console.log('Version 1')

exports.param1V1=function fPrimeraV1(){
    console.log('       Mi padre es el rey')
}

exports.param2V1=function fSegundaV1(estrellas){
    if(estrellas==='estrellas') console.log('       Y las estrellas son mis hermanas')
    else  console.log('       Y eres un simple ser humano Perro flauta')
}

exports.arrowV1=arrow=(careful)=>{
    return (careful || '        ->*No dejo que te cuiden*')
}