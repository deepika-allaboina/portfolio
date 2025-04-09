document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        setTimeout(() => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }, 50); // Small delay for a smoother effect
    });

    // Increase cursor size on headings and paragraphs
    document.querySelectorAll("h1, h2, h3, h4, h5, h6, p").forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.style.width = "50px";
            cursor.style.height = "50px";
        });
        element.addEventListener("mouseleave", () => {
            cursor.style.width = "30px";
            cursor.style.height = "30px";
        });
    });

    // Change cursor color on hover over links, buttons, and hover-effect elements
    document.querySelectorAll("a, button, .hover-effect").forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.style.backgroundColor = "black";
        });
        element.addEventListener("mouseleave", () => {
            cursor.style.backgroundColor = "white";
        });
    });
});
