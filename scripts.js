console.log("Scripts js is running...");

// Fetch JS Docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const link_endpoint_url = "http://localhost:3000/name";

//GET API function - gets the link data from db.json
async function getData() {
  console.log("Getting link data...");

  //Try to run this code
  try {
    const response = await fetch(link_endpoint_url);
    const data = await response.json();
    console.log("This is my data:", data);
    showData(data);
  } catch (error) {
    console.error(error);
  }
}
function showData(data) {
  let card_Container = document.getElementById("cardContainer");
  console.log("This is my card container:", card_Container);

  let myCard = "";

  for (let index = 0; index < data.length; index++) {
    console.log("index:", index, "data:", data[index]);

    myCard += `
        <div class="card my-4 mx-4" style="width: 18rem">
          <img
            class="card-img-top"
            src=${data[index].link}  alt=${data[index].name}
          />
          <div class="card-body">
            <h5 class="card-title">${data[index].name}</h5>
            <p class="card-text">
              ${data[index].comments}
            </p>
            <button href="#" id="delete" class="btn btn-primary">delete</button>
          </div>
        </div>
      `;
  }

  $("#cardContainer").append(myCard);
}

getData();
const fetchDelete = async () => {
  try {
    let response = await fetch(link_endpoint_url + "/" + name, {
      method: "DELETE",
    });
    let data = await response.json();
    console.log(data); // Do something with the data here!
  } catch (error) {
    console.error("Error:", error);
  }
};
var delButton = document.getElementById("delete");
delButtonbutton.addEventListener("click", function (event) {
  alert(event.target);
});
