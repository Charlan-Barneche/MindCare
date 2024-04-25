const form = document.querySelector('form[class="inputs-area"]')

form.addEventListener("submit", function(ev){
    ev.preventDefault()

    const name = document.querySelector("input[name=username]").value
    const password = document.querySelector("input[name=password]").value

    if (name === "admin" && password === "1234"){
        console.log ("login e senha corretos")

        window.location.href = "./home.html"
    } else{
        console.log ("erro: senha ou login errados")
        
    }

    console.log(name, password)
})





