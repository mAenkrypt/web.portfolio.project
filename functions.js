function toggle_visibility(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.toggle-section').forEach(item => {
        item.addEventListener('click', () => {
            const contentId = item.getAttribute('data-target');
            const content = document.getElementById(contentId);
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});