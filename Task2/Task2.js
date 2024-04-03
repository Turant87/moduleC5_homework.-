const jsonString = `
    {
     "list": [
      {
       "name": "Petr",
       "age": "20",
       "prof": "mechanic"
      },
      {
       "name": "Vova",
       "age": "60",
       "prof": "pilot"
      }
     ]
    }
`

const data = JSON.parse(jsonString);
const list = data.list



const result = list.map(person => ({
    name: person.name,
    age: person.age,
    prof: person.prof
}));

console.log(result)