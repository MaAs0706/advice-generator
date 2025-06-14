const adviceIdElement = document.getElementById('advice-id');
const adviceTextElement = document.getElementById('advice-text');
const diceButton = document.querySelector('.dice-button');

async function fetchadvice (){
    try{
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const {id,advice} = data.slip ;
        adviceIdElement.textContent = id ; 
        adviceTextElement.textContent = `"${advice}"`;
       } 
       catch(error){
        console.error('Error fetching advice',error);
        alert('error ,please reload')

       }
    
}

fetchadvice();


diceButton.addEventListener('click' , fetchadvice)