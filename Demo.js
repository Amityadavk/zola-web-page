// console.log("Hello JavaScript");



//Fetch API


// .then .catch method



// fetch("https://reqres.in/api/users?page=2")
// .then(function(res){

//     res.json().then(function(res){
//         console.log(res.data);
//     })
// })
// .catch(function(error){
//     console.log("Hello JavaScript");
//     console.log(err);
// })


// Async Await

// async function request() {
//     var res = await fetch("https://reqres.in/api/users?page=2")
//     var data = await res.json()
//     console.log(data.data);
// }
// request()






// patch

// const data = { name: 'Jane Doe' };

// fetch('https://example.com/api/users/1', {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// })
//     .then(response => response.json())
//     .then(data => console.log('Success:', data))
//     .catch(error => console.error('Error:', error));


// //post

// // const data = { name: 'Jane Doe' };

// fetch('https://example.com/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// })
//     .then(response => response.json())
//     .then(data => console.log('Success:', data))
//     .catch(error => console.error('Error:', error));

// // delete

// fetch('https://example.com/api/users/1', {
//     method: 'DELETE'
// })
//     .then(response => response.json())
//     .then(data => console.log('Success:', data))
//     .catch(error => console.error('Error:', error));







// var library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
// ];

// function compare(a, b) {
//     if (a.title < b.title) {
//         return -1;
//     }
//     if (a.title > b.title) {
//         return 1;
//     }
//     return 0;
// }

// library.sort(compare);
// // console.log(library);




// //  const arr = [1, "test", undefined, null,  5, false, "", 3, NaN];
// // const result = obj.filter(Boolean);   // = > [1, "test", 5, 3]
// // console.log(result);


// // Test Data :
// // indexOn([ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ]

// const arr=["hello","js","World","Amit"];
// // const obj = Object.assign({},arr);
// const obj={...arr}

// console.log(obj);





// debugger;
// const compactObject = val => {
//     const data = Array.isArray(val) ? val.filter(Boolean) : val;
//     return Object.keys(data).reduce(
//       (acc, key) => {
//         const value = data[key];
//         if (Boolean(value))
//           acc[key] = typeof value === 'object' ? compactObject(value) : value;
//         return acc;
//       },
//       Array.isArray(val) ? [] : {}
//     );
//   };
//   const obj = {
//     a: null,
//     b: false,
//     c: true,
//     d: 0,
//     e: 1,
//     f: '',
//     g: 'a',
//     h: [null, false, '', true, 1, 'a'],
//     i: { j: 0, k: false, l: 'a' }
//   };
//   console.log(compactObject(obj));

