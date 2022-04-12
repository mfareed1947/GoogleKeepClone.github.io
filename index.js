const addButton = document.querySelector("#add");

const updateData = () => {
     const textAreaData =document.querySelectorAll('textarea');
     const note = [];
    //  console.log(textAreaData);
     textAreaData.forEach((notes)=>{
       return note.push(notes.value);
     })
     console.log(note);

     localStorage.setItem('notes', JSON.stringify(note))
}


const addNewNote = (text = "") => {

    const note = document.createElement('div');
    note.classList.add('note')

    const htmlData = `
    <div class="operation">
    <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}" ></div>
    <textarea class="${text ? "hidden" : ""}" ></textarea> `;

    note.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note);

    // GETING REFRENCE

    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // deleting the node
    deleteButton.addEventListener("click", () => {
        note.remove();
        updateData();
    })


    // toggle using edit button
    textArea.value = text;
    mainDiv.innerHTML = text;


    editButton.addEventListener("click", () => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;
        // console.log(value)

        updateData();
    })


    document.body.appendChild(note);
    // its apppend a node as the last child of  a node
}

// getting data back to local storage 

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){ notes.forEach((note)=>addNewNote(note))}


addButton.addEventListener("click", () => addNewNote());


