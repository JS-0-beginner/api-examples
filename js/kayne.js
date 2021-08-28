function quotes()
{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(kaynequote => displayQuotes(kaynequote))
}

//With Normal Function
/* 
function displayQuotes(kaynequote)
{
    const blockquotes = document.getElementById('quote');
    const apiquotes = document.createElement('blockquote')
    apiquotes.innerText = 
    `
    "${kaynequote.quote}"
    `
    blockquotes.appendChild(apiquotes);
} 
*/

//With Arrow Function
const displayQuotes = kaynequote => 
{

    const blockquotes = document.getElementById('quote');
    blockquotes.classList.add('quote');

    //Direct with blockquote ( " " ) sign 
    blockquotes.innerText = `"${kaynequote.quote}"`;
}