var DADOS;

window.addEventListener("load", () => {
    fetch("../data/data.json")
        .then(response => { return response.json(); })
        .then(data => {
            DADOS = data;

            for (i = 0; i < Object.values(DADOS).length; i++) {
                var dayLevel = document.getElementById(Object.values(DADOS)[i].day + '-level');
                dayLevel.style.height = parseInt(Object.values(DADOS)[i].amount) * 3 + 'px';

                if (parseInt(Object.values(DADOS)[i].amount) >= 50) {
                    dayLevel.style.backgroundColor = 'var(--softRed)';
                }/* 
                else {
                    dayLevel.style.backgroundColor = 'var(--cyan)';
                } */
            }
            return DADOS;
        })
});

function showPrice(day) {
    var valuePopup = document.getElementById(day + '-value');
    valuePopup.classList.add("show");

    for (i = 0; i < DADOS.length; i++) {
        if (DADOS[i].day == day) {
            valuePopup.innerText = `$ ${DADOS[i].amount}`;
        }
    }
}

function hidePrice(day) {
    var valuePopup = document.getElementById(day + '-value');
    valuePopup.classList.remove("show");
}