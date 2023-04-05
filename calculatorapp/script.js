function dis(val){
    document.getElementById("display").value += val;
}
function clr(){
    document.getElementById("display").value = "";
}
function result(){
    let z = document.getElementById("display").value;
    let ans = eval(z);
    document.getElementById("display").value = ans;
}
function del(){
    let z = document.getElementById("display");
    z.value = z.value.slice(0,-1);
}