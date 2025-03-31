function display(event) {
    event.preventDefault()
    document.getElementById("test").innerHTML = document.getElementById("text").value;
}