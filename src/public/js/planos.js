var stateClass = true;
var click = $("#botao")

function contagem(preco, precoMaximo,id,operador){
        let down = id.slice(-1);
        down = setInterval(function () {
            $(`#${id}`).html(preco)
            switch (operador){
                case "mensal":
                    if (preco >= precoMaximo) clearInterval(down);
                    preco ++
                    break;
                case "anual":
                    if (preco <= precoMaximo) clearInterval(down);
                    preco --
                    break;   
            }
        }, 20)
}

click.on("click", function () {
    if (pegaEstado() == true) {
        contagem(49,29,'contador-caracteres1','anual')
        contagem(69,49,'contador-caracteres2','anual')
        contagem(99,59,'contador-caracteres3','anual')
        guardaEstado(false);

    } else {
        contagem(29,49,'contador-caracteres1','mensal')
        contagem(49,69,'contador-caracteres2','mensal')
        contagem(59,99,'contador-caracteres3','mensal')
        guardaEstado(true);

    }
})

function pegaEstado() {
    return stateClass;
};

function guardaEstado(teste) {
    stateClass = teste;
};






