function solve(input) {
    var prices = [];
    for (var i = 0; i < input.length; i += 1) {
        prices.push(parseFloat(input[i]).toFixed(2));
    }

    var lastPrice = parseFloat(prices[0]);
    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    printRow(prices[0], 'fixed');
    for (var i = 1; i < input.length; i += 1) {
        var num = parseFloat(prices[i]);
        if (num > lastPrice) {
            printRow(prices[i], 'up');
        } else if (num < lastPrice) {
            printRow(prices[i], 'down');
        } else {
            printRow(prices[i], 'fixed');
        }
        lastPrice = prices[i];
    }
    console.log('</table>');
    function printRow(num, img) {
        console.log('<tr><td>' + num + '</td><td><img src="' + img + '.png"/></td></td>');
    }
}