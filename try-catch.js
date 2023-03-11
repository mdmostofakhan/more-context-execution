function checkAge(){
    const ageField = document.getElementById('age')
    const ageText = ageField.value;
    const arrorTag = document.getElementById('error');

    try{
        const age = parseInt(ageText)
        if(isNaN(age)){
            throw "please enter a number"
        }
        else if(age < 18){
            throw "bacha kacha not allowed"
        }
        else if(age > 30){
            throw "murubi aikhan aisen"
        }
        arrorTag.innerHTML = '';
    }
    catch(err){
        console.log('ERROR', err)
        arrorTag.innerHTML = 'Something wrong'
    }
    finally{
        console.log('All done inside try catch')
    }
    console.log(1111);
}