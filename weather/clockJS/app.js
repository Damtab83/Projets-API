
let myTimer = setInterval(() => {
    let t = new Date();
    const time = document.querySelector("#time");
    let hour = t.getHours();
    let minute = t.getMinutes();
    let second = t.getSeconds();

    time.textContent = `${hour} : ${minute} : ${second}`;

}, 1000);
