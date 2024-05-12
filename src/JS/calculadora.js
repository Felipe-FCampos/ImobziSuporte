
// Verifica a opcao recebida e habilita o campo de taxa de adm

function enableAdmFee(){
    document.getElementById("admFee").disabled = false;
}


function disableAdmFee(){
    document.getElementById("admFee").disabled = true;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Verifica qual a opcao selecionada na taxa de adm

function selectAdmFee() {
    const selectedOption = document.querySelector('input[name="optionAdmFee"]:checked');

    if (selectedOption) {
        const opcao = selectedOption.value;

        return opcao;
    }
}

function selectSimplifiedDiscount() {
    const selectedOption = document.querySelector('input[name="optionSimplifiedDiscount"]:checked');

    if (selectedOption) {
        const opcao = selectedOption.value;

        return opcao;
    }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// Calcula qual deducao deve ser feita

function calculaDeducao(valorFinal){
    
    let tabelaDeAliquota = [0.075, 0.15, 0.225, 0.275];
    let tabelaDeDeducao = [169.44, 381.44, 662.77, 896];
    
    if(valorFinal <=  2259.20){
        
        valorFinal = 0.00;
        
        return valorFinal;
        
    } else if(valorFinal > 2259.20 && valorFinal <= 2826.65){
        
        valorFinal = valorFinal * tabelaDeAliquota[0];    
        
        return valorFinal;
        
    } else if(valorFinal > 2826.65 && valorFinal <= 3751.05){
        
        valorFinal = valorFinal * tabelaDeAliquota[1]; 
        
        valorFinal = valorFinal - tabelaDeDeducao[1];
        
        return valorFinal;
    
    } else if(valorFinal > 3751.05 && valorFinal <= 4664.68){
        
        valorFinal = valorFinal * tabelaDeAliquota[2];    
        
        valorFinal = valorFinal - tabelaDeDeducao[2];
        
        return valorFinal;
    
    } else if(valorFinal > 4664.68){
        
        valorFinal = valorFinal * tabelaDeAliquota[3];
        
        valorFinal = valorFinal - tabelaDeDeducao[3];
        
        return valorFinal;
    }
    
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// Calcula qual o valor do imposto

function calculaImposto() {
    // Recebe os valores
    let inputRent = document.getElementById("rent").value;
    let inputRecipient = document.getElementById("recipient").value;
    let inputAdmFee = document.getElementById("admFee").value;

    let valorAluguel = parseFloat(inputRent.replace(",", "."));
    let qtdBenef = parseInt(inputRecipient);
    let taxaDeAdm = parseFloat(inputAdmFee);

    let initialRent = valorAluguel;

    let valorDoDescontoSimplificado = 564.80;

    // Verifica se o valor inserido é valido e executa todo o código restante
    if (!isNaN(valorAluguel)) {

    // Verifica a quantidade de beneficiarios e executa a divisao
    if(qtdBenef >= 2){
        valorAluguel = valorAluguel / qtdBenef;
    }

    // Chama a função selectSimplifiedDiscount(), retorna se a opcao selecionada é sim ou não, e armazena na const simpleDiscount
    const simpleDiscount = selectSimplifiedDiscount();
    
    // Compara os valores da opção e executa o cálculo dependendo da opção selecionada
    if(simpleDiscount == 'true'){
        console.log('SimpleDiscount is true.');
        
        valorAluguel = valorAluguel - valorDoDescontoSimplificado;
        
    } else if(simpleDiscount == 'false'){
        console.log('SimpleDiscount is false.');
        
    } else {
        console.log("Invalid value.");
    }
    
    // Chama a função selectAdmFee(), retorna se a opcao selecionada é sim ou não, e armazena na const admFee
    const admFee = selectAdmFee();

    if(admFee == 'true'){
        console.log('AdmFee is true.');

        valorAluguel = valorAluguel - taxaDeAdm;
        
    } else if(admFee == 'false'){
        console.log('admFee is false.');
        
    } else {
        console.log("Invalid value.");
    }

    let finalRent = valorAluguel;
    valorFinal = calculaDeducao(valorAluguel);

    // Finaliza o código exibindo o valor do IRRF
    
    if(valorFinal != 0){
    document.getElementById("result").innerText = valorFinal.toFixed(2);

        console.log([
            {
                "Aluguel Inicial": initialRent.toFixed(2),
                "Aluguel final": finalRent.toFixed(2),
                "Beneficiários": qtdBenef,
                "Desconto Simplificado": simpleDiscount,
                "Taxa de administração": admFee,
            }
        ])
    } else {
        document.getElementById("result").innerText = 'Isento!';
        
        console.log([
            {
                "Aluguel inicial": initialRent.toFixed(2),
                "Aluguel final": finalRent.toFixed(2),
                "Beneficiários": qtdBenef,
                "Desconto Simplificado": simpleDiscount,
                "Taxa de administração": admFee,
            }
        ])
    
    }} else {
        console.log("Invalid value!");
    }
}