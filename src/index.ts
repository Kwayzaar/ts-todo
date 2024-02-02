import { v4 as uuidv4 } from 'uuid';

type Task = {
  id: string;
  title: string;
  completed: boolean; 
  createdAt: string; 
}

const taskList = document.querySelector<HTMLUListElement>("#task-list")
const form = document.querySelector<HTMLFormElement>("#task-form")
const input = document.querySelector<HTMLInputElement>("#task-input")
const submitBtn = document.querySelector<HTMLButtonElement>("#task-submit")

form?.addEventListener("submit", e => {
  let d = new Date()
  const dow = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"]
  e.preventDefault()
  console.log(e)

  if(input?.value == "" || input?.value == null) return 

  const listItem: Task = {
    id: uuidv4(),
    title: input.value,
    completed: false, 
    createdAt: `${dow[d.getDate()]}, ${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`
  }

  console.log(listItem)
  addListItem(listItem)
})

function addListItem(task: Task) {
  const item = document.createElement("li") 
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  label.append(checkbox, task.title)
  item.append(label)
  taskList?.append(item)
}