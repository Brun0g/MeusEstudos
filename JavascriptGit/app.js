const bills = [{valor: 22},{valor: 295},{valor: 176},{valor: 440},{valor: 37},{valor: 105},{valor: 10},{valor: 1100},{valor: 86},{valor: 52}];
const califa2 = bills.map(bills => bills.valor)
const arrayTips = [];
const arrayTotals = [];

const calcTip = function (filtragem){
    return filtragem >= 50 && filtragem <= 300 ? filtragem * 0.15 : filtragem * 0.2; 
}

const Totals = function (b, c){
    return Number(b) + Number(c);    
}

const calcAverage1 = function (array){
    const LengArray = array.length;
    
    for(let sum = 0; sum < array.length; sum++){
        return array.reduce((acc, array) => (acc + array / LengArray));
    }
}

const tipsArray = function(tips, result) {
    
    let i = 0;
    while(i < bills.length){
        
        console.log(`========== INTERACTION ${i} ==========`)
        console.log(`Valor da Conta: ${califa2[i]}`)
        
        tips = calcTip(`${califa2[i]}`)
        arrayTips.push(tips)
        result = Totals(`${califa2[i]}`,`${tips}`)
        arrayTotals.push(result)
        
        console.log('Gorjeta: ' + tips)
        console.log(('Total ficou em: ' + result))
        i++;
    }
    console.log("===================================")
    console.log(`TODAS AS COMPRAS: ` + `${califa2}`)
    console.log(`TODAS AS GORJETAS: `+ `${arrayTips}`)
    console.log(`TOTAL DE CADA COMPRA: ` + `${arrayTotals}`)
    console.log("===================================")
    console.log(`MÉDIA DA SOMA DE TODOS OS VALORES DAS COMPRAS: `+ calcAverage1(califa2))
    console.log(`MÉDIA DA SOMA DE TODOS OS VALORES DAS GORJETAS: `+ calcAverage1(arrayTips))
    console.log(`MÉDIA DA SOMA DE TODOS OS VALORES: `+ calcAverage1(arrayTotals))
}
tipsArray()