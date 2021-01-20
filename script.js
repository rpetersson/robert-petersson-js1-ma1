//question 1
const cat = {
    complain : function meow() {
        console.log("Meow!");
}
}

//question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//question 3

heading.style.fontSize = "2em";

//question 4

heading.classList.add("subheading");

//question 5

paragrahps = document.querySelectorAll("p")

for (i of paragrahps){
    i.style.color = "red";
}

//OR

for (i = 0; i < paragrahps.length; i++){
    paragrahps[i].style.color = "red";

}