function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>

      <ul>
        ${games}
      </ul>
    </div>
  `
}

function createRound(round, cards) {
  return `
    <section class="round" data-round="${round}">

      <div class="round-badge">
        <span>RODADA</span>
        <strong>${round}</strong>
      </div>

      <div class="round-cards">
        ${cards}
      </div>

    </section>
  `
}


function createGame(player1, hour, player2, score1 = "-", score2 = "-", stadium = "") {

  const player1Name = formatTeamName(player1)
  const player2Name = formatTeamName(player2)

  return `
    <li>

      <div class="flag">
        <img 
          src="assets/icon-${player1}.png" 
          alt="${player1Name}"
          title="${player1Name}"
        >

        <span class="team-name">
          ${player1Name}
        </span>
      </div>

      <div class="match-info">

        <div class="score-box">
          <span>${score1}</span>
          <strong>x</strong>
          <span>${score2}</span>
        </div>

        <small>${hour}</small>

       

      </div>

      <div class="flag">
        <img 
          src="assets/icon-${player2}.png" 
          alt="${player2Name}"
          title="${player2Name}"
        >

        <span class="team-name">
          ${player2Name}
        </span>
      </div>

    </li>
  `
}

function formatTeamName(name) {

  const team = {
    vila: "Vila Nova",
    crb: "CRB",
    ceara: "Ceará",
    bernardo: "São Bernardo",
    operario: "Operário-PR",
    atletico: "Atlético-GO",
    botafogo: "Botafogo-SP",
    fortaleza: "Fortaleza",
    cuiaba: "Cuiabá",
    sport: "Sport",
    avai: "Avaí",
    juventude: "Juventude",
    nautico: "Náutico",
    criciuma: "Criciúma",
    athletic: "Athletic Club-MG",
    ponte: "Ponte Preta",
    goias: "Goiás",
    america: "América-MG",
    novorizontino: "Novorizontino",
    londrina: "Londrina",
  }

  return (
    team[name] ||
    name.charAt(0).toUpperCase() + name.slice(1)
  )
}

/*===================================

JOGOS DA SÉRIE B - 2026

===================================*/

document.querySelector("#cards").innerHTML =

  createRound(
    1,

    createCard(
      "21/03",
      "sábado",

      createGame("vila", "17:00", "crb", 2, 2) +
      createGame("ceara", "18:00", "bernardo", 1, 1) +
      createGame("operario", "18:15", "atletico", 1, 0) +
      createGame("botafogo", "19:15", "fortaleza", 4, 0) +
      createGame("cuiaba", "20:00", "sport", 0, 0)
    ) +

    createCard(
      "22/03",
      "domingo",

      createGame("avai", "16:00", "juventude", 2, 0) +
      createGame("nautico", "16:00", "criciuma", 0, 1) +
      createGame("athletic", "18:00", "ponte", 2, 1) +
      createGame("goias", "18:00", "america", 3, 1) +
      createGame("novorizontino", "20:00", "londrina", 1, 3)
    )
  ) +

  createRound(
  2,

  createCard(
    "31/03",
    "terça",

    createGame("juventude", "18:30", "novorizontino", 0, 0) +
    createGame("fortaleza", "19:00", "cuiaba", 0, 0)
  ) +

  createCard(
    "01/04",
    "quarta",

    createGame("america", "18:00", "botafogo", 1, 2) +
    createGame("londrina", "19:00", "goias", 2, 2) +
    createGame("atletico", "19:00", "nautico", 1, 2) +
    createGame("sport", "19:00", "vila", 1, 1) +
    createGame("ponte", "21:00", "ceara", 1, 1) +
    createGame("criciuma", "21:30", "athletic", 1, 1) +
    createGame("crb", "21:30", "avai", 0, 1)
  ) +

  createCard(
    "02/04",
    "quinta",

    createGame("bernardo", "19:00", "operario", 1, 2)
  )
) +

    createRound(3,

  createCard(
    "04/04",
    "sábado",
    createGame("fortaleza", "16:00", "juventude", 2,1) +
      createGame("nautico", "18:00", "ponte", 1,0) +
      createGame("cuiaba", "18:00", "ceara", 0,2) +
      createGame("vila", "20:00", "atletico", 2,1) +
      createGame("londrina", "20:30", "sport", 1,2) 
    ) +
  createCard(
    "05/04",
    "domingo",
    createGame("avai", "16:00", "operario", 0,0) +
      createGame("novorizontino", "18:00", "crb", 1,1) +
      createGame("athletic", "20:00", "america", 1,1) +
      createGame("botafogo", "20:30", "bernardo", 1,2)
    ) +
  createCard(
    "06/04",
    "segunda",
    createGame("goias", "21:00", "criciuma", 1,0)
  )
  ) +

      createRound(4,

  createCard(
    "10/04",
    "sexta",
    createGame("criciuma", "20:30", "botafogo", 1,0) 
    ) +
  createCard(
    "11/04",
    "sábado",
    createGame("juventude", "16:00", "goias", 2,0) +
      createGame("ponte", "18:00", "vila", 0,1) +
      createGame("sport", "18:00", "avai", 2,2) +
      createGame("ceara", "20:30", "nautico", 1,0)
  ) +
  createCard(
    "12/04",
    "domingo",
    createGame("bernardo", "18:00", "fortaleza", 0,1) +
      createGame("america", "18:00", "novorizontino", 0,3) +
      createGame("operario", "18:00", "cuiaba", 0,0) +
      createGame("crb", "20:00", "athletic", 2,3) +
      createGame("atletico", "20:30", "londrina", 2,1)
  )
  ) +

        createRound(5,

  createCard(
    "18/04",
    "sabado",
    createGame("america", "18:00", "sport", 0,0) +
      createGame("nautico", "18:00", "bernardo", 0,3) +
      createGame("vila", "18:30", "operario", 2,1) +
      createGame("avai", "20:30", "ponte", 1,2) +
      createGame("crb", "20:45", "juventude", 0,1)
    ) +
      createCard(
    "19/04",
    "domingo",
    createGame("botafogo", "16:00", "atletico", 1,1) +
      createGame("londrina", "16:00", "ceara", 0,0) +
      createGame("goias", "18:00", "cuiaba", 0,2) +
      createGame("novorizontino", "20:00", "athletic", 2,1) +
      createGame("fortaleza", "20:00", "criciuma", 3,2)
    )
    ) +

    createRound(6,

    createCard(
    "22/04",
    "quarta",
    createGame("cuiaba", "21:30", "botafogo", 1,1)
    ) +
    createCard(
    "24/04",
    "sexta",
    createGame("ponte", "20:00", "america", 1,0)
    ) +
    createCard(
    "25/04",
    "sabado",
    createGame("sport", "20:30", "novorizontino", 1,0) +
      createGame("juventude", "21:00", "londrina", 1,0) 
    ) +
    createCard(
    "26/04",    
    "domingo",
    createGame("bernardo", "16:00", "goias", 1,0) +
      createGame("operario", "18:00", "fortaleza", 0,0) +
      createGame("ceara", "18:00", "vila", 3,3) +
      createGame("atletico", "20:30", "avai", 2,1) + 
      createGame("criciuma", "20:30", "crb", 3,1)
    ) +
  createCard(
    "27/04",  
    "segunda",
    createGame("athletic", "19:00", "nautico", 0,1)
  )
  ) +

    createRound(7,

  createCard(
    "02/05",
    "sabado",
    createGame("botafogo", "16:00", "nautico", 1,1) +
    createGame("cuiaba", "18:30", "criciuma", 1,1) +
    createGame("fortaleza", "20:30", "goias", 4,1) 
  ) +
  createCard(
    "03/05",
    "domingo",
    createGame("bernardo", "16:00", "ponte", 3,0) +
    createGame("operario", "16:00", "londrina", 3,0) +
    createGame("sport", "18:00", "ceara", 2,0) +
    createGame("atletico", "18:30", "juventude", 0,0) +
    createGame("america", "20:30", "crb", 1,2) +
    createGame("avai", "20:30", "novorizontino", 3,3)
  ) +
  createCard(
    "04/05",
    "segunda",  
    createGame("vila", "20:00", "athletic", 1,1) 
  )
  ) +

    createRound(8,

  createCard(
    "09/05",
    "sábado",
    createGame("goias", "16:00", "vila", 1,0) +
    createGame("athletic", "18:00", "cuiaba", 0,0) +
    createGame("ponte", "18:30", "sport", 1,3) +
    createGame("ceara", "19:00", "atletico", 0,1) +
    createGame("crb", "20:30", "operario", 3,0) +
    createGame("juventude", "21:15", "criciuma", 0,0) 
  ) +
  createCard(
    "10/05",
    "domingo",
    createGame("nautico", "16:00", "america", 4,0) +
    createGame("avai", "18:30", "fortaleza", 1,1) +
    createGame("novorizontino", "20:30", "botafogo", 1,0) 
  ) +
  createCard(
    "11/05",
    "segunda",
    createGame("londrina", "20:30", "bernardo", 1,3) 
  )
  ) +

  createRound(9,

   createCard(  
    "16/05",
    "sábado",
    createGame("bernardo", "16:00", "america", 1,1) +
    createGame("operario", "16:00", "nautico", 2,6) +
    createGame("goias", "18:30", "botafogo", 1,0) +
    createGame("cuiaba", "20:30", "novorizontino", 0,0)
  ) +
  createCard(
    "17/05",
    "domingo",
    createGame("athletic", "16:00", "juventude", 1,1) +
    createGame("vila", "18:00", "avai", 2,0) +
    createGame("ceara", "18:30", "fortaleza", 2,1) +
    createGame("criciuma", "18:30", "atletico", 1,1) +
    createGame("sport", "20:30", "crb", 1,2)
  ) +
    createCard(
    "18/05",
    "segunda",
    createGame("ponte", "19:00", "londrina", 1,4)
    )
  ) +

  createRound(10,

   createCard(
    "22/05",
    "sexta",
    createGame("nautico", "19:00", "cuiaba", 1,0)
  ) +
    createCard(
    "23/05",
    "sábado",
    createGame("novorizontino", "16:00", "ceara", 2,1) +
    createGame("fortaleza", "18:30", "londrina", 3,0) +
    createGame("juventude", "20:30", "sport", 0,1)
  ) +
  createCard(
    "24/05",
    "domingo",
    createGame("atletico", "16:00", "bernardo", 0,1) +
    createGame("crb", "16:30", "ponte", 4,2) +
    createGame("america", "18:30", "vila", 1,2) +
    createGame("avai", "19:00", "goias", 0,2) +
    createGame("operario", "20:30", "criciuma", 1,1)
  ) +
    createCard(
    "25/05",
    "segunda",
    createGame("botafogo", "20:30", "athletic", 1,2)
    )
  ) +
    
    createRound(11,

  createCard(
    "29/05",
    "sexta",
    createGame("juventude", "19:00", "america", 3,0) 
  ) +
   createCard(
    "30/05",
    "sábado",
    createGame("atletico", "16:00", "goias", 1,1) +
    createGame("avai", "16:00", "criciuma", 1,2) +
    createGame("athletic", "18:00", "fortaleza", 1,0) +
    createGame("sport", "20:30", "nautico", 2,0) 
  ) +
  createCard(
    "31/05",
    "domingo",
    createGame("bernardo", "11:00", "novorizontino", 1,1) +
    createGame("londrina", "11:00", "vila", 0,1) +
    createGame("ceara", "16:00", "operario", 1,2) +
    createGame("cuiaba", "20:30", "crb", 2,0) 
  ) +
  createCard(
    "01/06",
    "segunda",
    createGame("ponte", "19:00", "botafogo", 0,0) 
  ) 
) +

  createRound(12,

  createCard(
    "05/06",
    "sexta",
    createGame("operario", "20:00", "juventude", 2,1) 
  ) +
  createCard(
    "06/06",  
    "sábado",
    createGame("criciuma", "11:00", "londrina", 1,0)
  ) +
  createCard(
    "07/06",
    "domingo",
    createGame("crb", "16:00", "bernardo",2,3)
  ) +
    createCard(
    "08/06",
    "segunda",
    createGame("america", "20:00", "atletico",) +
    createGame("vila", "20:00", "botafogo",)
    ) +
    createCard(
    "09/06",
    "terça",  
    createGame("ponte", "19:00", "cuiaba",) +
    createGame("nautico", "19:00", "fortaleza",)
    ) +
    createCard(
    "10/06",  
    "quarta",
    createGame("ceara", "20:00", "avai",) +
    createGame("goias", "20:00", "novorizontino",) +
    createGame("sport", "20:00", "athletic",)
  )
  
     
)

/*===================================

FILTRO DE RODADAS

===================================*/

const roundFilter = document.querySelector("#roundFilter")

roundFilter.addEventListener("change", filterRounds)

function filterRounds() {

  const selectedRound = roundFilter.value

  const rounds = document.querySelectorAll(".round")

  rounds.forEach(round => {

    const roundNumber = round.dataset.round

    if (
      selectedRound === "all" ||
      selectedRound === roundNumber
    ) {

      round.style.display = "block"

    } else {

      round.style.display = "none"
    }
  })
}

/*===================================

MENU

===================================*/

const btnGames =
  document.querySelector("#btnGames")

const btnTable =
  document.querySelector("#btnTable")

const gamesScreen =
  document.querySelector("#gamesScreen")

const tableScreen =
  document.querySelector("#tableScreen")

btnGames.addEventListener("click", () => {

  gamesScreen.classList.remove("hidden")
  tableScreen.classList.add("hidden")

  btnGames.classList.add("active")
  btnTable.classList.remove("active")

})

btnTable.addEventListener("click", () => {

  gamesScreen.classList.add("hidden")
  tableScreen.classList.remove("hidden")

  btnGames.classList.remove("active")
  btnTable.classList.add("active")

})

/* =========================
   CLASSIFICAÇÃO
========================= */

const table = [

{
    team: "São Bernardo",
    pts: 24,
    games: 12,
    wins: 7,
    draws: 3,
    losses: 2,
    sg: 10,
    lastGames: ["win", "draw", "win", "draw", "win"]
  },


  {
    team: "Sport",
    pts: 22,
    games: 11,
    wins: 6,
    draws: 4,
    losses: 1,
    sg: 8,
    lastGames: ["win", "win", "loss", "win", "win"]
  },

  {
    team: "Vila Nova",
    pts: 22,
    games: 11,
    wins: 6,
    draws: 4,
    losses: 1,
    sg: 6,
    lastGames: ["draw", "loss", "win", "win", "win"]
  },

  {
    team: "Criciúma",
    pts: 20,
    games: 12,
    wins: 5,
    draws: 5,
    losses: 2,
    sg: 4,
    lastGames: ["draw", "draw", "draw", "win", "win"]
  },

  {
    team: "Náutico",
    pts: 19,
    games: 11,
    wins: 6,
    draws: 1,
    losses: 4,
    sg: 5,
    lastGames: ["draw", "win", "win", "win", "loss"]
  },

{
    team: "Operário-PR",
    pts: 19,
    games: 12,
    wins: 5,
    draws: 4,
    losses: 3,
    sg: -1,
    lastGames: ["loss", "loss", "draw", "win", "win"]
  },

  {
    team: "Fortaleza",
    pts: 18,
    games: 11,
    wins: 5,
    draws: 3,
    losses: 3,
    sg: 3,
    lastGames: ["win", "draw", "loss", "win", "loss"]
  },

  {
    team: "Goiás",
    pts: 17,
    games: 11,
    wins: 5,
    draws: 2,
    losses: 4,
    sg: -1,
    lastGames: ["loss", "win", "win", "win", "draw"]
  },

  {
    team: "Novorizontino",
    pts: 17,
    games: 11,
    wins: 4,
    draws: 5,
    losses: 2,
    sg: 3,
    lastGames: ["draw", "win", "draw", "win", "draw"]
  },

  {
    team: "Athletic-MG",
    pts: 17,
    games: 11,
    wins: 4,
    draws: 5,
    losses: 2,
    sg: 2,
    lastGames: ["draw", "draw", "draw", "win", "win"]
  },

  {
    team: "Juventude",
    pts: 16,
    games: 12,
    wins: 4,
    draws: 4,
    losses: 4,
    sg: 2,
    lastGames: ["draw", "draw", "loss", "win", "loss"]
  },

    {
    team: "CRB",
    pts: 14,
    games: 12,
    wins: 4,
    draws: 2,
    losses: 6,
    sg: -1,
    lastGames: ["win", "win", "win", "loss", "loss"]
  },

    {
    team: "Ceará",
    pts: 13,
    games: 11,
    wins: 3,
    draws: 4,
    losses: 4,
    sg: -1,
    lastGames: ["loss", "loss", "win", "loss", "loss"]
  },

    {
    team: "Atlético-GO",
    pts: 13,
    games: 11,
    wins: 3,
    draws: 4,
    losses: 4,
    sg: -1,
    lastGames: ["draw", "win", "draw", "loss", "draw"]
  },

    {
    team: "Cuiabá",
    pts: 13,
    games: 11,
    wins: 2,
    draws: 7,
    losses: 2,
    sg: 1,
    lastGames: ["draw", "draw", "draw", "loss", "win"]
  },

    {
    team: "Botafogo-SP",
    pts: 10,
    games: 11,
    wins: 2,
    draws: 4,
    losses: 5,
    sg: 0,
    lastGames: ["draw", "loss", "loss", "loss", "draw"]
  },

    {
    team: "Avaí",
    pts: 10,
    games: 11,
    wins: 2,
    draws: 4,
    losses: 5,
    sg: -4,
    lastGames: ["draw", "draw", "loss", "loss", "loss"]
  },

    {
    team: "Londrina",
    pts: 8,
    games: 12,
    wins: 2,
    draws: 2,
    losses: 8,
    sg: -8,
    lastGames: ["loss", "win", "loss", "loss", "loss"]
  },

    {
    team: "Ponte Preta",
    pts: 8,
    games: 11,
    wins: 2,
    draws: 2,
    losses: 7,
    sg: -11,
    lastGames: ["loss", "loss", "loss", "loss", "draw"]
  },

    {
    team: "América-MG",
    pts: 3,
    games: 11,
    wins: 0,
    draws: 3,
    losses: 8,
    sg: -16,
    lastGames: ["loss", "loss", "draw", "loss", "loss"]
  },


]

function createForm(lastGames) {

  return `
    <div class="form">

      ${lastGames.map(result => `

        <span
          class="${result}"
          title="${
            result === "win"
              ? "Vitória"
              : result === "draw"
              ? "Empate"
              : "Derrota"
          }"
        ></span>

      `).join("")}

    </div>
  `
}

function renderTable() {

  const classificationTable =
    document.querySelector("#classificationTable")

  classificationTable.innerHTML = ""

  table.forEach((team, index) => {

    classificationTable.innerHTML += `

<tr>

  <td class="position">
    ${index + 1}
  </td>

  <td class="team-column">
    ${team.team}
  </td>

  <td class="points">
    ${team.pts}
  </td>

  <td>${team.games}</td>

  <td>${team.wins}</td>

  <td>${team.draws}</td>

  <td>${team.losses}</td>

  <td>${team.sg ?? 0}</td>

  <td>
    ${createForm(team.lastGames || [])}
  </td>

</tr>

`
  })
}

renderTable()

/* =========================
   SERVICE WORKER
========================= */

if ("serviceWorker" in navigator) {

  navigator.serviceWorker
    .register("./service-worker.js")

    .then(() => {
      console.log("Service Worker registrado")
    })
}

/* =========================
   API AO VIVO
========================= */

async function getLiveGames() {

  const response = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
    {

      method: "GET",

      headers: {

        "X-RapidAPI-Key": "SUA_CHAVE_API",

        "X-RapidAPI-Host":
          "api-football-v1.p.rapidapi.com"

      }
    }
  )

  const data = await response.json()

  console.log(data)
}