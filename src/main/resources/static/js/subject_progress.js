function NoMultiChk1(element){
        const checkboxes = document.getElementsByName("box1");
    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
    element.checked = true;
    const checkboxes2 = document.getElementById("chk_c2").checked;
    if (checkboxes2 === true)
    {
        document.getElementById("lated").innerText="13:10"
    }
    else
    {
        document.getElementById("lated").innerText="없음"
    }
}
function NoMultiChk2(element){
    const checkboxes = document.getElementsByName("box2");
    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
    element.checked = true;
}
function NoMultiChk3(element){
    const checkboxes = document.getElementsByName("box3");
    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
    element.checked = true;
}
function NoMultiChk4(element){
    const checkboxes = document.getElementsByName("box4");
    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
    element.checked = true;
}
