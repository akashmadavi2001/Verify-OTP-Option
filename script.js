const btn = document.querySelector(".container button");
const inputs = document.querySelectorAll(".container .input input");

inputs.forEach((input,index)=>{
    input.addEventListener('keyup',(e)=>{
        const currentInput = input;
        const nextInput = input.nextElementSibling;
        const prevInput = input.previousElementSibling;

        if(currentInput.value.length>1){
            currentInput.value ='';
            return;
        }

        if(nextInput && nextInput.hasAttribute('disabled')&& currentInput.value!==""){
            nextInput.removeAttribute('disabled');
            nextInput.focus();
        }

        if(e.key ==="Backspace"){
            inputs.forEach((input,index2)=>{
                if(index <= index2 && prevInput){
                    input.setAttribute('disabled', true);
                    currentInput.value ="";
                    prevInput.focus();
                }
            });
        }

        if(!inputs[3].disabled && inputs[3].value !== ""){
            btn.classList.add("active");
            return;
        }
        btn.classList.remove("active");
    })
})
window.addEventListener('load',()=> inputs[0].focus());