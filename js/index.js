//capturando elemento HTML
let adultos = document.getElementById("adultos");
let criancas = document.getElementById("criancas");
let horas = document.getElementById("horas");

//capturando Output
let output = document.getElementById('saida');



//Funções
//função carne
function calculoCarne(a,c,h){
    //carne
    if (h > 5){
        return (a * 1100) + (c * 550);
    }
    else{
        return (a * 750) + (c * 400);
    }
}

//função cerveja
function calculoCerveja(a,h){
    if(h > 5){
        return a * 6500;
    }
    else{
        return a * 3500;
    }
}

//função bebidas
function calculoBebidas(a,c,h){
    if (h > 5){
        return (a * 1500) + (c * 1500);
    }
    else{
        return (a * 1000) + (c * 1000);
    }
}


//Output
function calcular(){
    let n_adultos = adultos.value;
    let n_criancas = criancas.value;
    let n_horas = horas.value;

    output.innerHTML = `<p>Você vai precisar de ${calculoCarne((n_adultos),n_criancas,n_horas)/1000}Kg de Carne.<p/>`;
    output.innerHTML += `<p>Pra ficar na boa, umas ${(parseInt(calculoCerveja(n_adultos,n_horas)/350))} latinhas de puro malte.<p/>`;
    output.innerHTML += `<p>E pra quem não bebe e a criançada, ${parseInt(calculoBebidas(n_adultos,n_criancas,n_horas)/2000)}L de coquinha.<p/>`;


}
