// document.querySelector('#container').style.backgroundColor = "red";

//procurar o botao
document.querySelector("#add-time")
    //quando clicar no botao

    .addEventListener('click', cloneField)

//executar uma acao
function cloneField() {
    //console.log('cheguei aqui')

    //Duplicar os campos. Que campos? 
    /* cloneNode para duplicar */
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false

    //pegar o campo: que campos?

    const fields = newFieldContainer.querySelectorAll('input')

    //console.log(fields[0].value = "")

    //para cada campo limpar

    fields.forEach(function (field) {
        //pegar o field e limpa ele
        //console.log(field)
        field.value = ""
    })
    //não é uma boa prática (field)
    /*  fields[0].value = ""
     fields[1].value = "" */


    //Colocar na página: Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
