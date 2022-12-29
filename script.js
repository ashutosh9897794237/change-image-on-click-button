let heading1 = document.getElementById("heading1");
let img = document.getElementsByTagName("img")[0];
let button = document.getElementsByTagName("button")[0];
let body = document.getElementsByTagName("body")[0];
let countt=0;
let links=["https://source.unsplash.com/featured/300x201","https://img.freepik.com/free-vector/red-devil-face-vector-logo_43623-1006.jpg?w=200","https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"]
function changeBg(){
    img.src=links[countt%links.length];
    countt++;
    body.style.backgroundColor = "black";
}
