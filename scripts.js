var request = new XMLHttpRequest();

request.open('GET', 'https://equiant.com/api/Billing/{accountNumber}/CategoryBalanceHistory/{year}', true);

request.onload = function() {
    var data = JSON.parse(this.response);

    data.forEach(Billing => {
        console.log(Billing.accountNumber);
        console.log(Billing.year);
    })
}
request.send();