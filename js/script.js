const film = document.getElementById("film");
const next_line  = document.querySelector("#film + li");
const btn_add_img = document.getElementsByClassName("btn")[0];
const btn_increase_img = document.getElementsByClassName("btn")[1];
const btn_decrease_img = document.getElementsByClassName("btn")[2];
const btn_delete_img = document.getElementsByClassName("btn")[3];

film.addEventListener("click", changeBackground);
next_line.addEventListener("click", changeBackground);

btn_add_img.addEventListener("click", function() {
    const img = document.getElementById("new_img");
    img.src = "https://onlineexcursions.com/wp-content/uploads/2020/01/Marmaris-Icmeler-Cleopatra-Island-Boat-Trip-Photo-4.jpg";
    img.width = 500;
    img.height = 500;
    scrollPageDown();
});
btn_increase_img.addEventListener("click", function() {
    const img = document.getElementById("new_img");
    img.width += 50;
    img.height += 50;
    scrollPageDown();

});
btn_decrease_img.addEventListener("click", function() {
    const img = document.getElementById("new_img");
    img.width -= 50;
    img.height -= 50;
    scrollPageDown();
});
btn_delete_img.addEventListener("click", function() {
    const img = document.getElementById("new_img");
    img.src = "";
    img.width = 0;
    img.height = 0;

});
function changeBackground(event){
    const film = event.target;
    film.style.backgroundColor = getRandomColor();
    film.style.color = getRandomColor();
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // Generate a random number and convert to hex
    return `#${randomColor.padStart(6, '0')}`; // Ensure the hex string has 6 characters
}

function  scrollPageDown() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}