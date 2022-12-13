
function progCheck1() {
    const progCheck = document.getElementById("chk_1").checked;
    if (progCheck === true) {
        const date = new Date();
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const dateStr = year + '/' + month + '/' + day;
        document.getElementById("pro1").innerText = dateStr;
    } else {
        document.getElementById("pro1").innerText = "-";
    }
}

function progCheck2() {
    const progCheck = document.getElementById("chk_2").checked;
    if (progCheck === true) {
        const date = new Date();
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const dateStr = year + '/' + month + '/' + day;
        document.getElementById("pro2").innerText = dateStr;
    } else {
        document.getElementById("pro2").innerText = "-";
    }
}

function progCheck3() {
    const progCheck = document.getElementById("chk_3").checked;
    if (progCheck === true) {
        const date = new Date();
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const dateStr = year + '/' + month + '/' + day;
        document.getElementById("pro3").innerText = dateStr;
    } else {
        document.getElementById("pro3").innerText = "-";
    }
}

function progCheck4() {
    const progCheck = document.getElementById("chk_4").checked;
    if (progCheck === true) {
        const date = new Date();
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const dateStr = year + '/' + month + '/' + day;
        document.getElementById("pro4").innerText = dateStr;
    } else {
        document.getElementById("pro4").innerText = "-";
    }
}

