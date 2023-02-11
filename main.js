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
const result = document.querySelector(".result");
const result1 = document.querySelector(".result1");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");

let pokemonData = () => {
  // Generate a random number between 1 and 150
  let id = Math.floor(Math.random() * 500) + 1;

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
  let id1 = Math.floor(Math.random() * 500) + 1;
  const finalUrl1 = url1 + id1;

  fetch(finalUrl1)
    .then((response) => response.json())
    .then((data) => {
      generateCard1(data);
    });
};

let pokeName1;
let statAttack1;
let statDefense1;
let statSpecialAttack1;
let statSpecialDefense1;
let statSpeed1;

let generateCard1 = (data) => {
  console.log(data);

  const hp1 = data.stats[0].base_stat;
  console.log(hp1);
  const imgSrc1 = data.sprites.other.home.front_default;
  pokeName1 = data.name[0].toUpperCase() + data.name.slice(1);
  statAttack1 = data.stats[1].base_stat;
  console.log(statAttack1);
  statDefense1 = data.stats[2].base_stat;
  statSpecialAttack1 = data.stats[3].base_stat;
  statSpecialDefense1 = data.stats[4].base_stat;
  statSpeed1 = data.stats[5].base_stat;

  const themeColor1 = typeColor[data.types[0].type.name];
  console.log(themeColor1);

  card1.innerHTML = `
  <h2 class="player">Player 2</h2>
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

let pokeName;
let statAttack;
let statDefense;
let statSpecialAttack;
let statSpecialDefense;
let statSpeed;

// Generate Card
let generateCard = (data) => {
  // Get necessary data and assign it to the variables
  console.log(data);

  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.home.front_default;
  pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  statAttack = data.stats[1].base_stat;
  statDefense = data.stats[2].base_stat;
  statSpecialAttack = data.stats[3].base_stat;
  statSpecialDefense = data.stats[4].base_stat;
  statSpeed = data.stats[5].base_stat;

  // Set themeColor based on Pokemon type
  const themeColor = typeColor[data.types[0].type.name];
  console.log(themeColor);

  card.innerHTML = `
  <h2 class="player">Player 1</h2>
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
    let span1 = document.createElement("span");
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
  card1.querySelectorAll(".types1 span").forEach((typeColor) => {
    typeColor.style.background = color;
    result1.style.background = color;
  });
};

let styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  card.querySelectorAll(".types SPAN").forEach((typeColor) => {
    typeColor.style.background = color;
    result.style.background = color;
  });
};

btn.addEventListener("click", () => {
  pokemonData();
  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
  btn4.disabled = false;
  btn5.disabled = false;
});
btn.addEventListener("click", () => {
  pokemonData1();
  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
  btn4.disabled = false;
  btn5.disabled = false;
});
window.addEventListener("load", pokemonData);
window.addEventListener("load", pokemonData1);

btn.addEventListener("click", () => {
  result.textContent = " ";
  result1.textContent = " ";
});

btn1.addEventListener("click", () => {
  if (statAttack > statAttack1) {
    result.innerHTML = `${pokeName} Won`;
    result1.innerHTML = `${pokeName1} Loose`;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
  } else if (statAttack < statAttack1) {
    result.innerHTML = `${pokeName} Loose`;
    result1.innerHTML = `${pokeName1} Won`;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
  } else if (statAttack === statAttack1) {
    result.innerHTML = "Draw";
    result1.innerHTML = "Draw";
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
  }
});

btn2.addEventListener("click", () => {
  if (statDefense > statDefense1) {
    result.innerHTML = `${pokeName} Won`;
    result1.innerHTML = `${pokeName1} Loose`;
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
  } else if (statDefense < statDefense1) {
    result.innerHTML = `${pokeName} Loose`;
    result1.innerHTML = `${pokeName1} Won`;
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
  } else if (statDefense === statDefense1) {
    result.innerHTML = "Draw";
    result1.innerHTML = "Draw";
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
  }
});

btn3.addEventListener("click", () => {
  if (statSpeed > statSpeed1) {
    result.innerHTML = `${pokeName} Won`;
    result1.innerHTML = `${pokeName1} Loose`;
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
  } else if (statSpeed < statSpeed1) {
    result.innerHTML = `${pokeName} Loose`;
    result1.innerHTML = `${pokeName1} Won`;
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
  } else if (statSpeed === statSpeed1) {
    result.innerHTML = "Draw";
    result1.innerHTML = "Draw";
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
  }
});

btn4.addEventListener("click", () => {
  if (statSpecialAttack > statSpecialAttack1) {
    result.innerHTML = `${pokeName} Won`;
    result1.innerHTML = `${pokeName1} Loose`;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn5.disabled = true;
  } else if (statSpecialAttack < statSpecialAttack1) {
    result.innerHTML = `${pokeName} Loose`;
    result1.innerHTML = `${pokeName1} Won`;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn5.disabled = true;
  } else if (statSpecialAttack === statSpecialAttack1) {
    result.innerHTML = "Draw";
    result1.innerHTML = "Draw";
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn5.disabled = true;
  }
});

btn5.addEventListener("click", () => {
  if (statSpecialDefense > statSpecialDefense1) {
    result.innerHTML = `${pokeName} Won`;
    result1.innerHTML = `${pokeName1} Loose`;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
  } else if (statSpecialDefense < statSpecialDefense1) {
    result.innerHTML = `${pokeName} Loose`;
    result1.innerHTML = `${pokeName1} Won`;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
  } else if (statSpecialDefense === statSpecialDefense1) {
    result.innerHTML = "Draw";
    result1.innerHTML = "Draw";
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
  }
});
