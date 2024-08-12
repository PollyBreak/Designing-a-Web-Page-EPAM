document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.reg-form');
    const inputs = form.querySelectorAll('input[data-reg], select[data-reg], textarea[data-reg]');
    const formText = document.querySelector('#form-text');
    const thanksMessage = document.querySelector('#thanks');
    const regGif = document.querySelector('#cuteimg');

    inputs.forEach((input) => {
        input.setAttribute("is-valid", "0");

        input.addEventListener('input', () => {
            inputCheck(input);
        });
    });

    function inputCheck(el) {
        const inputValue = el.value;
        const inputReg = el.getAttribute("data-reg");
        const reg = new RegExp(inputReg);
        const error = document.querySelector(`#${el.id}Error`);

        if (reg.test(inputValue)) {
            el.setAttribute("is-valid", "1");
            el.style.border = "3px solid rgb(0, 196, 0)";
            if (error) {
                error.style.color = "green";
                error.textContent = "Looks good!";
            }
        } else {
            el.setAttribute("is-valid", "0");
            el.style.border = "3px solid red";
            if (error) {
                error.style.color = "red";
                error.textContent = "Invalid input. Please check.";
            }
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let allValid = true;

        inputs.forEach((input) => {
            if (input.getAttribute("is-valid") === "0") {
                allValid = false;
                inputCheck(input);
            }
        });

        if (allValid) {
            formText.classList.add('hidden');
            form.classList.add('hidden');
            thanksMessage.classList.remove('hidden');
            regGif.classList.remove('hidden');
        } else {
            alert("Please correct the errors in the form.");
        }
    });
});
