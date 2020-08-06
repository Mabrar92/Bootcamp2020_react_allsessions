function apifetch() {

let promise = new Promise ((resolve , reject)=>{
setTimeout(() => { //console.log("New Promise")
       reject()
}, 1000);}
)
return promise;
}

async function asyncjs (){
try {
let data = await apifetch()
console.log(data , "Success !!")

} 

catch (error) {
        console.log("undefined_1")
        
}

}

asyncjs();