const buttons = document.querySelectorAll(".filter-buttons button");

const projects = document.querySelectorAll(".project-entry");


// Get filter from URL
const params = new URLSearchParams(window.location.search);

const urlFilter = params.get("filter");


// Default filter
let currentFilter = urlFilter || "all";



function filterProjects(filter){

    currentFilter = filter;


    buttons.forEach(button => {

        button.classList.remove("active");

        if(button.dataset.filter === filter){

            button.classList.add("active");

        }

    });



    projects.forEach(project => {


        const category = project.dataset.category;


        // Always show empty + button card
        if(project.classList.contains("empty-project")){

            project.style.display="flex";

            return;

        }



        if(filter === "all" || category === filter){

            project.style.display="block";

        }

        else{

            project.style.display="none";

        }


    });

}




buttons.forEach(button => {


    button.addEventListener("click", () => {


        filterProjects(button.dataset.filter);


        // Update URL without refreshing
        history.pushState(
            null,
            "",
            "?filter=" + button.dataset.filter
        );


    });


});



// Apply URL filter on page load
filterProjects(currentFilter);