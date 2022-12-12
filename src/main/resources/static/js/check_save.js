document.getElementById("my-button_save").onclick = function(chk) {
    let num = document.getElementById("chk_k1").checked;
    localStorage.setItem("chk1", num);
    if (localStorage.getItem("chk1") === true)
    {
        document.getElementById("chk_k1").checked ;
    }
}