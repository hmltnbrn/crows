var items = document.querySelectorAll('.add-to-cart');

items.forEach(el => el.addEventListener('click', event => {
  const local = JSON.parse(localStorage.getItem("cart")) || {};
  const parent = event.target.parentElement;
  const id = parent.getAttribute("data-item-id");
  const quantity = local[id] ? local[id]["quantity"] += 1 : 1;
  local[id] = { id, quantity, ...extraDetails[id] };
  localStorage.setItem("cart", JSON.stringify(local));
  alert(`${extraDetails[id]["name"]} added to cart`)
}));

const extraDetails = {
  "09f8d37e": {
    name: "Snow Crow",
    price: 250,
    categories: ["Bird", "Crow", "Cold"],
    on_sale: true,
    available: true,
    msrp: 300,
    color: "Black",
    brand: "Crow",
    size: "XXXL",
    subscription: false,
    review_score: 10
  },
  "09f8d5b8": {
    name: "Sky Crow",
    price: 300,
    categories: ["Bird", "Crow", "Air"],
    on_sale: false,
    available: true,
    msrp: 300,
    color: "Black",
    brand: "Crow",
    size: "XXXS",
    subscription: false,
    review_score: 9
  },
  "09f8d90a": {
    name: "Canyon Crow",
    price: 500,
    categories: ["Bird", "Crow", "Hot"],
    on_sale: false,
    available: true,
    msrp: 500,
    color: "Black",
    brand: "Crow",
    size: "M",
    subscription: false,
    review_score: 11
  },
  "09f8d9e6": {
    name: "Crow House",
    price: 5,
    categories: ["Bird", "Crow", "House"],
    on_sale: false,
    available: true,
    msrp: 5,
    color: "Multicolored",
    brand: "Birdhouse Inc",
    size: "M",
    subscription: false,
    review_score: 6
  },
  "09f8daa4": {
    name: "Crow Stories",
    price: 3,
    categories: ["Bird", "Crow", "Books"],
    on_sale: true,
    available: true,
    msrp: 5,
    color: "Multicolored",
    brand: "BooksRUs",
    size: "S",
    subscription: false,
    review_score: 10
  },
  "09f8db58": {
    name: "Crow Feed",
    price: 2,
    categories: ["Bird", "Crow", "Food"],
    on_sale: false,
    available: true,
    msrp: 2,
    color: "Gray",
    brand: "Food Inc",
    size: "XXXXXXXXS",
    subscription: false,
    review_score: 1
  }
}
