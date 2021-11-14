const inputRef = document.getElementById('myInput');
const buttonRef = document.querySelector('.addBtn');
const ulRef = document.getElementById('myUL');
const closeRef = document.getElementsByClassName("close");


buttonRef.addEventListener('click', addTask);
ulRef.addEventListener('click', updateChecked);
ulRef.addEventListener('click', complitedTask);
closeRef.onclick

function addTask() {
    const value = inputRef.value.trim();
    if(!value) {   
        return false;
    }
    saveTask(value);
    createMarkup();
    inputRef.value = '';
}

function saveTask(value) {
    const objTask = {
        text: value,
        checked: false,
    };
    let data = localStorage.getItem('listTask') || [];
    if(Array.isArray(data)) {
        data.push(objTask)
    } else {data = JSON.parse(data);
    data.push(objTask);
    }
    localStorage.setItem('listTask', JSON.stringify(data));
}

function createMarkup() {
    let data = localStorage.getItem('listTask');
    if(!data) {
        return;
    } else {
        data = JSON.parse(data);
    const addTask = data.map(({text, checked}) => {
        const classElem = !!checked ? 'checked': '';
        const elClose = '\u00D7';
        const classClose = 'close';
        return `<li class='${classElem}'>${text}
        <span class='${classClose}'>${elClose}</span></li>`;
    }).join('');
    ulRef.innerHTML = addTask;
    }
}
createMarkup();

function updateChecked({target}) {
    if(target.tageName !== 'LI') return;
    const text = target.textContent;
    localStorage.getItem('listTask');
    data = JSON.parse(data);
    for(const d in data) {
        if(data[d].text === text) {
            data[d].checked = !data[d].checked;
        }
        localStorage.setItem('listTask', JSON.stringify(data)); 
    }
}
createMarkup();


function complitedTask(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}

for ( let i = 0; i < closeRef.length; i++) {
  closeRef[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}





















