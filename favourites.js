// write js code here corresponding to favourites.html
var favouritearr=JSON.parse(localStorage.getItem("favourites"))||[] 
console.log(favouritearr)
displaydata(favouritearr);

function displaydata(favouritearr){

    favouritearr.forEach(function(elem,index){
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
        td6.innerText="Delete";
        td6.style.color="red";
        td6.style.cursor="pointer";
        td6.setAttribute("class","deletetext");
        td6.addEventListener("click",function(){
          deleteitem(elem,index);
          
        });


        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
function deleteitem(elem,index){
     
    favouritearr.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(favouritearr));
    window.location.reload();
  }