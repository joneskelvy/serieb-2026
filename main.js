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

function createGame(player1, hour, player2, score1 = "-", score2 = "-") {

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
    botagogo: "Botafogo-SP",
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

  return team[name] || 
    name.charAt(0).toUpperCase() + name.slice(1)
}

document.querySelector("#cards").innerHTML =
  createCard(
  "21/03",
  "sabado",
  createGame("vila", "17:00", "crb", 2,2) +
  createGame("ceara", "18:00", "bernardo", 1,1) +
  createGame("operario", "18:15", "atletico", 1, 0) +
  createGame("botafogo", "19:15", "fortaleza", 4, 0) +
  createGame("cuiaba", "20:00", "sport", 0,0)
)   +
    createCard(
    "22/03",
    "domingo",
    createGame("avai", "16:00", "juventude", 2, 0) +
      createGame("nautico", "16:00", "criciuma", 0, 1) +
      createGame("athletic", "18:00", "ponte", 2, 1) +
      createGame("goias", "18:00", "america", 3, 1) +
      createGame("novorizontino", "20:00", "londrina", 1, 3)
     ) +
    createCard(
    "31/03",
    "terça",
    createGame("juventude", "18:30", "novorizontino", 0, 0) +
      createGame("fortaleza", "19:00", "cuiaba", 0, 0)
    ) +
  createCard(
    "01/04",
    "quarta",
    createGame("america", "18:00", "botafogo", 1,2) +
      createGame("londrina", "19:00", "goias", 2,2) +
      createGame("atletico", "19:00", "nautico", 1,2) +
      createGame("sport", "19:00", "vila", 1,1) +
      createGame("ponte", "21:00", "ceara", 1,1) +
      createGame("criciuma", "21:30", "athletic", 1,1) +
      createGame("crb", "21:30", "avai", 0, 1) 
    ) +
  createCard(
    "02/04",
    "quinta",
    createGame("bernardo", "19:00", "operario", 1,2)
  ) +
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
  ) +
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
  ) +
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
    ) +
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
  ) +
  createCard(
    "02/05",
    "sabado",
    createGame("botafogo", "16:00", "nautico", 1,1) +
    createGame("cuiaba", "18:30", "criciuma", 1,1) +
    createGame("fortaleza", "20:30", "goias", 4,1) +
    createGame("vila", "21:00", "america", 1,0)
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
  ) +
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
  ) +
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
    createGame("sport", "20:30", "londrina", 1,2)
  ) +
    createCard(
    "18/05",
    "segunda",
    createGame("ponte", "19:00", "londrina", 1,4)
  ) +
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
  ) +
   createCard(
    "29/05",
    "sexta",
    createGame("juventude", "19:00", "america",) 
  ) +
   createCard(
    "30/05",
    "sábado",
    createGame("atletico", "16:00", "goias",) +
    createGame("avai", "16:00", "criciuma",) +
    createGame("athletic", "18:00", "fortaleza",) +
    createGame("sport", "20:30", "nautico",) 
  )




    if ("serviceWorker" in navigator) {

  navigator.serviceWorker
    .register("./service-worker.js")

    .then(() => {
      console.log("Service Worker registrado")
    })

}

async function getLiveGames() {

  const response = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
    {
      method: "GET",

      headers: {
        "X-RapidAPI-Key": "ee4ff7aed956a2b95e3744750f395191",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
      }
    }
  )

  const data = await response.json()

  console.log(data)

}
      