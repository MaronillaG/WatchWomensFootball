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
                const dateString = fixtures.match_date + ' ' + fixtures.kick_off;
                const matchDate = new Date(dateString); // converts json date to a date object for manipulating.
                const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
                const dayIndex = matchDate.getDay();
                const dayOfWeek = weekDays[dayIndex]; // display day in letters instead of the number in the week

                let time = dateString.split(/[\s:+]/).slice(1,-1);
                console.log(matchDate)
                const [gmtHour, gmtMin] = time
                matchDate.setUTCHours(gmtHour, gmtMin);
                console.log(matchDate)

                const cardEl = document.createElement('div');

                cardEl.classList.add('card');
                cardEl.innerHTML = `
                    <div class='fixture-wrapper'>
                        <div class='date-container'>
                            <p class="card-day date" >${dayOfWeek}</p>
                            <p class="card-date date">${matchDate.getDate()}</p>
                        </div>
                        <p class="card-ko time">00:00</p>
                        <div class="game">
                            <span class="home">${fixtures.home_team.home_team_name}</span>
                            <span class='vs'> vs </span>
                            <span class="away">${fixtures.away_team.away_team_name}</span>
                        </div>
                    </div>
                    <div class='channels'>
                        <p class='tag'>BBC 2</p>
                        <pclass='tag'>W-Sport</p>
                    </div>
                    `;
                cardContainer.appendChild(cardEl);
                });
            })
}
getInfo();
