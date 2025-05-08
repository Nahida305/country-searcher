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
        