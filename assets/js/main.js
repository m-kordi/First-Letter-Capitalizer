let textValue = document.getElementById("mytext");
let subText = document.getElementById("sub");
let finalText = document.getElementById("transText");

subText.onclick = () =>{
    let oldarr = textValue.value.split(" ")
    let newarr = [];
    for (let i = 0; i < oldarr.length; i++) {
        newarr.push(oldarr[i].charAt(0).toUpperCase() + oldarr[i].slice(1));
        
    }

return finalText.value = newarr.join(" ");
}
