
//task1//
const container = document.querySelector(".container")
const input = document.createElement('input');
const addBtn = document.createElement('button');
addBtn.innerHTML= 'Add';
addBtn.setAttribute('type' , 'button')
input.setAttribute('placeholder' , 'Enter your task name');
input.setAttribute('type' , 'text')
addBtn.classList.add('btn')
input.classList.add('add-input')
container?.appendChild(input);
container?.appendChild(addBtn);


addBtn.addEventListener('click' ,addFn)


function addFn(){
    const wrapper = document.createElement('div');
    const input2 = document.createElement('span');
    const btnAdd = document.createElement('button');
    const btnDelete = document.createElement('button');
    wrapper.classList.add('wrapper');
    input2.setAttribute('type' , 'text')
    input2.innerHTML = input.value;
    input2.classList.add('add-input');
    input2.style.backgroundColor ='transparent';
    input2.style.display = 'inline-block';
    
    btnAdd.innerHTML ='Done'
    btnDelete.innerHTML ='Delete'
    btnAdd.classList.add('btn');
    btnDelete.classList.add('btn')
    container?.appendChild(wrapper);
    wrapper.appendChild(input2);
    wrapper.appendChild(btnAdd);
    wrapper.appendChild(btnDelete);

    btnAdd.addEventListener('click' , ()=>{
        wrapper.classList.toggle('highlighter');
    })

    btnDelete.addEventListener('click' , ()=>{
        wrapper.remove();
    })
}

// task2 //

const mainTable = document.getElementById('main-table')
const table = document.getElementById('table');    


fetch('https://jsonplaceholder.typicode.com/users')
.then(res =>{
    return res.json();
}).then(data =>{

    data.forEach(user =>{
        const tr = `<tr>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                    </tr>`
        table?.insertAdjacentHTML('beforeend' ,tr);
    
    })   
}).catch(error =>{
    console.log(error);
})

// @ts-ignore
container?.appendChild(mainTable);

