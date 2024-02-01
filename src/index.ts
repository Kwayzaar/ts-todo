import { v4 as uuidv4 } from 'uuid';

const taskList = document.querySelector<HTMLUListElement>("#task-list")
const form = document.querySelector<HTMLFormElement>("#task-form")
const input = document.querySelector<HTMLInputElement>("#task-input")
const submitBtn = document.querySelector<HTMLButtonElement>("#task-submit")

form?.addEventListener("submit", e => {
  e.preventDefault() 

  if(input?.value == "" || input?.value == null) return 

  const listItem = {
    id: uuidv4(),
    title: input.value,
    completed: false, 
    createdAt: new Date().toDateString()
  }

  
})

function addListItem(task) {
  
}