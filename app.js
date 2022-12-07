var adviceId = document.getElementById("advice-id"),
    adviceIdTexts = document.querySelector(".advice-id-texts"),
    diceBtn = document.querySelector(".dice"),
    container = document.querySelector(".container");


diceBtn.addEventListener("click", function(){
    skew();
    getAdvice();
});

window.onload = getAdvice;

function getAdvice(){
    var url = "https://api.adviceslip.com/advice";
    fetch(url)
    .then(data => data.json())
    .then(texts => {
        adviceId.innerText = texts.slip.id;
        adviceIdTexts.innerText = texts.slip.advice;
    })
    .catch(error => {
        console.log(error);
    });
}

function skew(){
    if(container.classList.contains("skew")){
        container.classList.remove("skew");
    }
    else{
        container.classList.add("skew");
    }
}
