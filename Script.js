const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteboxes = 9;

const generatePalette = () => {
    container.innerHTML = "";
    for (let i = 0; i < maxPaletteboxes ; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="react-box" style="background: ${randomHex}"></div>
                       <span class="hex-value">${randomHex}</span>`;
    color.addEventListener("click", () => copyColor(color, randomHex));          
    container.appendChild(color);
        }
}

generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Code Copied";
        setTimeout(() => colorElement.innerText = hexVal, 900);
    }).catch(() => alert("Failed to copy code"))
}
refreshBtn.addEventListener("click", generatePalette);