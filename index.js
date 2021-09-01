// array of objects
let data = [
    { name: "Matero", age: "30" },
    { name: "Sara", age: "21" },
    { name: "Tim", age: "27" },
    { name: "Joey", age: "34" },
    { name: "Hika", age: "20" }
  ];
  
  // get info's div
  const info = document.querySelector(".info");
  // map the object elements
  let details = data.map((element) => {
    return `<div>${element.name} is ${element.age} years old</div>`;
  });
  // place the object elements to info
  info.innerHTML = details.join("\n");