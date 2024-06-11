// Still in prduction prompt
window.alert("Hey Welcome To My Page, Its Still In Production!");

// This is a toggle that turns from bright to dark mode
const body = document.querySelector("body");
const btn = document.getElementById("btn");

// btn.classList.toggle("active") toggles the active class on the button when it is clicked 
// If the button has the active class, the background and text color of the body are set to dark mode colors
// If the button does not have the active class, the background and text color of the body are set to light mode colors 
// This has inline JS styling 
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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// This is the logic behind the Music list
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// addTask function checks if the input box is empty
// If its not empty, it creates a new list item ("li") with the song's name and appends it to the list container
// Each list item also gets a span with an "X" (\u00d7) for removal 
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

// Toggles the checked class on the list item if it's clicked, marking it as completed
// Removes the list item if the "X" span is clicked
listContainer.addEventListener("click", function(event){
    if(event.target.tagName === "li"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Scrolls the page to the top smoothly when called
function toggleButton(){
    window.scrollTo({top: 0, behavior:'smooth'});
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// If the input is empty, an error message is displayed and form submission is prevented
// If the input is not "yes" or "no" (case insensitive), an error message is displayed and form submission is prevented
// If the input is valid, any existing error message is cleared
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