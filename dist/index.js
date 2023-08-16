"use strict";
const titleTaskText = document.querySelector("#dailyTitle");
const descriptionTaskText = document.querySelector("#dailyMessage");
const showTask = document.querySelector("#showTask");
showTask === null || showTask === void 0 ? void 0 : showTask.addEventListener("click", () => {
    console.log(titleTaskText === null || titleTaskText === void 0 ? void 0 : titleTaskText.value, descriptionTaskText === null || descriptionTaskText === void 0 ? void 0 : descriptionTaskText.value);
});
//# sourceMappingURL=index.js.map