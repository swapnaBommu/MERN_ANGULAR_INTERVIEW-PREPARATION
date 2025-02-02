const boxConfig = [
    {color:"red", width:"33.33%"},
    {color:"blue", width:"33.33%"},
    {color:"green", width:"33.33%"},
    {color:"yellow", width:"70%"},
    {color:"orange", width:"30%"},
    {color:"purple", width:"50%"},
    {color:"black", width:"40%"},
    {color:"pink", width:"10%"}
];

document.addEventListener('DOMContentLoaded', function(){
    const container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);
    
    function renderBoxes(){
        container.innerHTML="";
        boxConfig.forEach((config, index) => {
            const box = document.createElement("div");
            box.className = "box";
            box.style.backgroundColor = config.color;
            box.style.width = config.width;
            
            container.appendChild(box);
        });
        
    }

    container.addEventListener("click", (event) =>{
        const clickedElement = event.target;
        if(clickedElement.classList.contains("box")){
            const index = Array.from(container.children).indexOf(clickedElement);
            const box = boxConfig[index];
            
            alert(`Color of box ${index + 1} is ${box.color} `);
        }
    })
    renderBoxes();

})