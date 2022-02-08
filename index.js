let imgValue;
let linkValue;
let bannersData = [];

function updateInputValues() {
  imgValue = document.getElementById("img").value;
  linkValue = document.getElementById("link").value;
}

function createNewBanner(element_id, redirect_link, banner_img) {
  let div_element = document.getElementById(element_id);

  let link = document.createElement("a");
  link.setAttribute("href", redirect_link);
  link.setAttribute("target", "_blank");

  let img = document.createElement("img");
  img.width = 320;
  img.height = 320;
  img.setAttribute("src", banner_img);

  link.appendChild(img);

  div_element.appendChild(link);
}

function pushToBannersData(redirect_link, banner_img){
    bannersData.push({ banner_img, redirect_link });
}

function save() {
  localStorage.setItem("banners-data", JSON.stringify(bannersData));
}

function clearLocalStorage() {
  localStorage.removeItem("banners-data");
}

function displayData() {
  bannersData = JSON.parse(localStorage.getItem("banners-data")) || []; 
  bannersData.forEach((element) => {
    createNewBanner("banners-list", element.redirect_link, element.banner_img);
  });
}
