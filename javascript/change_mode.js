function change_mode(){
    var x = document.getElementsByClassName("edit-mode");
    var y = document.getElementsByClassName("normal-mode");
    var i;
    var display_mode;
    var btn = document.getElementById("change-mode-btn");
    if (btn.value=="Edit"){
        var normal_mode = "none";
        var edit_mode = "initial";
        btn.value = "Save";
        for (i = 0; i < x.length; i++) {
            x[i].value = y[i].innerHTML;
        }
    }
    else{
        var normal_mode = "initial";
        var edit_mode = "none";
        btn.value = "Edit";
        for (i = 0; i < x.length; i++) {
            y[i].innerHTML = x[i].value;
        }
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = edit_mode;
        y[i].style.display = normal_mode;
    }
}