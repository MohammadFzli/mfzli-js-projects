type taskDaily ={
    id:string | number;
    titleTaskText:string;
    descriptionTaskText:string;

};
const titleTaskText = document.querySelector<HTMLInputElement>("#dailyTitle");
const descriptionTaskText = document.querySelector<HTMLTextAreaElement>("#dailyMessage");
const showTask = document.querySelector<HTMLButtonElement>("#showTask");

showTask?.addEventListener("click", () => {
console.log(titleTaskText?.value,descriptionTaskText?.value);
});