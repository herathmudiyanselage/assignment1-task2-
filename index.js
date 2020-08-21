maleProfile = ["Prashan", "Chamod", "Nuwan", "Raveen", "Seth"]
maleAge = [30, 45, 22, 34, 28]
maleImg = ["", "", "", "", ""]

femaleProfile = ["Emily", "Sheril", "Rozy", "Nonnee", "Tracy"]
femaleAge = [18, 25, 36, 19, 30]
femaleImg = ["", "", "", "", ""]

let profilesHTML = '<div class="heading">Tinder</div> <div class="container><img src="img1.jpg" alt="image description"/></div> \
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\
  <div class="carousel-inner">\
    <div class="carousel-item active">\
      <img src="images/6.jpg" class="d-block w-100" alt="...">\
    </div>\
    <div class="carousel-item">\
      <img src="images/7.jpg" class="d-block w-100" alt="...">\
    </div>\
    <div class="carousel-item">\
      <img src="images/8.jpg" class="d-block w-100" alt="...">\
    </div>\
    <div class="carousel-item">\
      <img src="images/9.jpg" class="d-block w-100" alt="...">\
    </div>\
    <div class="carousel-item">\
      <img src="images/10.jpg" class="d-block w-100" alt="...">\
    </div>\
  </div>\
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">\
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
    <span class="sr-only">Previous</span>\
  </a>\
  <a class="carousel-control-next" href="match.html">\
    <span class="carousel-control-next-icon" aria-hidden="true"></span>\
    <span class="sr-only">Next</span>\
  </a>\
</div>\
'

console.log("Hello")

function submitData() {
    console.log("In")
    let name = document.getElementById("name");
    let profilePic = document.querySelector("#photo");
    let mainDiv = document.querySelector(".main");
    mainDiv.innerHTML = profilesHTML;
    console.log(profilePic.value);
    next = document.querySelector(".carousel-control-next")
    pp = document.querySelector(".pp")
    pp.value = profilePic;
    
}

