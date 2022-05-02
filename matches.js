// write js code here corresponding to matches.html
var matcharr=JSON.parse(localStorage.getItem("formarr"))
// console.log(matcharr)

function handleFilter(){
    var selected=document.querySelector("#filterVenue").value;
    //console.log(selected);
    var filtered=matcharr.filter(function(elem){
        return elem.pvenue==selected;
    });
   // console.log(filtered)
   displaydata(filtered)
}



var favouritearr=JSON.parse(localStorage.getItem("favourites"))||[]

displaydata(matcharr)

function displaydata(data){
    document.querySelector("tbody").innerHTML=""
    data.forEach(function(elem){
        var tr=document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=elem.pmatchnumber;

        var td2=document.createElement("td")
        td2.innerText=elem.pteamA;

        var td3=document.createElement("td")
        td3.innerText=elem.pteamB;

        var td4=document.createElement("td")
        td4.innerText=elem.pdate;

        var td5=document.createElement("td")
        td5.innerText=elem.pvenue;

        var td6=document.createElement("td")
        td6.innerText="Favourites";
        td6.style.color="red";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            favouritefun(elem)
           window.location.href="favourites.html";
        })



        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    });
}
function favouritefun(elem){
     favouritearr.push(elem)
     localStorage.setItem("favourites",JSON.stringify(favouritearr))
}