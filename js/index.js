var quotes = [
    {q:"“Be yourself; everyone else is already taken.”",author:"― Oscar Wilde"},
    {q:"“So many books, so little time.”",author:"― Frank Zappa"},
    {q:"“A room without books is like a body without a soul.”",author:"― Marcus Tullius Cicero"},
    {q:"“Be the change that you wish to see in the world.”",author:"― Mahatma Gandhi"},
]
function generateQuote(){
    var random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[random]. q;
    document.getElementById("author").innerHTML = quotes[random]. author;
}