/*
TODO: 
- FIX  the skillsArray string hanging out past the right and left margins when in sm (phone) mode.  Not being responsive.
Possibly do multiple col's within the jumbo-tron so when resizing they break into multiple lines.
- do the ABOUT section
- update all projects. 
- verify Netsol xferred the DNS to dreamhost so larry-volz.com works.


*/



const skillsArray = [
    "CSS", "HTML5", "JavaScript/ES6",  "JQuery", "Bootstrap", "RESTful API's", 
    "AJAX", "PHP", "SQL/PostGreSQL", "REACT", "Python/Flask", "Java", "C/C++", 
    "Arduino/RPi/Iot", "WordPress"];

function skillsString() {
    let x = "";
    for (skills of skillsArray) {
         x += skills   + "\u00A0";
    }
    return x;
}

function randomSkillHighlighted() {
    let rnd = Math.floor(Math.random()*skillsArray.length);
    let x = "";
    let i = 0;
    for (skills of skillsArray) {
        if (i != rnd){
         x += '<span style = "color: white";>' + skills + "</span>\u00A0\u00A0";
        } else {
            x += '<span style = "color: slategray";>' + skills + "</span>\u00A0\u00A0";
        }
        i++;
    }
    // console.log(x);
    i=0;
    return x;
}


  

displaySkillString = () => {

    //document.querySelector("#skillz").innerText = skillsString();

    let skillDisplay = document.querySelector("#skillz");
    skillDisplay.innerHTML = randomSkillHighlighted();

    setInterval(()=>{
        
        // console.log(rnd);

        //output skillz string in jumbotron
        document.querySelector("#skillz").innerHTML = randomSkillHighlighted();
        
    }, 1000);

}


$(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    });
    $('[data-toggle="tooltip"]').tooltip();

  });  
