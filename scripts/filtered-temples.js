const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Peru",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Salt_Lake_Temple_UT1.jpg?width=400",
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Provo_City_Center_Temple_(35147493446).jpg?width=400",
  },
  {
    templeName: "Kinshasa Democratic Republic of the Congo",
    location: "Kinshasa, Democratic Republic of the Congo",
    dedicated: "2019, April, 14",
    area: 12000,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/dcff55ec15033805eee0a2b55b31adee09b7003f/full/800,/0/default",
  },
];

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");
const album = document.querySelector("#album");
const navLinks = document.querySelectorAll("#navigation a");

function getDedicatedYear(temple) {
  return Number.parseInt(temple.dedicated.split(",")[0], 10);
}

function createTempleCard(temple) {
  const card = document.createElement("section");
  const name = document.createElement("h2");
  const location = document.createElement("p");
  const dedicated = document.createElement("p");
  const area = document.createElement("p");
  const image = document.createElement("img");

  card.classList.add("temple-card");
  name.textContent = temple.templeName;
  location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
  dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
  area.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;
  image.src = temple.imageUrl;
  image.alt = `${temple.templeName} Temple`;
  image.loading = "lazy";
  image.width = 400;
  image.height = 250;

  card.append(name, location, dedicated, area, image);
  return card;
}

function displayTemples(filteredTemples) {
  album.innerHTML = "";
  filteredTemples.forEach((temple) => {
    album.appendChild(createTempleCard(temple));
  });
}

function filterTemples(filter) {
  switch (filter) {
    case "old":
      return temples.filter((temple) => getDedicatedYear(temple) < 1900);
    case "new":
      return temples.filter((temple) => getDedicatedYear(temple) > 2000);
    case "large":
      return temples.filter((temple) => temple.area > 90000);
    case "small":
      return temples.filter((temple) => temple.area < 10000);
    default:
      return temples;
  }
}

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;
displayTemples(temples);

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation",
  );
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navLinks.forEach((navLink) => navLink.removeAttribute("aria-current"));
    link.setAttribute("aria-current", "page");
    displayTemples(filterTemples(link.dataset.filter));
    navigation.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});
