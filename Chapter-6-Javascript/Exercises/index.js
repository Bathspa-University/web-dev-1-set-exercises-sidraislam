function calculateTotal() {
    var costPerLiter = parseFloat(document.getElementById('cost').value);
    var litersPurchased = parseFloat(document.getElementById('liters').value);

    
    var totalCost = costPerLiter * litersPurchased;

   
    document.getElementById('totalCost').innerText = 'Total Cost: $' + totalCost.toFixed(2);
}