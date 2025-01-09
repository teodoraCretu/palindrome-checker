
const button = document.getElementById('check-btn');
const result = document.getElementById('result');


function cleanInput(str){
    return str.replace(/[\W\s_]+/g, "").toLowerCase();
}


function isPalindrome(str){
    let i = 0;
    const transformedString = cleanInput(str);
    let n = transformedString.length - 1;
    let check = true;

    while(i < transformedString.length && check === true && i <= n){
        if(transformedString[i] === transformedString[n]){
            i++;
            n--;
        } else check = false;
    }

    return check;
}

function checkButton(){
    const textInput = document.getElementById("text-input").value;
    result.classList.add('hide');

    if(textInput === ""){
        alert("Please input a value");
    } else {
        if(isPalindrome(textInput)){
            result.innerHTML = `<strong>${textInput}</strong> is a palindrome`;
        
        } else
        {result.innerHTML = `<strong>${textInput}</strong> is not a palindrome`;

        }

        document.getElementById("text-input").value = '';
        result.classList.remove('hide');

    }

}

button.addEventListener("click", checkButton);
