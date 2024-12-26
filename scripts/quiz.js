let form = document.getElementById("form");

form.addEventListener("submit", function () {
    event.preventDefault();
    let QS = form.Q.value;
    let A = form.A.value;
    let B = form.B.value;
    let C = form.C.value;
    let D = form.D.value;
    let correctOption = form.correctOption.value;
    let obj = { QS, A, B, C, D, correctOption };

    fetch(`${baseURI}/quiz`, {
        method: "POST",
        headers: "content-type: application/json",
        body: {

        }

    })
    alert("Question Created");

})