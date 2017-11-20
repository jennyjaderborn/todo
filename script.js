
$(document).ready(function(){
    var username = "test";
    var password = "password";
    $(".forgotPassword").hide();
    $(".button2").hide();
    var stuffToDo = [
        "Klipp gräset",
        "Betala räkningar",
        "Köp mjölk",
        "Spika upp tavlor"
    ];
    var json_str = JSON.stringify(stuffToDo);
    localStorage.doList = json_str;
    var loopArray = JSON.parse(localStorage.doList);
    showDate();
    

    //console.log(loopArray);
    
    if(sessionStorage.username!= null){//om nån är inne
        $("h1").hide();
        $(".medlemsSida").text(sessionStorage.username);
        $(".button").hide();
        $("input, label").hide();
        $(".button2").show();
        $(".forgotPassword").hide();

        $("#main").append("<ul class='stuffList'></ul>");

            loopArray.forEach(function(index) {
            $(".stuffList").append("<li>" + index + "</li>");
            });

    } else { 
        
        $(".button").click(function(){ 
    

                    if(username == $(".inputName").val() && password == $(".inputPassword").val()){
                        sessionStorage.username="Jenny Jäderborn";
                        $(".medlemsSida").text(sessionStorage.username);                
                        $("h1").hide();
                        $(".button").hide();
                        $("input, label").hide();
                        $(".button2").show();
                        $(".medlemsSida").show();
                        $(".forgotPassword").hide();

                        $("#main").append("<ul class='stuffList'></ul>");

                        loopArray.forEach(function(index) {
                            $(".stuffList").append("<li>" + index + "</li>");
                        });
                    } 

                    else {$("h1").hide();
                            $(".forgotPassword").slideDown();
                            $(".button2").hide();
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
    
            
});
    