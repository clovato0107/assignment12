console.log("Scripts js is running...");

// Fetch JS Docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const link_endpoint_url = "http://localhost:3000/name";

//GET API function - gets the link data from db.json
async function getData() {
  console.log("Getting link data...");

  //Try to run this code
  try {
    const response = await fetch(link_endpoint_url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    console.log("This is my data:", data);

    // temporary area to mapinpulate the browser's DOM
    //begin

    /*
html card example:

   <div class="card my-4 mx-4" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://serviceplan.blog/sp-content/uploads/2018/02/twelve18_street-art_k07.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
*/

    let cardContainer = document.getElementById("cardContainer");
    console.log("This is my card container:", cardContainer);

    // cardContainer.innerHTML = "";

    for (let index = 0; index < data.length; index++) {
      console.log("index:", index, "data:", data[index]);
      let dataTitle = data[index].title;

      cardContainer.innerHTML += `
        <div class="card my-4 mx-4" style="width: 18rem">
          <img
            class="card-img-top"
            src="https://serviceplan.blog/sp-content/uploads/2018/02/twelve18_street-art_k07.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">${dataTitle}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" id= delete class="btn btn-primary">delete</a>
          </div>
        </div>
      `;
    }

    //end
  } catch (error) {
    //If there is any error at all, it will be caught here and logged.
    console.error("Oh no there was an error!!!!!", error);
  }
}

//POST Request

async function postData(newData) {
  console.log("post data:", newData);
  const response = await fetch(link_endpoint_url, {
    //<-- UPDATE URL TO LOOK TO NAME ENDPOINT
    method: "POST",
    body: JSON.stringify({ newData }),
    headers: {
      "Content-Type": "application/json",
    },
    //other properties would go here...
  });
  console.log("response after post:", response);
  //If successful, run another get request!
  getData();
}

//call the getData function
// this method returns a promise that has not yet been fulfilled.
let linkData = getData();
// console.log("Link Data:", linkData);

// function delete(id)

// http://localhost:3000/link/${id}

let button = document.getElementById("submitButton");
button.addEventListener("click", function (e) {
  e.preventDefault();
  let userName = document.getElementById("name").value;

  console.log(userName);
});

async function onDeleteClick() {
    if(lastCreatedItem === null) {
        console.log("no item created yet to delete")
    } 
    fetch("http://localhost:3000/name" + lastCreatedItem.id, {
        method: "DELETE",   
    })

}
let deleteButtons = document.getElementById("delete");
deleteButtons.addEventListener("click", function (e) {
  e.preventDefault();
  let userName = document.getElementById("name").value;

  console.log(userName);
});


const ENDPOINT_URL ='http://localhost:3000/name'

const getUsers = async () => {
    let response = await fetch (ENDPOINT_URL)
    let data = await response.json()
    console.log(data)
}
 getUsers()
function showData(users){
    let output = document.getElementById()
    output.innnerHTML ='';
    users.forEach((item) =>{
        let userDiv = document.createElement('div');
        let userNameame = document.createElement('h5');
        username =.textContent = item.name;
        let userComment = document.createElement('p');
        userComment.textContent = item.comment;
        let dButton = document.createElement('button');
        dButton.innerHTML = 'Delete';
    })
    
    let button = document.createElement('button')
    button.addEventListener('click', () => {
        deleteUser(item.id)
    });
    users.map((item => {
        user = 
       `<img
          class="card-img-top"
          src="${item.link}"
          alt="Card image cap"
        />
       <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.comment}</p>
        `
        user.append(button)
        user += button
        output.innerHTML += user

    userDiv.appendChild(usesrName);
    userDiv.appendChild(userComment);
    userDiv.appendChild(button);
    output.appendChild(userDiv);
    
    }))
}
function showData(users) {
    users.forEach((item) => {
    });

    const deleteUser = async (id) => {
        let response = await fetch (`${ENDPOINT_URL} ${id}`, {
            method: 'DELETE'
        });
        let data = await response.json();
    console.log(data);
        getUsers();
    }
};
