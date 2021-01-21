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

for (let i of paragrahps){
    i.style.color = "red";
}

//OR

for (let i = 0; i <= paragrahps.length; i++){
    paragrahps[i].style.color = "red";
}

//question 6

resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";

//question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function loopFunction(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }

}

loopFunction(cats)

//question 8

function createCats(cats) {

   let html = []

    for (let c of cats) {
       let newDiv = document.createElement("div"); //Creates a div per Object in Cats.

        let addName = "<h5>" + c.name +"</h5>";
        let addAge = "<p>" + c.age + "</p>";

        if (addAge === "<p>undefined</p>") {
            addAge = "<p>Age Unknown</p>"
        }

        html = html + addName + addAge
    }

return html
}

createCats(cats);

const catContainer = document.querySelector(".cat-container")

catContainer.innerHTML = createCats(cats);
