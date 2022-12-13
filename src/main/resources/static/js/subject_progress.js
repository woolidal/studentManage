
function progCheck1() {
    const progCheck = document.getElementById("chk_1").checked;
    if (progCheck === true) {
        const date = new Date();
        document.getElementById("pro1").innerText = date.toLocaleTimeString('ko-kr');
    } else {
        document.getElementById("pro1").innerText = "-";
    }
}

function progCheck2() {
    const progCheck = document.getElementById("chk_2").checked;
    if (progCheck === true) {
        const date = new Date();
        document.getElementById("pro2").innerText = date.toLocaleTimeString('ko-kr');
    } else {
        document.getElementById("pro2").innerText = "-";
    }
}

function progCheck3() {
    const progCheck = document.getElementById("chk_3").checked;
    if (progCheck === true) {
        const date = new Date();
        document.getElementById("pro3").innerText = date.toLocaleTimeString('ko-kr');
    } else {
        document.getElementById("pro3").innerText = "-";
    }
}

function progCheck4() {
    const progCheck = document.getElementById("chk_4").checked;
    if (progCheck === true) {
        const date = new Date();
        document.getElementById("pro4").innerText = date.toLocaleTimeString('ko-kr');
    } else {
        document.getElementById("pro4").innerText = "-";
    }
}

