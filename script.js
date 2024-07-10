document.getElementById("calculateIncludingVAT").addEventListener("click", function () {
    var totalAmount = parseFloat(document.getElementById("totalAmount").value);
    var vatRate = parseFloat(document.getElementById("vatRate").value);

    if (!isNaN(totalAmount) && !isNaN(vatRate)) {
        var vatAmount = totalAmount * (vatRate / 100);
        var amountIncludingVAT = totalAmount + vatAmount;

        document.getElementById("result").innerHTML = `
            VAT Amount: ZAR ${vatAmount.toFixed(2)}<br>
            Total Amount (including VAT): ZAR ${amountIncludingVAT.toFixed(2)}
        `;
    } else {
        document.getElementById("result").innerHTML = "Please enter valid values.";
    }
});

document.getElementById("calculateExcludingVAT").addEventListener("click", function () {
    var totalAmount = parseFloat(document.getElementById("totalAmount").value);
    var vatRate = parseFloat(document.getElementById("vatRate").value);

    if (!isNaN(totalAmount) && !isNaN(vatRate)) {
        var vatAmount = totalAmount * (vatRate / (100 + vatRate));
        var amountExcludingVAT = totalAmount - vatAmount;

        document.getElementById("result").innerHTML = `
            VAT Amount: ZAR ${vatAmount.toFixed(2)}<br>
            Total Amount (excluding VAT): ZAR ${amountExcludingVAT.toFixed(2)}
        `;
    } else {
        document.getElementById("result").innerHTML = "Please enter valid values.";
    }
});
