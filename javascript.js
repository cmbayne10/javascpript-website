function onClick(inputName) {
    document.getElementById("insertedName").innerHTML = "thanks, I'm now overlord of the world HA HA HA";
    const users = [{name: 'Sally'}, {name: 'Jerome'}]
    console.log ('First name in list -----',names[0]);

    const names = ['Sally', 'Jerome']
    const users = [{name: 'Sally'}, {name: 'Jerome'}]

    console.log ('Second name in list of objects -----',users[1].name);
    const url = 'https://pokeai.co/api/v2/pokemon';
    $.get(url,function(data, status){
        if (status === 200) {
console.log(data);            
        }
    }); 
    alert('Hello, ' + insertedName + '!');

}

function showNames(pokemon) {
    return pokemon.name
}