const accordinsData=[
    {
        title:"section 1",
        content:"content of section 1"
    },
    {
        title:"section 2",
        content:"content of section 2"
    },
    {
        title:"section 3",
        content:"content of section 3"
    }
];

document.addEventListener("DOMContentLoaded",function(){
    const accordionContainer = document.querySelector(".accordionContainer");

    accordinsData.forEach((section,index)=>{
        //creating section item
        const sectionItem = document.createElement("div");
        sectionItem.classList.add("accordion-item");
        //creating section header
        const sectionHeader = document.createElement("div");
        sectionHeader.classList.add("accordion-header");
        sectionHeader.textContent = section.title;
        //creating section content
        const sectionContent = document.createElement("div");
        sectionContent.classList.add("accordion-content");
        sectionContent.innerHTML = `<p>${section.content}</p>`;
        //adding section header, content to the section item
        sectionItem.appendChild(sectionHeader);
        sectionItem.appendChild(sectionContent);
        //adding section itemm to the main div
        accordionContainer.appendChild(sectionItem);


        if(index ==0){
            sectionItem.classList.add("active");
            sectionContent.style.display = "block"
        }
    });

    //adding event listener to the accordion div
    accordionContainer.addEventListener("click",function(event){
        //get the closest header of the clicked div
        const header = event.target.closest(".accordion-header");
        if(!header)return;
        //get parent node of the div
        const sectionItem = header.parentNode;
        //get all the divs
        const content = sectionItem.querySelector(".accordion-content");
        //get the active div
        const isActive = sectionItem.classList.contains("active");

        //before adding the div first remove the active class from all
        //the divs
        document.querySelectorAll(".accordion-item").forEach((item)=>{
            item.classList.remove("active") //remove active class 
            item.querySelector(".accordion-content").style.display = "none";
        });

        //if  not active then add the class as active
        if(!isActive){
            sectionItem.classList.add("active");
            content.style.display = "block";
        }
    })
})