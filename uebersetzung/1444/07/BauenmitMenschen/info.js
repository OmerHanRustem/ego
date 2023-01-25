const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let order = 2023-01-04,
pagePrice = 200,
setting = 100,
words = 7846,
thisPartWords = 3928,
pricing = 2023-01-09,
price = 5400,
dis = 0.15,
contract = new Date ('2023-01-11T23:32:00'),
deadline = 14,
today = new Date (),
advance = 800,
totalPrice = (words / 250) * pagePrice,
discounted = totalPrice - (totalPrice * dis);

function rounding(num) {
    let rounded = 0,
    remainder = num % 100;
    if (remainder >= 50) {
        rounded = num - remainder + 100;
    } else {
        rounded = num - remainder;
    }
    return rounded;
};

document.write('<hr>');

    document.write(
    
    '<div class="other" style="direction:rtl; color:lightgray; margin:40px; font-family:monospace;">'
+	'<ul>'
+	"<li>في هذه الصفحة ترجمة: " + thisPartWords + " كلمة من أصل " + words + " كلمة (" + Math.ceil((thisPartWords * 100) / words) + "%) </li>"
+	"<li> سعر الصفحة: " + pagePrice + "ج بالإضافة إلى خصم " + (dis * 100) + "%</li>"
+	`<li> السعر الإجمالي: ${rounding(totalPrice + setting)}ج، وبعد الخصم: ${rounding(discounted) + setting}ج </li>`
+	"<li> تعوقد في: " + contract.toLocaleDateString('ar-EG', options) + "، الساعة: " + contract.toLocaleTimeString('ar-EG') + "</li>"
+	`<li> على أن يُسلَّم النصف الأول خلال ${deadline} يوما بحد أقصى يوم: ` + addDays(contract, deadline).toLocaleDateString('ar-EG', options) + "</li>"
+	`<li> تاريخ اليوم: ${today.toLocaleDateString('ar-EG', options)}</li>`
+	`<li> العربون المدفوع: ${advance}ج </li>`
+	`<li> المتبقي: ${rounding(discounted - advance) + setting}ج</li>`
+ 	'</div>'
+	'</ul>'
    );

document.write('<hr>');

function addDays(date, days) {
var result = new Date(date);
result.setDate(result.getDate() + days);
return result;
};

// document.write(
// 	'<div style="direction:ltr; color:lightgray; margin:40px; font-family:monospace;">' +
// 	"<h2 style='color:lightgray; margin:10px;'>Translation Info</h2>"
// +	"<li>These are: " + thisPartWords + " out of " + words + " words (" + Math.round((thisPartWords * 100) / words) + "%) </li>"
// +	"<li> Page Price is: " + pagePrice + " EGP with discount of " + (dis * 100) + "%</li>"
// +	`<li> Total Price is: ${rounding(totalPrice + setting)} EGP, after DISCOUNT: ${rounding(discounted) + setting} EGP </li>`
// +	"<li> Contracted in: " + contract.toLocaleDateString('en-UK', options) + "</li>"
// +	`<li> To be delivered in ${deadline} days on: ` + addDays(contract, deadline).toLocaleDateString('en-UK', options) + "</li>"
// +	`<li> Today is: ${today.toLocaleDateString('en-UK', options)}</li>`
// +	`<li> Advance paid: ${advance} EGP </li>`
// + 	'</div>'
// 	);
    