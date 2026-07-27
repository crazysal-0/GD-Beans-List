fetch("levels.json")
    .then(response => response.json())
    .then(levels => {

        const main = document.querySelector("main");

        levels.forEach(level => {

            main.innerHTML += `
                <div class="level-card">

                    <img src="images/${level.image}">

                    <div class="info">

                        <h2>${level.name}</h2>

                        <p>${level.creator}</p>

                        <span class="difficulty">
                            ${level.difficulty}
                        </span>

                        <p>
                            Victors: ${level.victors.join(", ")}
                        </p>

                    </div>

                </div>
            `;

        });

    });