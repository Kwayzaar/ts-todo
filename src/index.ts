import { v4 as uuidv4 } from 'uuid';

const taskList = document.querySelector<HTMLUListElement>("#task-list")
const form = document.querySelector<HTMLFormElement>("#task-form")
const input = document.querySelector<HTMLInputElement>("#task-input")
const submitBtn = document.querySelector<HTMLButtonElement>("#task-submit")

