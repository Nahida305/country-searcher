function search(){
    let input = document.getElementById("search").value;
    let url = `https://restcountries.com/v3.1/name/${input}`;
    fetch(url).then((res) => res.json()).then((data) => displayCountry(data));

}
function displayCountry(data){
    var oldContent = document.getElementById("display");
    oldContent.textContent = "";

    for(var i = 0; i< data.length;i++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = 
        `<div class="country">
            <img src="${data[i].flags.png}" alt="flag">
            <h2>${data[i].name.common}</h2>
            <p>Capital: ${data[i].capital}</p>
            <p>Population: ${data[i].population}</p>
            <p>Region: ${data[i].region}</p>
            <p>Area: ${data[i].area}</p>
            <p>Currency: ${Object.values(data[i].currencies)[0].name}</p>
        </div>`;
        oldContent.appendChild(newDiv);
    }

}