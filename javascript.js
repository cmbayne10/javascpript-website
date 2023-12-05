function onPress(inputName) {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    $.get(url,function(data, status){
        if (status === 'success') {
            console.log(data);
            const pokemonNames = data.results.map(pokemon =>  {
            return '<h2>' + pokemon.name + '</h2>'
        }); 
     document.getElementById("displayedText").innerHTML = pokemonNames.join('\n');
        }
    }); 
   

}

function showNames(pokemon) {
    return pokemon.name 
}