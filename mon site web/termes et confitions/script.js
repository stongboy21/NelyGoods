// Afficher la date de mise à jour
document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleDateString("fr-FR");

// Animation de fade-in au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".container").classList.add("show");
});
