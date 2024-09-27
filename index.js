const URL = "http://localhost:3000/name";

const getUsers = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log("This is my data:", data);
    // Doing something with the data
  } catch {
    console.log(error);
  }
};

getUsers();

const fetchPost = async () => {
  try {
    let response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("name"),
    });
    let data = await response.json();
    console.log(data); // Do something with the data here!
  } catch (error) {
    console.error("Error:", error);
  }
};

function displayData(data){

// {
//     "id": "3",
//     "link": "https://serviceplan.blog/sp-content/uploads/2018/02/twelve18_street-art_k08.jpg",
//     "name": "Natalie",

 //   "comments": "classic example "
//}
let cardContainer = document.getElementById("cardContainer");
console.log("This is my card container:", cardContainer);

// cardContainer.innerHTML = "";

for (let index = 0; index < data.length; index++) {
  console.log("index:", index, "data:", data[index]);
  let dataName = data[index].name;
}
  cardContainer.innerHTML += `
 `<div class="card my-4 mx-4" style="width: 18rem">
        <img
          class="card-img-top"
          src= ${data.link}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.comment</p>
          <a href="#" id="delete" class="btn btn-primary">delete</a>
        </div>
      </div>`

}