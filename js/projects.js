const projects  = [
    {
        name: "ChatAndThrow",
        url: "https://github.com/MarkusAbramian/Portfolio",
        description: "Es una app de mensajería segura que permite crear y gestionar chats privados con los contactos que elijas. Puedes iniciar y mantener múltiples conversaciones simultáneamente y eliminarlas cuando desees.",
        img: "/assets/images/ChatAndThrow.png",
        technologies: [
            {
                src: "/assets/icons/technologies/angular.svg",
                alt: "angular"
            },
            {
                src: "/assets/icons/technologies/spring.svg",
                alt: "spring"
            },
            {
                src: "/assets/icons/technologies/mongodb (1).svg",
                alt: "mongodb"
            },
            // {
            //     src: "/assets/images/icons/technologies/github.svg",
            //     alt: "github"
            // }
        ],
    },
    {
        name: "TrainTrack",
        url: "https://github.com/MarkusAbramian/Portfolio",
        description: "Ofrece una ventana transparente al mundo deportivo de los niños. Los padres pueden seguir de cerca los progresos de sus hijos a través de estadísticas actualizadas, información sobre próximos eventos y un sistema de mensajería.",
        img:"/assets/images/TrainTrack.png",
        technologies: [
            {
                src: "/assets/icons/technologies/vue.svg",
                alt: "vue"
            },
            {
                src: "/assets/icons/technologies/django.svg",
                alt: "django"
            },
            {
                src: "/assets/icons/technologies/mysql.svg",
                alt: "mysql"
            },
            // {
            //     src: "/assets/images/icons/technologies/github.svg",
            //     alt: "github"
            // }
        ],
    },

];

const sectionProjects = document.getElementById("projects");
projects.forEach((project, index) => {
    const side = index % 2 === 0 ? "left" : "right";
    const article = document.createElement("article");
    article.classList.add(`project-${side}`);

    const h3ProjectName = document.createElement("h3");
    h3ProjectName.textContent = project.name;
    h3ProjectName.classList.add(`project-name-${side}`);

    const pProjectDescription = document.createElement("h4");
    pProjectDescription.textContent = project.description;
    pProjectDescription.classList.add(`project-description-${side}`);

    const imgProject = document.createElement("img");
    imgProject.src = project.img;
    imgProject.classList.add(`project-img-${side}`);
    article.appendChild(imgProject);


    const projectTechnologies = document.createElement("div");
    projectTechnologies.classList.add(`technologies-project-${side}`);
    const projectTechnologiesImgs = document.createElement("div");
    projectTechnologiesImgs.classList.add(`technologies-project-imgs-${side}`);

    project.technologies.forEach(tech => {
        const img = document.createElement("img");
        img.src = tech.src;
        img.alt = tech.alt;

        if (tech.alt === "mongodb") {
            img.classList.add("mongodb");
        }
        img.classList.add("technology-img");
        projectTechnologiesImgs.appendChild(img);
    });

    projectTechnologies.appendChild(projectTechnologiesImgs);

    const projectLink = document.createElement("a");
    projectLink.href = project.url;
    projectLink.textContent = "Ver proyecto";
    projectLink.style.fontWeight = "bold";
    projectLink.style.fontSize = "18px";
    projectLink.target = "_blank";
    projectLink.classList.add(`project-link-${side}`);
    projectTechnologies.appendChild(projectLink);
    
    const divProjectInfo = document.createElement("div");
    divProjectInfo.classList.add(`project-info-${side}`);
    divProjectInfo.appendChild(h3ProjectName);
    divProjectInfo.appendChild(pProjectDescription);
    
    article.appendChild(divProjectInfo);
    article.appendChild(projectTechnologies);
    sectionProjects.appendChild(article);
});



// Que en la imagen salga el logo, pero al hacer hover aparece el fondo del proyecto.
