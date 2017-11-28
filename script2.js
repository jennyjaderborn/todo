$(document).ready(function(){
    var username = "test";
    var password = "password";
    $(".forgotPassword").hide();
    $(".button2").hide();
    $(".läggTillRuta").hide();
    showDate();
    var loopArray = JSON.parse(localStorage.doList);

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
    

    $(".button2").click(function(){
        sessionStorage.clear()
        location.reload();
        
                });

        function showDate() {
            var d = new Date();
            d.setDate(15);
            document.getElementById("datum").innerHTML = d;
        
        }

        function inloggad() {
            $("h1").hide();
            $(".medlemsSida").text(sessionStorage.username);
            $(".button").hide();
            $(".inputName, .label1, .label2").hide();
            $(".button2").show();
            $(".forgotPassword").hide();
            $(".läggTillRuta").show();
                loopList();   

        }


        function loopList() {

            var printList = "";
        
        for(var i = 0; i < loopArray.length; i++) {
            printList += "<div>" + "<a href='#' onclick='deleteUppgift("+ i +")'>" + loopArray[i] + "</a>" + "</div>";
        }
        
        
        document.getElementById("testList").innerHTML = printList;
        //console.log(printList);

        }

        $(".button3").click(function(){
            loopArray.push($(".nyPunkt").val());
            var json_str = JSON.stringify(loopArray);
            localStorage.doList = json_str;
            loopList();
        });


        function deleteUppgift(i) {
            loopArray.splice(i,1);
            loopList();
            //loopArray.splice(index,1);
            //alert("hej");
            //loopList();*/
        }

    
            
});
    