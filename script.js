function toggleContent() {
    const fullContent = document.getElementById("full-content");
    const readMoreBtn = document.getElementById("read-more-btn");

    if (fullContent.classList.contains("hidden")) {
        fullContent.classList.remove("hidden");
        readMoreBtn.textContent = "Leer menos";
    } else {
        fullContent.classList.add("hidden");
        readMoreBtn.textContent = "Leer más";
    }
}



document.addEventListener("DOMContentLoaded", function() {
    const formElements = document.querySelectorAll("#contactForm input, #contactForm select");

    formElements.forEach(element => {
        element.addEventListener("input", updateTable);
    });

    function updateTable(event) {
        const target = event.target;
        const id = target.id;

        if (id) {
            const cellId = id + "Cell";
            const cell = document.getElementById(cellId);

            if (cell) {
                if (target.type === "checkbox") {
                    updateCheckboxes();
                } else if (target.type === "radio") {
                    cell.textContent = document.querySelector('input[name="contacto"]:checked').value;
                } else {
                    cell.textContent = target.value;
                }
            }
        }
    }

    function updateCheckboxes() {
        const selectedCheckboxes = Array.from(document.querySelectorAll('input[name="suscripcion"]:checked')).map(cb => cb.value);
        document.getElementById("suscripcionCell").textContent = selectedCheckboxes.join(", ");
    }
});
