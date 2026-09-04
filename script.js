const button = document.querySelector("button")

const preco = document.getElementById("ID")
const qt = document.getElementById("quantidade")

const dados = [
    { cod: 1, prec: 5.00 },
    { cod: 2, prec: 3.50 },
    { cod: 3, prec: 4.80 },
    { cod: 4, prec: 8.90 },
    { cod: 5, prec: 7.32 },
];

const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcularCodigo)

function calcularCodigo() {

    const Codigo = preco.valueAsNumber - 1
    const qtd = qt.valueAsNumber

    if (Codigo < 0 || Codigo >= 5) {
        alert("digite um código valido")
        paragrafoResultado.textContent = `
                ERRO: 404 - Código inválido. Tente novamente
            `
        return
    }

    if (qtd > 0 && qtd <= 100) {
        const valorTotal = (dados[Codigo].prec * qtd)
        const valorConvertido = valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

        paragrafoResultado.textContent = `
                Valor a pagar: ${valorConvertido}
            `
    } else {
        paragrafoResultado.textContent = `
                JÁ CHEGA! ja ta 100, bom vc ainda quer mais?
            `
    }
}
