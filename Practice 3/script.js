var c;
function myFunction() {
    if(c==1) {
        document.getElementById("homeNavUl").style.display="none";
        return c=0;
    }
    else {
        document.getElementById("homeNavUl").style.display="block";
        return c=1;
    }
}

var a;
function search() {
    if(a==1) {
        document.getElementById("form1").style.display="none";
        document.getElementById("icon1").style.display="inline";
        document.getElementById("arrow").style.display="none";
        return a=0;
    }
    else {
        document.getElementById("form1").style.display="table-cell";
        document.getElementById("icon1").style.display="none";
        document.getElementById("arrow").style.display="inline";
        return a=1;
    }
}

var b;
function newSearch() {
    if(b==1) {
    document.getElementById("form2").style.display="none";
    document.getElementById("icon2").style.display="inline";
    document.getElementById("arrow").style.display="none";
    return b=0;
    }
    else {
        document.getElementById("form2").style.display="table-cell";
        document.getElementById("icon2").style.display="none";
        document.getElementById("arrow").style.display="inline";
        return b=1;
    }
}