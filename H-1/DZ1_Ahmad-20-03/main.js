const numInput = document.querySelector(".numInput");
const innInput = document.querySelector(".innInput");
const dateInput = document.querySelector(".dateInput");
const check = document.querySelector(".check");
const result = document.querySelector(".result");

const numReqExp = /^\+7 (6)\d{2} \d{3}-\d{2}-\d{2}$/;
const innRegExp = /^([1-2])\d{13}$/;
const dateReqExp = /(((0|1)[0-9]|2[0-9]|3[0-1])\-(0[1-9]|1[0-2])\-(\d{4}$))$/;;

check.addEventListener("click", () => {
    // 
    if (numReqExp.test(numInput.value) 
        && innRegExp.test(innInput.value) 
        && dateReqExp.test(dateInput.value)) {
            result.innerText = "Успешно";
            result.style.color = "green";
    }else {
        result.innerText = "Ошибка";
        result.style.color = "red";
    }


});