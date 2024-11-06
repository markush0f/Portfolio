const workingTechnologies = {
    "languages":[
        {
            src: "/assets/icons/technologies/java.svg",
            alt: "java"
        },
        {
            src: "/assets/icons/technologies/typescript.svg",
            alt: "typescript"
        },
        {
            src: "/assets/icons/technologies/html5.svg",
            alt: "html"
        },
        {
            src: "/assets/icons/technologies/css.svg",
            alt: "css"
        },
    ],
    "frameworks":[
        {
            src: "/assets/images/icons/technologies/angular.svg",
            alt: "angular"
        },
        {
            src: "/assets/images/icons/technologies/spring.svg",
            alt: "spring"
        },
        {
            src: "/assets/images/icons/technologies/tailwind.svg",
            alt: "tailwind",
        },
    ]
};

const knowledgeTechnologies = [
    {
        src: "/assets/images/icons/technologies/github.svg",
        alt: "github"
    },
    {
        src: "/assets/images/icons/technologies/vue.svg",
        alt: "vue"
    },
    {
        src: "/assets/images/icons/technologies/django.svg",
        alt: "django"
    },
    {
        src: "/assets/images/icons/technologies/mysql.svg",
        alt: "mysql"
    },
];

const section = document.getElementById("technologies");

function renderWorkingTechnologies(technologies, type){
    const divWorkingTechnologiesLanguage = document.getElementsByClassName("working-technologies-language");
    
    const addImgs = (div, width) => {
        const divTop = document.createElement("div");
        divTop.classList.add("working-languages-imgs-top");
        const divBottom = document.createElement("div");
        divBottom.classList.add("working-languages-imgs-bottom");
        technologies.forEach((language, index) => {
            const img = document.createElement("img");
            // `working-languages-imgs-top`
            // `working-languages-imgs-bottom`
            img.src = language.src;
            img.alt = language.alt;
            img.style.width = width || "20px";
            
            if (index < 2) {
                divTop.appendChild(img);
            } else {
                divBottom.appendChild(img);                
            }
            
            console.log("Image: ", img);
            
            // div.appendChild(img);
            div[0].appendChild(divTop);
            div[0].appendChild(divBottom);

        });
    };

    addImgs(divWorkingTechnologiesLanguage, "33px");

    
    section.appendChild(divWorkingTechnologiesLanguage);
}
renderWorkingTechnologies(workingTechnologies.languages);

// const divWorkingTechnologiesFramework = document.getElementsByClassName("working-technologies-framework");
// addImgs(divWorkingTechnologiesFramework, "40px");
// const divWorkingTechnologiesDatabase = document.getElementsByClassName("working-technologies-database");
// const divWorkingTechnologiesOthers = document.getElementsByClassName("working-technologies-others");

