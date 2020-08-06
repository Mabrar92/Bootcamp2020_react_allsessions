console.log ("start")

// async function getapi()
// {
// let api= await fetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log(api)
// const json = await api.json()

// console.log(json)

// }

async function postapi()
{

        const api = await fetch('https://jsonplaceholder.typicode.com/posts',
                {          
                         method: 'POST',
                         body: JSON.stringify({
                                    title: 'Kodesense',
                                    body: 'Javascript',
                                    userId: 1  }),
                         headers: {"Content-type": "application/json; charset=UTF-8"}
                })
        console.log(api,'API')
        const json= await api.json();
        console.log(json , 'json')
}

postapi();