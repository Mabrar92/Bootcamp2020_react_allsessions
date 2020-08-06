// const somefunction =  () => {
// return ( ( (Math.floor(Math.random()*10) %2 )=== 0) ? true : false )
// }


// function custom_resolve () {return console.log("Success")}
function custom_reject () {return console.log("Falure")}


const prms = new Promise ( (resolve , reject) => {

setTimeout(() => { resolve() }, 1000);

})

prms.then(function first() {

    console.log ('first_then')
    return 2;
}).then(function second (val2) {

        console.log (val2)
        return val2+2;

}).then(function third (val2) {

        console.log (val2)
        return val2+2;

})

prms.catch(custom_reject)

