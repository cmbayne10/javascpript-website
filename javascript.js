function onPress(inputName) {
  const url = "https://pokeapi.co/api/v2/pokemon";
  $.get(url, (data, status) => {
    if (status === "success") {
      addNamesToHTML(data);
    } else {
      console.log("Status was: ", status);
    }
  });
}

function addNamesToHTML(data) {
  data.results.forEach((pokemon) => {
    const h2Element = document.createElement("h2");
    h2Element.innerHTML = pokemon.name;
    console.log("Name with H2 tag: ", h2Element);
    document.getElementById("displayedText").append(h2Element);
  });
}

const showNames = pokemon => {
  return pokemon.name;
};
