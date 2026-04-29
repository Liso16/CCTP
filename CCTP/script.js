function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display ="block";
}
function openTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(c => c.style.display = 'none');
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).style.display = 'block';
  event.target.classList.add('active');
}
