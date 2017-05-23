
var months = {
	'1': 'January',
	'2': 'February',
	'3': 'March',
	'4': 'April',
	'5': 'May',
	'6': 'June',
	'7': 'July',
	'8': 'August',
	'9': 'September',
	'10': 'October',
	'11': 'November',
	'12': 'December'
}

var today = new Date();
var date = months[today.getMonth()+1]+' '+today.getDate()+', '+today.getFullYear();
var invoiceNum = 'Invoice #'+today.getMonth()+1+''+today.getDate()+''+today.getDate();

var dateElem = document.getElementById('date');
var invoiceNumEl = document.getElementById('invoiceNum');

dateElem.innerHTML = date;
invoiceNumEl.innerHTML = invoiceNum;
