function quotes()
{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(kaynequote => displayQuotes(kaynequote))
}
/* 
function displayQuotes(kaynequote)
{
    const blockquotes = document.getElementById('quote');
    const apiquotes = document.createElement('p')
    apiquotes.innerText = 
    `
    ${kaynequote.quote}
    `
    blockquotes.appendChild(apiquotes);
} 
*/

const displayQuotes = kaynequote => {

    const blockquotes = document.getElementById('quote');
    blockquotes.classList.add('quote')
    blockquotes.innerText = `"${kaynequote.quote}"`;

    /* const apiquotes = document.createElement('blockquote')
    apiquotes.innerText = 
    `
    "${kaynequote.quote}"
    `
    blockquotes.appendChild(apiquotes); */

}