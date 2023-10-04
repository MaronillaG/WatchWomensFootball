const dateObject = new Date();

const day = dateObject.getDate();
const month = dateObject.getMonth() + 1; // +1 because it will be zero indexed i.e. 0-11
// const year = dateObject.getFullYear();

// let today = `Today's Date: ${day}-${month}-${year}`;
// let showDate = document.querySelector('#date');
// showDate.innerText = today;
// console.log(showDate)

// Pulling Data from json to display fixtures, date and kickoff time. This data is used to populate cards.

const cardContainer = document.querySelector('.card-container')

function getInfo() { // created a function to pull data
    fetch("./fixtures.json") // returns a promise so .then is used to handle the resulting response
        .then(response => response.json()) // parsing json data to readable js object for this function
        .then(data => { // accessing the js array of objects
            data.forEach( fixtures => {  // my data is structured by football match so for each object named 'fixture' i will create and insert a new card in the HTML
                const cardEl = document.createElement('div');
                cardEl.classList.add('card');
                cardEl.innerHTML = `
                    <p class="card-date">${fixtures.match_date}</p>
                    <p class="card-ko">${fixtures.kick_off}</p>
                    <span class="home">${fixtures.home_team.home_team_name}</span><span> vs </span><span class="away">${fixtures.away_team.away_team_name}</span>
                    `;
                cardContainer.appendChild(cardEl);
                });
            })
}
getInfo();
