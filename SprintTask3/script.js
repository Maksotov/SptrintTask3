let currency = document.getElementById("currency");
if(currency.value === "KZT") {
    let itself = document.getElementById("inCurrKZT");
    itself.value = "-";
}else if(currency.value === "USD") {
    let itself = document.getElementById("inCurrUSD");
    itself.value = "-";
}else {
    let itself = document.getElementById("inCurrEUR");
    itself.value = "-";
}

let inputField = document.getElementById('inPrice');
inputField.onkeydown = function(event) {
    let t = document.getElementById("inPrice");
    let s = t.value;
    if(isNaN(event.key) || event.key === 'Backspace') {
        if(event.key === 'Backspace') {
            t.value = s.substring(0, document.getElementById("inPrice").value.length - 1);
        }
        event.preventDefault();
    }
        if (currency.value === "KZT") kzt(document.getElementById("inPrice").value + event.key);
        else if (currency.value === "USD") usd(document.getElementById("inPrice").value + event.key);
        else eur(document.getElementById("inPrice").value + event.key);
};

function kzt(price) {
    let b = true;
    for(let i = 0; i < price.length; i++) {
        if(price.charAt(i) >= '0' && price.charAt(i) <= '9') {
            b = false;
        }
    }

    if(b === true) {
        document.getElementById("inCurrUSD").value = "";
        document.getElementById("inCurrEUR").value = "";
        return;
    }

    let number = parseInt(price);
    console.log(number);
    document.getElementById("inCurrUSD").value =  fix((number / 431).toString());
    document.getElementById("inCurrEUR").value = fix((number / 509).toString());
}

function usd(price) {
    let b = true;
    for(let i = 0; i < price.length; i++) {
        if(price.charAt(i) >= '0' && price.charAt(i) <= '9') {
            b = false;
        }
    }

    if(b === true) {
        document.getElementById("inCurrKZT").value = "";
        document.getElementById("inCurrEUR").value = "";
        return;
    }

    let number = parseInt(price);
    document.getElementById("inCurrKZT").value =  fix((number * 429).toString());
    document.getElementById("inCurrEUR").value = (parseFloat(fix((number * 429).toString())) / 509).toFixed(2);
}

function eur(price) {
    console.log(price);
    let b = true;
    for(let i = 0; i < price.length; i++) {
        if(price.charAt(i) >= '0' && price.charAt(i) <= '9') {
            b = false;
        }
    }

    if(b === true) {
        document.getElementById("inCurrKZT").value = "";
        document.getElementById("inCurrUSD").value = "";
        return;
    }

    let number = parseInt(price);
    document.getElementById("inCurrKZT").value =  fix((number * 507).toString());
    document.getElementById("inCurrUSD").value = (parseFloat(fix((number * 507).toString())) / 431).toFixed(2);
}

function changeCurr() {
    let x = document.getElementById("currency");
    if(x.value === "KZT") {
        document.getElementById("inCurrKZT").value = "-";
        kzt(document.getElementById("inPrice").value);
    }else if(x.value === "USD") {
        document.getElementById("inCurrUSD").value = "-";
        usd(document.getElementById("inPrice").value);
    }else {
        document.getElementById("inCurrEUR").value = "-";
        eur(document.getElementById("inPrice").value);
    }
}
function fix(str) {
    str = str.toString();
    if(str.indexOf(".") !== -1) return str.slice(0, (str.indexOf(".")) + 3) ;
    else return str + ".00";
}

