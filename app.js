(function() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
            document.getElementById("coder").src = "assets/coder-purple.svg";
            if(document.body.classList.contains("light-mode")) {
                document.getElementById("coder").src = "assets/coder-pink.svg";
            }
            
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            document.getElementById("coder").src = "assets/coder-pink.svg";
        } else {
            document.getElementById("coder").src = "assets/coder-purple.svg";
        }
        
    });
    document.querySelector(".about-me").addEventListener("click", () => {
        // remove active-btn class from current class
        document.querySelector(".active-btn").classList.remove("active-btn");
        // add active-btn class to about-me section button
        document.querySelector('[data-id = "about"]').classList.add("active-btn");
        // remove active class from active_element
        document.querySelector(".active").classList.remove("active");
        // add the active class to about-me section
        document.getElementById("about").classList.add("active");

    });
    document.querySelector(".connect-with-me").addEventListener("click", () => {
        document.querySelector(".active-btn").classList.remove("active-btn");
        document.querySelector('[data-id = "contact"]').classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById("contact").classList.add("active");
    })
})();

