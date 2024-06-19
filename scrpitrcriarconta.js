const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const passwordconfirmation = document.getElementById("password-confirmation");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        checkForm();
        

    })

    email.addEventListener("blur", () => {
        checkInputEmail();
    })

    username.addEventListener("blur", () => {
        checkInputUsername();}
    )


    function checkInputUsername(){
        const usernameValue = username.value;
        
        if(usernameValue === ""){
            errorInput(username, "Preencha um username")}
            else{
                const formItem = username.parentElement;
                formItem.className = "form-content"
            }
    }

    function checkInputEmail(){
        const emailValue = email.value;
        
        if(emailValue === ""){
            errorInput(email, "Preencha um Email")}
            else{
                const formItem = email.parentElement;
                formItem.className = "form-content"
            }

        }

        function checkInputPassword(){
            const passwordValue = password.value;
            
            if(passwordValue === ""){
                errorInput(password, "Preencha uma senha");
            } else if(passwordValue.length < 8 ){
                errorInput(password, "Senha deve ter pelo menos 8 caracteres");
            } else {
                const formItem = password.parentElement;
                formItem.className = "form-content";
            }
        }
        
    


        function checkInputPasswordConfirmation() {
            const passwordValue = password.value;
            const confirmationPasswordValue = passwordconfirmation.value;
        
            if (confirmationPasswordValue === "") {
                errorInput(passwordconfirmation, "Confirmação obrigatória");
            } else if (confirmationPasswordValue !== passwordValue) {
                errorInput(passwordconfirmation, "As senhas preciam ser iguaisl");
            } else {
                const formItem = passwordconfirmation.parentElement;
                formItem.className = "form-content";
            }
        }
        

    function checkForm(){
        checkInputUsername();
        checkInputEmail();
        checkInputPassword();
        checkInputPasswordConfirmation()

        const formItems = form.querySelectorAll(".form-content")
        const isValid = [...formItems].every((item) => {
            return item.className === "form-content"
        });
        if(isValid)alert("Cadastrado com sucesso")}
    










    function errorInput(input, message){
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector("a")

        textMessage.innerText = message;
        formItem.className = "form-content error"

    
    }
