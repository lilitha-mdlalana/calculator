const inputLabel = document.getElementById('inputLabel');

function pushBtn(item){
    let pushed = item.innerText;
    if(pushed == '='){
        //calculate
        inputLabel.innerHTML = eval(inputLabel.innerText);
    }else if(pushed == 'AC'){
        //clear
        inputLabel.innerHTML = '0';
    }else{
        if(inputLabel.innerHTML == '0'){
            inputLabel.innerText = pushed;
        }else{
            inputLabel.innerText += pushed;
        }
    }
}