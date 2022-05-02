// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",formfun)
var formarr=JSON.parse(localStorage.getItem("formarr"))||[]
function formfun(){
    event.preventDefault()

    var obj={
        pmatchnumber:masaiForm.matchNum.value,
        pteamA:masaiForm.teamA.value,
        pteamB:masaiForm.teamA.value,
        pdate:masaiForm.date.value,  
        pvenue:masaiForm.venue.value,
    };
    formarr.push(obj);
    console.log(formarr);
     
    localStorage.setItem("formarr",JSON.stringify(formarr));

    window.location.href="matches.html";
}