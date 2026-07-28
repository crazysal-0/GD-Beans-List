fetch("list.json")
    .then(response => response.json())
    .then(levels => {

        const main = document.querySelector("main");

        levels.forEach((level, index) => {

            let records = "";

            if (level.records && level.records.length > 0) {
                records = level.records.map(record => `
                    <p>
                        <strong>${record.player}</strong>
                        ${record.progress}
                    </p>
                `).join("");
            } else {
                records = "<p>No records yet.</p>";
            }

            main.innerHTML += `
                <div class="level">

                    <div class="placement">
                        ${index + 1}
                    </div>

                    <div class="level-card">

                        <div class="image-column">
                            <img src="images/${level.image}">
                        </div>

                        <div class="info">

                            <h3>Level Info</h3>

                            <h2>${level.name}</h2>

                            <p>${level.creator}</p>

                            <p>ID: ${level.id}</p>

                        </div>

                        <div class="records">

                            <h3>Records</h3>

                            ${records}

                        </div>

                    </div>

                </div>
            `;

        });

    })
    .catch(error => {
        console.error("Error loading levels:", error);
    });