// (() => {
//     function updateClock() {
//         const clockContainer = document.querySelector('.clock');
//         clockContainer.innerText = new Date().toLocaleTimeString('uk');
//     }
//     setInterval(updateClock, 1000);
// })();

(() => {
    function updateClock() {
        const clockContainer = document.querySelector('.clock');
        const now = new Date();
        const timeString = now.toLocaleTimeString('uk');
        const dateString = now.toLocaleDateString('uk');
        clockContainer.innerText = `${dateString} ${timeString}`;
    }
    setInterval(updateClock, 1000);
})();
