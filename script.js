let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 5000); // 5000 milissegundos = 5 segundos (pode alterar o tempo se quiser)

function nextImage() {
    count++;
    if (count > 3) { // 3 é o número total de slides que você tem
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}








document.addEventListener("DOMContentLoaded", () => {
    const floatingCards = document.querySelectorAll(".floating-card");

    floatingCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            const target = card.getAttribute("data-target");
            const targetRow = document.getElementById(`row-${target}`);
            
            if (targetRow) {
                targetRow.style.boxShadow = "0 0 15px rgba(139, 184, 255, 0.6)";
                targetRow.style.transform = "scale(1.02)";
            }
        });

        card.addEventListener("mouseleave", () => {
            const target = card.getAttribute("data-target");
            const targetRow = document.getElementById(`row-${target}`);
            
            if (targetRow) {
                targetRow.style.boxShadow = "none";
                targetRow.style.transform = "scale(1)";
            }
        });
    });
});















