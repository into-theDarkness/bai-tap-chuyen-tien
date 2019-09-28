function chuyentienday() {
    let nhap1 = Number(document.getElementById("nhap1").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = 0;
    if ( from == "VND" && to =="USD"){
        result = nhap1/23000;
        document.getElementById("play").innerHTML = result;
    }
    else if (from == "USD" && to == "VND"){
        result = nhap1*23000;
        document.getElementById("play").innerText = result;
    }
    else result = nhap1;
    document.getElementById("play").innerHTML = result;
}