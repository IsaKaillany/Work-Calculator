let horasDiarias = document.querySelector('#horas-diarias')
let diasMes = document.querySelector('#dias-mes')
let despesas = document.querySelector('#despesas')
let equipamento = document.querySelector('#equipamento')

let resultado = document.querySelector('#valor-total')
let hidden = document.querySelector('#resultado')

const enviar = document.querySelector('#calcular')

enviar.addEventListener('click', function(e) {
    e.preventDefault()

    if (horasDiarias.value == "" || diasMes.value == "" || despesas.value == "") {
        alert("Preencha os campos vazios")
    } else {
        //valor do equipamento pago por mês
        let equipamentoMes = (Number(equipamento.value) / 12)
        //despesas mensais + equimaneto mensal
        let despesasTotais = (Number(despesas.value) + equipamentoMes)
        //horas trabalhadas por mês
        let horasMes = (Number(horasDiarias.value) * Number(diasMes.value))

        const valorHora = (despesasTotais / horasMes / 0.5).toFixed(2)

        hidden.classList.remove('hidden')
        resultado.innerText = `R$ ${valorHora}`
    }
    
}) 