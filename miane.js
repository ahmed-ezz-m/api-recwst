// 1 code XMLHttpRequest_______________________________________________
// users-------------
// function uoserpostrcwast() {
//   let poshraspons = new XMLHttpRequest();
//   poshraspons.open("GET", "https://jsonplaceholder.typicode.com/users");
//   poshraspons.responseType = "json";
//   poshraspons.send();
//   poshraspons.onload = function () {
//     if (poshraspons.status >= 200 && poshraspons.status < 300) {
//       let uosers = poshraspons.response;
//       document.getElementById("lest-uoses").innerHTML = "";
//       for (uoser of uosers) {
//         document.getElementById("lest-uoses").innerHTML += `
//       <div class="uose" onclick="clickefnent(${uoser.id}, this)">
//         <h4>${uoser.name}</h4>
//         <p>
//         ${uoser.email}
//         </p>
//     </div>
//     `;
//       }
//     } else {
//       alert`error`;
//     }
//   };
// }
// // postes---------
// function postespostrcwast(userId) {
//   let poshraspons = new XMLHttpRequest();
//   poshraspons.open(
//     "GET",
//     "https://jsonplaceholder.typicode.com/posts?userId=" + userId
//   );
//   poshraspons.responseType = "json";
//   poshraspons.send();
//   poshraspons.onload = function () {
//     if (poshraspons.status >= 200 && poshraspons.status < 300) {
//       let postes = poshraspons.response;
//       document.getElementById("cont-poste").innerHTML = "";
//       for (post of postes) {
//         document.getElementById("cont-poste").innerHTML += `
//           <div id="post">
//           <h5>${post.title}</h5>
//           <p>${post.body}</p>
//         </div>
//           `;
//       }
//     } else {
//       alert`error`;
//     }
//   };
// }

// // clickefent
// function clickefnent(id, el) {
//   postespostrcwast(id);
//   let removeclass = document.getElementsByClassName("border-hover");

//   for (elemant of removeclass) {
//     elemant.classList.remove("border-hover");
//   }
//   el.classList.add("border-hover");
// }

// uoserpostrcwast();
// postespostrcwast(1);

// _________________________________ 2 code fetch______________________________________________________________________
// // users---------
// function uoserpostrcwast() {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//       })
//       .then((uosers) => {
//         document.getElementById("lest-uoses").innerHTML = "";
//         for (uoser of uosers) {
//           document.getElementById("lest-uoses").innerHTML += `
//             <div class="uose" onclick="clickefnent(${uoser.id}, this)">
//               <h4>${uoser.name}</h4>
//               <p>
//               ${uoser.email}
//               </p>
//           </div>
//           `;
//         }

//         resolve();
//       });
//   });
// }

// // poste-----------
// function postespostrcwast(userId) {
//   fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//     })
//     .then((postes) => {
//       document.getElementById("cont-poste").innerHTML = "";
//       for (post of postes) {
//         document.getElementById("cont-poste").innerHTML += `
//         <div id="post">
//         <h5>${post.title}</h5>
//         <p>${post.body}</p>
//       </div>
//         `;
//       }
//     });
// }
// // --------
// function clickefnent(id, el) {
//   postespostrcwast(id);
//   let removeclass = document.getElementsByClassName("border-hover");

//   for (elemant of removeclass) {
//     elemant.classList.remove("border-hover");
//   }
//   el.classList.add("border-hover");
// }

// uoserpostrcwast().then(() => {
//   postespostrcwast(1);
// });

// _________________________ 3 code axios______________________________________________________
// users---------
// function uoserpostrcwast() {
//   return new Promise((resolve, reject) => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         let uosers = response.data;
//         document.getElementById("lest-uoses").innerHTML = "";
//         for (uoser of uosers) {
//           document.getElementById("lest-uoses").innerHTML += `
//           <div class="uose" onclick="clickefnent(${uoser.id}, this)">
//             <h4>${uoser.name}</h4>
//             <p>
//             ${uoser.email}
//             </p>
//         </div>
//         `;
//         }

//         resolve();
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       });
//   });
// }

// // poste-----------
// function postespostrcwast(userId) {
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts?userId=" + userId)
//     .then((response) => {
//       let postes = response.data;
//       document.getElementById("cont-poste").innerHTML = "";
//       for (post of postes) {
//         document.getElementById("cont-poste").innerHTML += `
//       <div id="post">
//       <h5>${post.title}</h5>
//       <p>${post.body}</p>
//     </div>
//       `;
//       }

//       resolve();
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });
// }
// // --------
// function clickefnent(id, el) {
//   postespostrcwast(id);
//   let removeclass = document.getElementsByClassName("border-hover");

//   for (elemant of removeclass) {
//     elemant.classList.remove("border-hover");
//   }
//   el.classList.add("border-hover");
// }

// uoserpostrcwast().then(() => {
//   postespostrcwast(1);
// });

// --------------------------------- 4 async await----------------------------------------------
// users---------
async function uoserpostrcwast() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await response.json();
  let uosers = json;
  document.getElementById("lest-uoses").innerHTML = "";
  for (uoser of uosers) {
    document.getElementById("lest-uoses").innerHTML += `
    <div class="uose" onclick="clickefnent(${uoser.id}, this)">
      <h4>${uoser.name}</h4>
      <p>${uoser.email}</p>
    </div>
  `;
  }
}

// poste-----------
async function postespostrcwast(userId) {
  await uoserpostrcwast();
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );
  let json = await response.json();
  let postes = json;
  document.getElementById("cont-poste").innerHTML = "";
  for (post of postes) {
    document.getElementById("cont-poste").innerHTML += `
    <div id="post">
      <h5>${post.title}</h5>
      <p>${post.body}</p>
    </div>
    `;
  }
}

// --------
function clickefnent(id, el) {
  postespostrcwast(id);
  let removeclass = document.getElementsByClassName("border-hover");

  for (elemant of removeclass) {
    elemant.classList.remove("border-hover");
  }
  el.classList.add("border-hover");
}

postespostrcwast(1);
