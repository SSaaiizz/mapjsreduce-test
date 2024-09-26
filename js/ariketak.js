// idatzi hemen zure funtzioak
function ariketa1(zenbakiak){

let z = zenbakiak.map(zenb => {return zenb*2})
return z;
}
function ariketa2(erabiltzaileak){


     let e = erabiltzaileak.map(erab => {return erab.izena + "-k "+ erab.adina + " urte ditu"})
return e;
    }

function ariketa3(zenbakiak){

    let z = zenbakiak.filter(zenb =>{return zenb % 2 ==0} )
return z;
}

function ariketa4(erabiltzaileak){


    let e = erabiltzaileak.filter(erab => {return erab.adina>=18})
return e;
   }

function ariketa5(zenbakiak){

    let z = zenbakiak.reduce((tot,zenb) => tot+zenb,0)
return z;
}

function ariketa6(erabiltzaileak){
    let e = erabiltzaileak.reduce(function (zahar,erab){
    let ad = zahar.adina || 0
        if( ad > erab.adina) return zahar
        else return erab
     }, {}
    )

return e;
   }

   function ariketa7(zenbakiak){

    let z = zenbakiak.filter(zenb =>{return zenb % 2 ==0} ).map(zenb => {return zenb*2}).reduce((tot,zenb) => tot+zenb,0)
return z;
}

function ariketa8(obj){
    let o =obj.reduce(function (lista, ob){
      
        return lista.concat(ob.items)

    },[])
 return o;
}

function ariketa9(erabiltzaileak){
    let e = erabiltzaileak.filter(erab => {return erab.adina>=18}).map(erab => erab.erosketak.reduce((tot,ero) => tot+ero,0)).reduce((ema, etot )=> ema+etot)

return e;
   }

   function ariketa10(students){
    let e = students.map(s => ({ name: s.name, batezbestekoa: s.scores.reduce((a, b) => a + b, 0) / s.scores.length })).reduce((best, s) => s.batezbestekoa > best.batezbestekoa ? s : best)
   
return e;
   }


export {ariketa1, ariketa2, ariketa3, ariketa4, ariketa5, ariketa6, ariketa7, ariketa8, ariketa9, ariketa10}
