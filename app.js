function totalHarga() {
    var input = document.getElementsByName("item");
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            total += parseFloat(input[i].value);
        }
    }
    document.getElementsByName("total")[0].value = "Rp. " + total.toFixed(3);
}