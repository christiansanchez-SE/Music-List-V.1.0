// This is a toggle that turns from bright to dark mode
const body = document.querySelector("body");
const btn = document.getElementById("btn");

// btn.classList.toggle("active") toggles the active class on the button when it is clicked 
function toggleBtn() {
    btn.classList.toggle("active");
    if (btn.classList.contains("active")) {
        body.style.background = "rgb(20, 21, 21)";
        body.style.color = "hsl(220, 3%, 81%)";
        body.style.transition = "2s";
    } else {
        body.style.background = "hsl(220, 3%, 81%)";
        body.style.color = "rgb(20, 21, 21)";
        body.style.transition = "2s";
    }
}

// This is the logic behind the Music list
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Add your song!");
    }
    else{
        let li = document.createElement("li");
        li.className = "addList"
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        // This is the X-out button
        span.innerHTML = "\u00d7"
        li.appendChild(span); 
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
});


/////////////////

function toggleButton(){
    window.scrollTo({top: 0, behavior:'smooth'});
}

window.alert("Hey Welcome To My Page, Its Still In Production!");

/////////////

const form = document.getElementById("myForm");
const chooseInput = document.getElementById("choose");
const chooseError = document.getElementById("chooseError");


if (form && chooseInput && chooseError) {
    
    form.addEventListener("submit", function(event) {
        if (!chooseInput.value.trim()) {
            chooseError.textContent = "Please enter your response";
            event.preventDefault(); 
        } else {
            const value = chooseInput.value.trim().toLowerCase(); 
            if (value !== "yes" && value !== "no") {
                chooseError.textContent = "Please enter 'yes' or 'no'";
                event.preventDefault(); 
            } else {
                chooseError.textContent = "";
            }
        }
    });

} else {
    console.error("Error: One or more elements not found!");
}