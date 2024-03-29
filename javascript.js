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

const addNamesToHTML = (data) => {
  const pokemonNames = data.results.map((pokemon) => {
    const h2Element = document.createElement("h2");
    h2Element.innerHTML = pokemon.name;
    console.log("Name with H2 tag: ", h2Element);
    return h2Element;
  });
  $("#displayedText").html(pokemonNames);
};
