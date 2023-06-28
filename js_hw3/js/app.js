// Array of menu items
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2021/11/DWELL-Somen-Noodles.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/12/DWELL-Chicken-Pad-Thai.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// Array of button labels
var buttonLabels = ["All", "Korea", "Japan", "China"];

// Get the container for buttons
var buttonsContainer = document.querySelector('#buttons');

// Create buttons and append them to the container
buttonLabels.forEach(function (label) {
  var button = document.createElement("button");
  button.innerHTML = label;
  button.classList.add("btn-item");
  buttonsContainer.appendChild(button);
});

// Event listener for button clicks
buttonsContainer.addEventListener("click", function (event) {
  var button = event.target;
  var label = button.innerHTML;

  // Filter menu items based on the selected category and display them
  if (label === "All") {
    displayMenuItems(menu);
  } else if (label === "Korea") {
    var koreaItems = menu.filter(function (item) {
      return item.category === "Korea";
    });
    displayMenuItems(koreaItems);
  } else if (label === "Japan") {
    var japanItems = menu.filter(function (item) {
      return item.category === "Japan";
    });
    displayMenuItems(japanItems);
  } else if (label === "China") {
    var chinaItems = menu.filter(function (item) {
      return item.category === "China";
    });
    displayMenuItems(chinaItems);
  }
});

// Display menu items when no button is clicked
displayMenuItems(menu);

function displayMenuItems(items) {
  var menuContainer = document.querySelector("#menuContainer");
  menuContainer.innerHTML = ""; // Clear previous menu items

  // Create HTML elements for each menu item and append them to the container
  items.forEach(function (item) {
    var menuItem = document.createElement("div");
    menuItem.classList.add("menu-items");
    menuItem.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="menu-img photo">
      <div class="menu-info">
        <div class="menu-title">
         <h4>${item.title}</h4>
         <h4 class="menu-price">$${item.price}</h4>
        </div>
        <div class="menu-text">${item.desc}</div>
      </div>
    `;
    menuContainer.appendChild(menuItem);
  });
}