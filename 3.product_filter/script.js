let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "white-tshirt.jpeg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "short-skirt.jpeg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "sporty-smartwatch.jpeg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knitted-top.jpeg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "black-leather-jacket.jpg.jpeg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "pink-trousers.jpeg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "brown-jacket.jpeg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "comfy-gray-pants.jpeg",
    },
  ],
};

for (let i of products.data) {
  // create card

  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  let image_container = document.createElement("div");
  image_container.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);

  image_container.appendChild(image);
  card.appendChild(image_container);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");

  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.classList.add("price_h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");

  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");

  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

// search button

document.getElementById("search").addEventListener("click", () => {

  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterProduct("all");
};
