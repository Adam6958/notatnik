const poleNotatki = document.getElementById("Notatka");
const przyciskDodaj = document.getElementById("dodaj");
const notes = document.getElementById("notes");

function utworzKarte(tresc) {
  const nowaKarta = document.createElement("div");
  nowaKarta.classList = "notatka";

  const date = new Date();
  const godzina = String(date).slice(15,24)

  nowaKarta.innerHTML = `
    <h3>${tresc}</h3>
    <p>${godzina}</p>
    <p>Autor: Adam</p>
    
    `;

  notes.append(nowaKarta);
}

function probaDodania () {
    const dlugoscTekstu = poleNotatki.value.length;
    if (dlugoscTekstu>=3){
    utworzKarte(poleNotatki.value);
    poleNotatki.value =""; 
}
else {
    alert("tekst jest za krótki");
}
}

przyciskDodaj.onclick = probaDodania;
