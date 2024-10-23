const api ="https://script.google.com/macros/s/AKfycbzP4BH1cbQmhu5L6b9AL3AxRhoJkYrzICdoFZ5vRaRA5-SctbOwkSgBleUDk9kDrFrl/exec"
function saveToGoogleSheet() {
    const inputValue = document.getElementById("myInput").value;
    console.log(inputValue);
    fetch(api, {
        method: "POST",
        mode: 'no-cors',
        body: JSON.stringify({ inputValue: inputValue }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.text())
    .then(data => {
        window.location.href = 'flower.html';
    })
    .catch(error => console.error("Lỗi:", error));
}
