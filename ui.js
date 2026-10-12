

// Skapar en checkmark som används i resultatkolumner
export function createCheckmark() {
    const div = document.createElement('div');
    div.classList.add('checkmark');

    const stem = document.createElement('span');
    stem.classList.add('stem');

    const kick = document.createElement('span');
    kick.classList.add('kick');

    div.appendChild(stem);
    div.appendChild(kick);
    
    return div;
}

// Bygger tabellen med matcher
export function createMatches(data) {
    const table = document.querySelector("#table");

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    data.playedGames.forEach((match, index) => {
        const tr = document.createElement('tr');

        // Radnummer
        const tdIndex = document.createElement('td');
        tdIndex.textContent = index + 1; 
        tr.appendChild(tdIndex);

        // Lagkolumn (med länkar)
        const tdTeams = document.createElement('td');

        const homeTeam = match.teams[0].teamName || "Okänt lag";
        const awayTeam = match.teams[1].teamName || "Okänt lag";
        const homeUrl = match.teams[0].homepage || "#";
        const awayUrl = match.teams[1].homepage || "#";

        const homeLink = document.createElement('a');
        homeLink.href = homeUrl;
        homeLink.textContent = homeTeam;
        homeLink.target = "_blank";

        const awayLink = document.createElement('a');
        awayLink.href = awayUrl;
        awayLink.textContent = awayTeam;
        awayLink.target = "_blank";

        tdTeams.appendChild(homeLink);
        tdTeams.appendChild(document.createTextNode(" -VS- "));
        tdTeams.appendChild(awayLink);

        tr.appendChild(tdTeams);

        // Resultatkolumner (1, X, 2)
        const tdOne = document.createElement('td');
        const tdX = document.createElement('td');
        const tdTwo = document.createElement('td');

        if (match.outcome === "1") {
            tdOne.appendChild(createCheckmark());
        } else if (match.outcome === "X") {
            tdX.appendChild(createCheckmark());
        } else if (match.outcome === "2") {
            tdTwo.appendChild(createCheckmark());
        }

        tr.appendChild(tdOne);
        tr.appendChild(tdX);
        tr.appendChild(tdTwo);

        tbody.appendChild(tr);
    });
}
