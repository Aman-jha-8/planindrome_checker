checkButton=document.getElementById("checkButton");
checkButton.addEventListener("click",checkPalindrome)

const quoteElement = document.createElement("h3");
quoteElement.classList.add("result-heading")
quoteElement.classList.add("typing")
result.appendChild(quoteElement)

function checkPalindrome(){
    const input = document.getElementById('inputtext').value
    const result=document.getElementById("result")

    if(isPalindrome(input)){
        quoteElement.innerText = " Yes, this is a palindrome String.  ";

    }else{
        quoteElement.innerText = "No, this is not a palindrome String.";

    }
}

function isPalindrome(input) {
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');
    console.log(cleanedInput === reversedInput)
    return cleanedInput === reversedInput;
  }
