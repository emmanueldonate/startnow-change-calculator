
$('#calculate-change').click(handleClickEvent);

function handleClickEvent() {

    var amountDue = parseFloat($('#amount-due').val());
    var amountReceived = parseFloat($('#amount-received').val());

//         6.64           =     40 - 33.36
    var totalAmountDue = (amountReceived - amountDue) *100;

var changeDue = {
    dollars: 100,
    quarters: 25,
    dimes: 10,
    nickels: 5,
    pennies: 1,
}

 //  664    =              (6.64 / 100) *100
var dollar = Math.floor(totalAmountDue/changeDue.dollars);
//    64          =   664  - (   6 x 100 )
    totalAmountDue = totalAmountDue -(dollar * changeDue.dollars);

var quarter = Math.floor(totalAmountDue/changeDue.quarters);
    totalAmountDue = totalAmountDue -(quarter * changeDue.quarters);

var dime = Math.floor(totalAmountDue/changeDue.dimes);
    totalAmountDue = totalAmountDue -(dime * changeDue.dimes);

var nickel = Math.floor(totalAmountDue/changeDue.nickels);
    totalAmountDue = totalAmountDue -(nickel * changeDue.nickels);

var penny = Math.round(totalAmountDue/changeDue.pennies);
    totalAmountDue = totalAmountDue -(penny * changeDue.pennies);

    $('#dollars-output').text(dollar);
    $('#quarters-output').text(quarter);
    $('#dimes-output').text(dime);
    $('#nickels-output').text(nickel);
    $('#pennies-output').text(penny);
}



 