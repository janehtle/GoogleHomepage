const tomFisk = document.getElementById("art-cred");

tomFisk.addEventListener("click", function() {
    window.open("https://www.pexels.com/@tomfisk/highlights/", "_blank")
});


const myGithub = document.getElementById("github-shortcut");

myGithub.addEventListener("click", function() {
    window.open("https://github.com/janehtle", "_blank")
});


const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  const searchInput = event.target.searchInput.value;    //targets the value of #searchInput and assigns it to searchInput in JS
    const url = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
    window.open(url, "_blank");
});

/* ... ("keydown", (event) => {
    if (event.key === "Enter")
}); */

/*form.addEventListener("submit", (event) => {
    const userInput = event.target.searchInput.value;
    alert(`Searching results for ${userInput}`);
}); */


