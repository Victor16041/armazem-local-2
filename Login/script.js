function login(){
    
    var nome = document.getElementById("nome").value
    var senha = document.getElementById("senha").value
    
    if(nome && senha && nome === "GIGGITY" && senha === "duduferoz"){
        const user = {
            name: nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100000)
        }
        localStorage.setItem("usuario", JSON.stringify(user))
        window.location.href = "../Loja"
    }else{
        document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.borderBottom = "3px solid red"
        document.getElementById("senha").style.borderBottom = "3px solid red"
    }
}




function showPassword(){
    var inputSenha = document.querySelector('#senha')
    var img_eye = document.querySelector('#eye')

    
    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type", "text")
        img_eye.setAttribute("src", "./Images/hide.png")
    }else{
        inputSenha.setAttribute("type", "password")
        img_eye.setAttribute("src", "./Images/view.png")
    }


}

function fecharError(){
            document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.borderBottom = "2px solid  rgb(255, 255, 255)"
        document.getElementById("senha").style.borderBottom = "2px solid  rgb(255, 255, 255)"
}