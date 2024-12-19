const form = document.querySelector('form')
form.addEventListener('submit' , function (e){
    e.preventDefault()

    const Height = parseInt(document.querySelector('#Height').value);
    const Weight = parseInt(document.querySelector('#Weight').value);
    const Result = document.querySelector('#Result');

    if(Height === '' || Height<0 || isNaN(Height)){
    Result.innerHTML = `please give a valid Height ${Height}`
    }
    else if(Weight === '' || Weight < 0 || isNaN(Weight)){
        Result.innerHTML = `Please give a valid Weight ${Weight}`
    }
    else{
        const BMI = ((Weight*10000)/(Height*Height)).toFixed(2)
        Result.innerHTML = `<span>${BMI}</span>`
    }

})