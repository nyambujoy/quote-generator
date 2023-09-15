let btn = document.querySelector("#new-quote")
let qoute = document.querySelector(".quote")
let person = document.querySelector(".person")

const quotes = [{
   qoute: "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
   person: "Stephen King "
},{
    qoute:"A word after a word after a word is power.",
    person:"Margaret Atwood"
},{
    qoute:"As a writer, you should not judge, you should understand.",
    person:"Ernest Hemingway"

},{
    qoute:"A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
    person:"Lao Tzu"
},{
    qoute:" Where there is no vision, the people perish. ",
    person:"Proverbs 29:18"

},{
    qoute:"The first responsibility of a leader is to define reality. The last is to say thank you. In between, the leader is a servant. ",
    person:"Max DePree"
},{
    qoute:"You manage things; you lead people.",
    person:" Rear Admiral Grace Murray Hopper"
},{
    qoute:"A leader is one who knows the way, goes the way, and shows the way. ",
    person:"John Maxwel"
},{
    qoute:"The nation will find it very hard to look up to the leaders who are keeping their ears to the ground.",
    person:" Sir Winston Churchill"
},{
    qoute:"He who has never learned to obey cannot be a good commander.",
    person:" Aristotle"
}

]

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random() * quotes.length);


    qoute.innerText = quotes[random].qoute  /*should randomise the quotes  */
    person.innerText = quotes[random].person
})