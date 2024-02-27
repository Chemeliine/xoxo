var player = "O";

function clickBox(box){
    
    if (box.innerText != "") return;
    box.innerText = player;

    // if (player == "O"){
    //     player = "X";
    // }
    // else{
    //     player = "O";
    // }

    player == "O" ? player = "X" : player = "O";

}