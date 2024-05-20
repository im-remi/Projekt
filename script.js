let przycisk = document.getElementById("przycisk");
let input = document.getElementById("input");
let haslo = document.getElementById("litery");
let wiadomosc = document.getElementById("wiadomosc")
let ctx = document.getElementById("canvas").getContext('2d');
let slowa = ["kot", "hazard", "gruszka", "pizza", "pies", "komputer","monitor","procesor", "klawiatura","okno"," dom", "drzwi", "biurko", "powietrze", "marchew","telefon","widelec","talerz","napis","odbudowa","usterka","naprawa","uszkodzenie","gracjan","buty","kolumna","grecja","niemcy","polska","francja","czechy","rosja","kazahstan","ukraina","barszcz","lody","lektura","kalkulator","pendrive","bidon","parasolka","okulary","chusteczki","chiny","pogoda","deszcz","burza","usta","oko","oczy","uszy","ucho","nos","brwi","wyspa","kanarek","papuga","kruk","wrona","sroka","kawka","kawa","piasek","wieliczka","obraz","rzeka","morze","gwinea","staw","jezioro","brazylia","mors","lew","delfin","rekin","ryba","ryby","sushi","wieloryb","kaszalot","krab","krewetki","kura","owad","kenia","japonia","chiny","rozgwiazda","gwiazda","kosmos","alfabet","agama","ziemia","trawa","czekolada","ananas","agrafka","kwiat","tablica","zegar","kalendarz","krasnal","gnom","papier","karton","korona","wentylacja","kratka","kartka","tygrys","ptak","katalizator","kran","pralka","rura","hydraulik","elektryk","programowanie","sznur","sznurek","pistolet","karabin","amunicja","armata","kula","aparat","marcin","liga","legenda","buty","ziemniak","frytki","spodnie","cztery","czerwony","grzyb","grzyby","czernina","kurka","podgrzybek","muchomor","mucha","komar","samolot","albatros","maskonur","nurek","woda","koral","koralowiec","szampon","pasta","cement","kajak","rumianek","rozmaryn","lawenda","magnolia","tlen","potas","fluor","siarka","wapno","fosfor","azot","krzem","glin","chlor","chloroplast","cynk","magnez","lampa","fioletowy","niebieski","szczotka","umywalka","sofa","gazeta","koniczyna","irygator","piana","pianka","kanapka","banan","truskawka","dziobak","cytryna","awokado","zielony","szparagi","szpinak","rukola","papryka","fasola","ketchup","paznokcie","włosy","grzybica","plecak","naczynie","opuchlizna","blizna","czoło","brwi","rzęsy","ręcę","ławka","krzesło","worek","Gdańsk","Kraków","granica","kabel","godło","jehowa","informatyka","polski","angielski","historia","’matematyka","geografia","biologia","chemia","konstantynopolitańczykówianeczka","funkcja","wisielec","antydestamentarianizm","szynszyla","okręt","paluszki"," paluszki rybne","aparat na zęby","karta graficzna","czosnek","czosneczek","smok","jednorożec","procesor","myszka","aparat golgiego"," mitochondrium","rybosomy","ulotka","amylaza","proteiny","przypisy","przyprawy","nukleotyd","stanowisko","koloid","operetka","kawaleria","farma","pole","trójkąt bermudzki","trójkąt","rezygnacja","plaża","pinezka"]


let slowotest = "slowo do testow"
sw = 1;
let odgadniete = []
let bledy = 0;
end = false

input.addEventListener('keydown', function(event) {
    if(event.key == "Enter" && this.value.length > 0) sprawdzSlowo()
})
function zdobadzSlowo() {
    length = slowa.length
    if(sw == 1) return slowo = slowa[parseInt(Math.random() * length)]
    slowo = slowotest
}

function gra() {
    zdobadzSlowo()
    zaktualizujSlowo()
}
function zaktualizujSlowo(){
    haslo.innerText = slowo.split('').map(litera => {
        if (litera === ' ') {
          return ' ';
        }
        return odgadniete.includes(litera) ? litera : '_';
      }).join(' ');
      
}
function sprawdzSlowo(){
    a = input.value
    input.value = ""
    a = a.toLowerCase()

    if(!odgadniete.includes(a) && !end){
    odgadniete.push(a)
    if(a.length>1){ // slowo
        al = a.toLowerCase()
        if(al == slowo){
            b = al.split('');
            for(i = 0; i <= b.length; i++){
                odgadniete.push(b[i])
            }
            zaktualizujSlowo()
            wiadomosc.innerText = "Wygrałeś"
            end = true;
        } else {
            bledy++
            rysuj();
        }
    } else { // litery
        if(slowo.includes(a)) {
            zaktualizujSlowo();
            if(!haslo.innerText.includes('_') && bledy < 12){
                wiadomosc.innerText = "Wygrałeś!"
                end = true;
            }
        } else {
            bledy++;
            rysuj()
           
        }
    }
    }
    if(!end) wiadomosc.innerText = "Podane litery i slowa: " + odgadniete.join(', ')
}
function rysuj(){
    switch(bledy){
        case 1:
            drawBaseLegLeft();
            break;
        case 2:
            drawBaseLegRight();
            break;
        case 3:
            drawBase();
            break;
        case 4:
            drawPole();
            break;
        case 5:
            drawBeam();
            break;
        case 6:
            drawRope();
            break;
        case 7:
            drawHead();
            break;
        case 8:
            drawBody();
            break;
        case 9:
            drawLeftArm();
            break;
        case 10:
            drawRightArm();
            break;
        case 11:
            drawLeftLeg();
            break;
        case 12:
            end = true;
            drawRightLeg();
            wiadomosc.innerText = "Przegrałeś, hasło to: " + slowo;
            break;
        default:
            end = true;
            wiadomosc.innerText = "Przegrałeś, hasło to: " + slowo;
            break;
    }
}
    function drawBaseLegLeft() {
        ctx.beginPath();
        ctx.moveTo(10, 190);
        ctx.lineTo(30, 170);
        ctx.stroke();
    }
    
    function drawBaseLegRight() {
        ctx.beginPath();
        ctx.moveTo(30, 170);
        ctx.lineTo(50, 190);
        ctx.stroke();
    }
    
    function drawBase() {
        ctx.beginPath();
        ctx.moveTo(0, 190);
        ctx.lineTo(150, 190);
        ctx.stroke();
    }
    
    function drawPole() {
        ctx.beginPath();
        ctx.moveTo(30, 170);
        ctx.lineTo(30, 10);
        ctx.stroke();
    }
    
    function drawBeam() {
        ctx.beginPath();
        ctx.moveTo(30, 10);
        ctx.lineTo(120, 10);
        ctx.stroke();
    }
    
    function drawRope() {
        ctx.beginPath();
        ctx.moveTo(120, 10);
        ctx.lineTo(120, 30);
        ctx.stroke();
    }
    
    function drawHead() {
        ctx.beginPath();
        ctx.arc(120, 50, 20, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    function drawBody() {
        ctx.beginPath();
        ctx.moveTo(120, 70);
        ctx.lineTo(120, 110);
        ctx.stroke();
    }
    
    function drawLeftArm() {
        ctx.beginPath();
        ctx.moveTo(120, 80);
        ctx.lineTo(90, 100);
        ctx.stroke();
    }
    
    function drawRightArm() {
        ctx.beginPath();
        ctx.moveTo(120, 80);
        ctx.lineTo(150, 100);
        ctx.stroke();
    }
    
    function drawLeftLeg() {
        ctx.beginPath();
        ctx.moveTo(120, 110);
        ctx.lineTo(100, 140);
        ctx.stroke();
    }
    
    function drawRightLeg() {
        ctx.beginPath();
        ctx.moveTo(120, 110);
        ctx.lineTo(140, 140);
        ctx.stroke();
    }

gra()