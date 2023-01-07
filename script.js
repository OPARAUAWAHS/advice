var search = document.getElementById("search");
var btn = document.getElementById("click");
var output = document.getElementById("output");
var body = document.getElementById("body");

body.onload = async function () {
    await fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((response) => output.innerText = (response.slip.advice))
}


btn.onclick = async function () {
    if (search.value === "") {
        alert("search field is empty")

    } else {
       await fetch(`https://api.adviceslip.com/advice/search/${search.value}`)
            .then((response) => response.json())
            .then((response) => {
                if (response.message) {
                    alert(response.message.text)
                } else {
                    var res = response.slips[Math.floor(Math.random() * response.slips.length - 1)]
                    output.innerText = (res.advice)
                }
            })
    }
}