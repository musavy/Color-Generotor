const input=document.querySelector('input');
const arry = [];

const rgbChen = () => {
    let r = Math.floor(Math.random() * 0xff).toString(16);
    let g = Math.floor(Math.random() * 0xff).toString(16);
    let b = Math.floor(Math.random() * 0xff).toString(16);
    r = r.length === 2 ? r : "0" + r;
    g = g.length === 2 ? g : "0" + g;
    b = b.length === 2 ? b : "0" + b;
    
    return `#${r}${g}${b}`;
};
/*  console.log(rgbChen); */

function RGB() {
    const headerRgb = document.querySelector(".data");
    headerRgb.innerHTML = "";
    for (let i = 0; i < input.value; i++) {
        let color = rgbChen();
        arry.push(color);
        console.log(color);
    }
    showColors();
}

function showColors() {
    const headerRgb = document.querySelector(".data");
    headerRgb.innerHTML = "";
    for (let i = 0; i < arry.length; i++) {
        let box = document.createElement("div");
        box.setAttribute("class", "Colorbox");
        let span = document.createElement("span");
        let btn = document.createElement("button");
        btn.textContent = "Copy";
        box.style.background = arry[i];
        box.appendChild(span);
        /*  box.textContent = arry[i]; */
        span.textContent = arry[i];
        
        input.addEventListener("keyup", function(e) {
            if (e.keyCode === 13) {
                RGB();
            }
            e.preventDefault();
        });
        
        
        btn.addEventListener("click", (e) => {
            try {
        var range = document.createRange();
        range.selectNodeContents(span);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      } catch (error) {
        console.log(error);
      }
      document.execCommand("copy");
    });
    box.appendChild(btn);
    headerRgb.appendChild(box);
  }
}
