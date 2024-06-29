const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}



// var entry = document.getElementById("entry");
// entry.addEventListener("click,displayDetails");

// var row =1;

// function displayDetails (){
// var product_name = document.getElementById("product_name").value;
// var product_price_original = document.getElementById("product_price_original").value;
// var product_price_discount = document.getElementById("product_price_discount").value;
// var product_image = document.getElementById("product_image").value;
// var product_link= document.getElementById("product_link").value;
// var rating = document.getElementById("rating").value;
// var product_category = document.getElementById("product_category").value;
// var product_id = document.getElementById("product_id").value;

// if (!product_name||!product_price_original||!product_price_discount||!product_image||!product_link||!rating||!product_category||!product_id){
// alert("Please fill all data");
// return;
// }

// var display = document.getElementById("display");

// var newRow = display.insertrow(row);

// var cell1 = newRow.insertCell(0);
// var cell2 = newRow.insertCell(1);
// var cell3 = newRow.insertCell(2);
// var cell4 = newRow.insertCell(3);
// var cell5 = newRow.insertCell(4);
// var cell6 = newRow.insertCell(5);
// var cell7 = newRow.insertCell(6);
// var cell8 = newRow.insertCell(7);

// cell1.innerHTML = product_name;
// cell2.innerHTML = product_price_original;
// cell3.innerHTML = product_price_discount;
// cell4.innerHTML = product_image;
// cell5.innerHTML = product_link;
// cell6.innerHTML = rating;
// cell7.innerHTML = product_category;
// cell8.innerHTML = product_id;

// row++;
// }





