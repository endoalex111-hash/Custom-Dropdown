const dropdown = document.getElementById("dropdown");
const btn = document.getElementById("dropdownBtn");
const list = document.getElementById("dropdownList");
const label = document.getElementById("dropdownLabel");
const arrow = document.getElementById("arrow");
const items = document.querySelectorAll(".dropdown-item");

btn.addEventListener('click', () => {
    list.classList.toggle('show');
    btn.classList.toggle('open');
    arrow.classList.toggle('rotate');
});

items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('selected'));

        item.classList.add('selected');
        label.textContent = item.querySelector('.item-text').textContent;

        list.classList.remove('show');
        btn.classList.remove('open');
        arrow.classList.remove('rotate');
    });
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        list.classList.remove('show');
        btn.classList.remove('open');
        arrow.classList.remove('rotate');
    }
});
