const keys = document.querySelectorAll(".key");
const volumeSlider = document.querySelector(".volume input");
const toggleLabel = document.querySelector(".toggle-keys input");
let mySound = new Audio(`./key_notes/a.wav`);
const allKeys = []

keys.forEach(key => {
    allKeys.push(key.dataset.k);
    key.addEventListener("click", () => playSound(key.dataset.k));
});
playSound = (key) =>{
    const clickedKey = document.querySelector(`[data-k = "${key}"]`);
    clickedKey.classList.add("active");
    console.log(clickedKey);
    mySound.src = `./key_notes/${key}.wav`;
    mySound.play(key);
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 300);
}
pressHandler = (key) =>{
    if(allKeys.includes(key)){
        playSound(key);
    }
}
volumeHandler =(e)=>{
    mySound.volume = e.target.value;
}
toggleHandler =()=>{
    keys.forEach(key => key.classList.toggle("hide"));
}
document.addEventListener("keydown", (e) => pressHandler(e.key));
volumeSlider.addEventListener("input", (e) => volumeHandler(e))

toggleLabel.addEventListener("click", (e) => toggleHandler(e));

