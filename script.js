
$(document).ready(function(){
    var username = "test";
    var password = "password";
    $(".forgotPassword").hide();
    $(".button2").hide();
    $(".läggTillRuta").hide();
    showDate();

    
if (localStorage.doList == null){ //om inget är sparat i localStorage visas detta
        var stuffToDo = [
            "Klipp gräset",
            "Betala räkningar",
            "Köp mjölk",
            "Spika upp tavlor"
        ];
        var json_str = JSON.stringify(stuffToDo);
        localStorage.doList = json_str;
    }

    if(sessionStorage.username!= null){//om nån är inne
        inloggad();

    } else { 
        
        $(".button").click(function(){ 
    

                    if(username == $(".inputName").val() && password == $(".inputPassword").val()){
                        sessionStorage.username="Jenny Jäderborn";
                        inloggad();
                    } 

                    else {$("h1").hide();
                            $(".forgotPassword").slideDown();
                            $(".button2").hide();
                            $(".läggTillRuta").hide();
                    } 
                });
        
    }
    

    $(".button2").click(function(){ //logga ut-knapp
        sessionStorage.clear()
        location.reload();
        
                });

        function showDate() {
            var d = new Date();
            d.setDate(15);
            document.getElementById("datum").innerHTML = d;
        
        }

        function inloggad() { //visas för inloggad på sidan
            $("h1").hide();
            $(".medlemsSida").text(sessionStorage.username);
            $(".button").hide();
            $(".inputName, .label1, .label2").hide();
            $(".button2").show();
            $(".forgotPassword").hide();
            $(".läggTillRuta").show();
    
            loopList();   

        }

       $(".button3").click(function(){ //lägg till uppgift

            var uppgift = $(".nyPunkt").val()
            //console.log(uppgift);
            var loopArray = JSON.parse(localStorage.doList);
            loopArray.push(uppgift);
            //console.log(loopArray);
            var json_str = JSON.stringify(loopArray);
            localStorage.doList = json_str; // spara i local storage och kalla på looplist för att skriva om
            loopList();
            
                    });

//Loopa ut min lista, hämtar först listan
        function loopList() {
            
            var loopArray = JSON.parse(localStorage.doList);

            var printList = "<ul>";
        
        for(var i = 0; i < loopArray.length; i++) {
            printList += "<li><a onClick='deleteUppgift("+ i +")'>" + loopArray[i] + "</a></li>";
    
        }
        printList = printList + "</ul>";
        
        
        document.getElementById("testList").innerHTML = printList;
        //console.log(printList);
        }


        //ta bort en uppgift från listan och spara om 

        deleteUppgift = function(i) {//ta med i, alltså index, vad som, i nästa funktion

            var loopArray = JSON.parse(localStorage.doList); //hämtar listan
            loopArray.splice(i,1); // med splice radera en uppgift
            // sparar om listan i localstorage med det nya innehållet som är kvar på sidan när man loggar in igen
            var json_str = JSON.stringify(loopArray);
            localStorage.doList = json_str;
            loopList();
        
        }
    
            
});
    