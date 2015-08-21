


function ShowWelcome() {
    $(".welcomediv").removeClass("hide");
    $(".boardlist").addClass("hide");
   }

function HideWelcome() {
    $(".welcomediv").addClass("hide");
    $(".boardlist").removeClass("hide");
}

function ShowNoBoards() {
    $(".noboarddiv").removeClass("hide");
    $(".boardlist").addClass("hide");
  }

function HideNoBoards() {
    $(".noboarddiv").addClass("hide");
    $(".boardlist").removeClass("hide");
}

function OnIndexLoad() {

    var firstTime = localStorage.getItem("hasseenapp");

    if (firstTime == null || firstTime == false) {
        ShowWelcome();
    }
    else {
        
        var boards;
        if (localStorage["boards"]) {
            boards = JSON.parse(localStorage["boards"]);
        }

        var boardid = parseInt(localStorage["currentboardid"]);

        if (boardid != null && boardid > 0) {
            
            window.location = "board.html";
        }
        else if (typeof boards == 'undefined' || boards == null || boards.length < 1) {

            HideWelcome();
            ShowNoBoards();
          
        }
        else {
           
            HideWelcome();
            
        }

    }
}


function GetParameterValues(param, currUrl) {
    var url = currUrl.slice(currUrl.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] == param) {
            return urlparam[1];
        }
    }
}


function handleOpenURL(url) {
    setTimeout(function () {

        var sbId = GetParameterValues('sbid', url);
        if (sbId > 0) {
            localStorage.setItem("currentboardid", sbId);
        }

        OnIndexLoad();

        var clearLocalStorage = GetParameterValues('clearlocalstorage', url);

        if (clearLocalStorage == "true") {
            console.log("remove");
            localStorage.clear();
        }
    }, 200);

}


function OpenBoard(id) {

    localStorage.setItem("currentboardid", id);

    window.location = "board.html";
}

