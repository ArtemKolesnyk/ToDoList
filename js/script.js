const inputRef = document.getElementById('myInput');
const buttonRef = document.querySelector('.addBtn');
const ulRef = document.getElementById('myUL');


buttonRef.addEventListener('click', onClick);
ulRef.addEventListener('click', upDateChecked);


function onClick() {
    const value = inputRef.value.trim();
    if(!value) {
        return false;
    }
    onSave(value);
    markup();
    inputRef.value = '';
}

function onSave(value) {
    const obj = {
        text: value,
        checked: false,
    };
    let data = localStorage.getItem('list') || [];
    if(Array.isArray(data)) {
        data.push(obj)
    } else {data = JSON.parse(data);
    data.push(obj);
    }
    
    localStorage.setItem('list', JSON.stringify(data));
}

function markup() {
    let data = localStorage.getItem('list');
    if(!data) return;
    data = JSON.parse(data);
    const addMarkup = data.map(({text, checked}) => {
        const classElem = !!checked ? 'checked': '';
        return `<li class="${classElem}">${text}</li>`;
    }).join('');
    ulRef.innerHTML = addMarkup;
}
markup();

function upDateChecked({target}) {
    if(target.tageName !== 'LI') return;
    const text = target.textContent;
    localStorage.getItem('list');
    data = JSON.parse(data);
    for(const d in data) {
        if(data[d].text === text) {
            data[d].checked = !data[d].checked;
        }
        localStorage.setItem('list', JSON.stringify(data));
        markup();
    }
}



