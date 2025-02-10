var icon = document.querySelector(".toggle_mode");

icon.addEventListener("click" , function() {
    document.querySelector("html").classList.toggle("dark-mood");
    icon.classList.toggle("dark_mood_icon");
    if(document.querySelector("html").classList.contains("dark-mood")) {
        icon.classList.add("fa-moon")
    } else {
        icon.classList.remove("fa-moon")
    }
})

// Animation On Scroll

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.animation');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    checkVisibility(); // initial check
    window.addEventListener('scroll', checkVisibility);
});

let read_more = document.querySelector(".video_section .content p");

read_more.addEventListener("click", function () {
    if (read_more.classList.contains("show")) {
        read_more.style.display = "-webkit-box";
        read_more.style.overflow = "hidden";

        read_more.classList.remove("show");
    } else {
        read_more.style.display = "block";
        read_more.style.overflow = "auto";

        read_more.classList.add("show");
    }
});

function openModal(imgElement) {
    document.getElementById("modal-img").src = imgElement.src;
    document.getElementById("modal").style.display = "flex";
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}