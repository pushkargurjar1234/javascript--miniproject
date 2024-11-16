const btn = document.querySelector("button");
const card = document.querySelector(".card");



const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#8lecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
    };

const url = " https://pokeapi.co/api/v2/pokemon/";

let pokedata = () => {
  const id = Math.floor(Math.random() * 1200) + 1;
  const finalapi = url +id;

  fetch(finalapi)
    .then((raw) => raw.json())
    .then((data) => {
      // console.log(data);
      generatedata(data);
    });
};

let generatedata = (data) => {
  console.log(data);
  const hp = data.stats[0].base_stat;
  const imgsrc = data.sprites.other.dream_world.front_default;
  const pokename = data.name[0].toUpperCase()+data.name.slice(1);
  const statattack = data.stats[1].base_stat;
  console.log(statattack);
  const statdefence = data.stats[2].base_stat;
  const statspeed = data.stats[5].base_stat;
  const themecolor = typeColor[data.types[0].type.name];
  console.log(themecolor);

  card.innerHTML = `
       
        
        <p class="hp">
        <span>hp</span>
        ${hp}</p>

        <img src="${imgsrc}" alt="">
        <div class="poke_name">
            <h1>${pokename}
            </h1>
        </div>
        <div class="types">
          
        </div>
        <div class="status">
          <div>
            <h3>${statattack}</h3>
            <p>Attack</p>
          </div>

          <div>
            <h3>${statdefence}</h3>
            <p>Defence</p>
          </div>

          <div>
            <h3>${statspeed}</h3>
            <p>speed</p>
          </div>
        </div>
     
    `;

    appendTypes(data.types);
    stylecard(themecolor);
};
 
let appendTypes = (types)=>{
    console.log(types);
    types.forEach((item) => {
        let span=document.createElement("SPAN");
        span.textContent=item.type.name;
        document.querySelector(".types").appendChild(span);
    });
};
let stylecard = (color) => {
    console.log(color);
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 40%, #ffffff 40%)`;
    card.querySelectorAll(".types span").forEach(typecolor => {typecolor.style.backgroundColor = color;}
)};





btn.addEventListener("click", pokedata);
window.addEventListener("load", pokedata);
