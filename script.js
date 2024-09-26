function toggleSection(sectionId) {
    var content = document.querySelector(`#${sectionId} .content`);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}