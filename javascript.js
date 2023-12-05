function onPress(inputName) {
    document.getElementById("displayedText").innerHTML = "thanks, I'm now overlord of the world HA HA HA";
    const user = {name: ' bob'};
    console.log ('Hello' + user.name);

    const names = ['Sally', 'jerome']
    const users = [{name: 'Sally'}, {name: 'jerome'}];
    console.log('First name in list -----',names[0]);

    console.log ('Second name in list of objects -----',users[1].name);
    const url = 'https://pokeapi.co/api/v2/pokemon';
    $.get(url,function(data, status){
        if (status === 'success') {
            const pokemonNames = data.results.map(showNames) 
            console.log(pokemonNames);
            document.getElementById("displayedText").innerHTML = pokemonNames.join('\n');
        }
    }); 
    alert('Hello, ' + inputName + '!');

}

function showNames(pokemon) {
    return pokemon.name 
}