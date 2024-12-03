// let abc =`{
//   "name" :"sanjay",
//   "age" :"22",
//   "location":"chennai",
//   "email":"sanjay@gmail.com"
// }`;
// console.log(abc);
// abc=JSON.parse(abc)// JSON to object
// console.log(abc);
// console.log(JSON.stringify(abc));// object to JSON
//
let userdata;
function APIcall() {
  let data = fetch("https://jsonplaceholder.typicode.com/users");
  let sample = data.then((item) => item.json());
  sample.then((apiValue) => (apiValue.forEach(function (c) {
    console.log(c);
    document.getElementsByClassName("container")[0].innerHTML +=`<div class="box"><h1>name: ${c.name}</h1>
    <h2>username: ${c.username}</h2>
    <h2>email: ${c.email}</h2>
    <h3>phone: ${c.phone}</h3>
    </div>`
  })));
  
  };  

APIcall();
// console.log(userdata);
