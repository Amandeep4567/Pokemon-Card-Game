// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "4be0d4b77bmshf08173011add6ffp1676b1jsnfed889428788",
//     "X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com",
//   },
// };

// fetch("https://pokemon-go1.p.rapidapi.com/pokemon_evolutions.json", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poisen: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

const url = " https://pokeapi.co/api/v2/pokemon/";
const url1 = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const card1 = document.getElementById("card1");
const btn = document.getElementById("btn");

let pokemonData = () => {
  // Generate a random number between 1 and 150
  let id = Math.floor(Math.random() * 150) + 1;

  // Combine the pokeapi url with pokemon id
  const finalUrl = url + id;

  // Fetch generated URL
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
      //   console.log(data);
    });
};

let pokemonData1 = () => {
  let id1 = Math.floor(Math.random() * 150) + 1;
  const finalUrl1 = url1 + id1;

  fetch(finalUrl1)
    .then((response) => response.json())
    .then((data) => {
      generateCard1(data);
    });
};

let generateCard1 = (data) => {
  console.log(data);

  const hp1 = data.stats[0].base_stat;
  const imgSrc1 = data.sprites.other.dream_world.front_default;
  const pokeName1 = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack1 = data.stats[1].base_stat;
  const statDefense1 = data.stats[2].base_stat;
  const statSpecialAttack1 = data.stats[3].base_stat;
  const statSpecialDefense1 = data.stats[4].base_stat;
  const statSpeed1 = data.stats[5].base_stat;

  const themeColor1 = typeColor[data.types[0].type.name];
  console.log(themeColor1);

  card1.innerHTML = `
  <p class="hp">
                <span>HP</span>
                ${hp1}
            </p>
            <img src=${imgSrc1}>
            <h2 class="poke-name">${pokeName1}</h2>
            <div class="types1">

            </div>
            <div class="stats">
                <div>
                    <h3>${statAttack1}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>${statDefense1}</h3>
                    <p>Defense</p>
                </div>
                <div>
                    <h3>${statSpeed1}</h3>
                    <p>Speed</p>
                </div>
            </div>
            <div class="card_t">
            <div>
                <h3>${statSpecialAttack1}</h3>
                <p>Special Attack</p>
            </div>
            <div>
                <h3>${statSpecialDefense1}</h3>
                <p>Special Defense</p>
            </div>
            </div>
  `;

  appendTypes1(data.types);
  styleCard1(themeColor1);
};

// Generate Card
let generateCard = (data) => {
  // Get necessary data and assign it to the variables
  console.log(data);

  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.home.front_default;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpecialAttack = data.stats[3].base_stat;
  const statSpecialDefense = data.stats[4].base_stat;
  const statSpeed = data.stats[5].base_stat;

  // Set themeColor based on Pokemon type
  const themeColor = typeColor[data.types[0].type.name];
  console.log(themeColor);

  card.innerHTML = `
  <p class="hp">
                <span>HP</span>
                ${hp}
            </p>
            <img src=${imgSrc}>
            <h2 class="poke-name">${pokeName}</h2>
            <div class="types">

            </div>
            <div class="stats">
                <div>
                    <h3>${statAttack}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>${statDefense}</h3>
                    <p>Defense</p>
                </div>
                <div>
                    <h3>${statSpeed}</h3>
                    <p>Speed</p>
                </div>
            </div>
            <div class="card_t">
            <div>
                <h3>${statSpecialAttack}</h3>
                <p>Special Attack</p>
            </div>
            <div>
                <h3>${statSpecialDefense}</h3>
                <p>Special Defense</p>
            </div>
            </div>
  `;

  appendTypes(data.types);
  styleCard(themeColor);
};

let appendTypes1 = (types) => {
  console.log(types);
  types.forEach((item) => {
    let span1 = document.createElement("span1");
    span1.textContent = item.type.name;
    console.log(span1);
    document.querySelector(".types1").appendChild(span1);
  });
};

let appendTypes = (types) => {
  console.log(types);
  types.forEach((item) => {
    let span = document.createElement("SPAN");
    span.textContent = item.type.name;
    console.log(span);
    document.querySelector(".types").appendChild(span);
  });
};

let styleCard1 = (color) => {
  card1.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  card1.querySelectorAll("types1 span1").forEach((typeColor) => {
    typeColor.style.background = color;
  });
};

let styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  card.querySelectorAll(".types SPAN").forEach((typeColor) => {
    typeColor.style.background = color;
  });
};

btn.addEventListener("click", pokemonData);
btn.addEventListener("click", pokemonData1);
window.addEventListener("load", pokemonData);
window.addEventListener("load", pokemonData1);
