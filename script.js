const submitButton = document.querySelector("#submitButton")

submitButton.addEventListener("click",function(event){
    event.preventDefault();
    console.log("button is clicked");
});