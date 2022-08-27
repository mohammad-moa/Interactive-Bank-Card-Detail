"use strict";

const bankCardPerson = document.querySelector(".bank-card-person");
const formPerson = document.querySelector(".form-person");
const bankCardNumber = document.querySelector(".bank-card-number");
const formNumber = document.querySelector(".form-card-number");
const bankCardCvv = document.querySelector(".bank-card-cvv");
const formCvv = document.querySelector(".form-cvv");
const bankCardExpiration = document.querySelector(".bank-card-expiration_date");
const formMonthExpiration = document.querySelector(".form-month-expiration_date");
const formYearExpiration = document.querySelector(".form-year-expiration_date");
const formExpiration = document.querySelectorAll(".form-expiration_date")


const changeFormCardHanlder = () => {
    let seperateCardNum = 4;
    let arrCardNum = [];
    formPerson.addEventListener("keyup", () => {
        if (formPerson.value.length > 0) {
            bankCardPerson.innerHTML = formPerson.value;
        } else {
            bankCardPerson.innerHTML = "نام و نام خانوادگی"
        }
    })

    formNumber.addEventListener("keyup", (e) => {
        arrCardNum = formNumber.value.split("");
        if (formNumber.value.length > 0) {
            if (formNumber.value.length > seperateCardNum) {
                arrCardNum.splice(seperateCardNum, 0, " ");
                formNumber.value = arrCardNum.join("");
                seperateCardNum += 5;
            }
            if (formNumber.value.length == seperateCardNum - 5 && seperateCardNum > 4) {
                seperateCardNum -= 5
            }
        } else {
            seperateCardNum = 4;
        }
        bankCardNumber.innerHTML = arrCardNum.join("") || "0000 0000 0000 0000";
    })

    formCvv.addEventListener("keyup", () => {
        if (formCvv.value.length > 0) {
            bankCardCvv.innerHTML = formCvv.value;
        } else {
            bankCardCvv.innerHTML = "0000"
        }
    })

    formExpiration.forEach(val => {
        val.addEventListener("keyup", () => {
            let [arrExpirationYear, arrExpirationMonth] = [formYearExpiration.value, formMonthExpiration.value]
            bankCardExpiration.innerHTML = `${arrExpirationYear || "00"}/${arrExpirationMonth || "00"}`;
        })
    })

}
changeFormCardHanlder()