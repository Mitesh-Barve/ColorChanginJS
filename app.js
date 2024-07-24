let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log("Generate random color");

    let div = document.querySelector("div");
    div.style.backgroundColor = GetRand();  // Call the GetRand function
    console.log("Color updated");
});

function GetRand() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
        
    let color = `rgb(${red},${green},${blue})`;  // Use lowercase 'rgb'
    return color;
}
