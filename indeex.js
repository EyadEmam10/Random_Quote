

var pargraph1=['"Do not take life too seriously. You will not get out alive."',
'"Resentment is like drinking poison and waiting for your enemies to die."'
,'"The best revenge is massive success."',
'"You miss 100% of the shots you do not take ."',
'"It is not what happens to you, but how you react to it that matters."'];

var pargraph2=['--Elbert Hubbard','--Frank Sinatra','--Wayne Gretzy','--Epictetus','--Nelson Mandela'];


function show(){
    var page=Math.floor(Math.random()* pargraph1.length);

    document.getElementById("para1").innerHTML=pargraph1[page];
    document.getElementById("para2").innerHTML=pargraph2[page];
    
}