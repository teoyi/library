// Add button tings 
const addBtt = document.querySelector('#add');


function showForm() {
    const form = document.getElementById('form');
    let set = form.style.display;
    if (set == 'block'){
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    };
};

addBtt.addEventListener('click', () =>{
    showForm();
    console.log(form.style.display);
});
