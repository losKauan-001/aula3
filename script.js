const button = document.querySelector("button")

const prec = document.getElementById("preco")
const qt = document.getElementById("quantidade")
const dr = document.getElementById("DRecebido")

const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcularTroco)

function calcularTroco(){
    const preco = prec.valueAsNumber
    const qtd = qt.valueAsNumber
    const DR = dr.valueAsNumber

    if (preco.value === "" || preco <= 0){
        alert("digite um preço valido")
        return
    }

    if (qtd > 0){
        const valorTotal = (preco * qtd)
        const valorDoTroco = -(valorTotal - DR)
        const valorDoTrocoConvertido = valorDoTroco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
        
        if (valorDoTroco > 0)
        paragrafoResultado.textContent = `
            Troco = ${valorDoTrocoConvertido}
        `
        else if (qtd < 0) {
            let local = -(valorDoTroco)
            let local2 = local.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})

            paragrafoResultado.textContent = `
            Dinheiro insuficiente. Faltam = ${local2}
        `
        } else {
            paragrafoResultado.textContent = `
                Sem troco, obrigado
            `
        }
    } else {
        paragrafoResultado.textContent = `
            digite um valor valido
        `
    }

    preco.value = ""
}