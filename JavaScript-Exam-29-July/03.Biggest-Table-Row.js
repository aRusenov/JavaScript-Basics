function solve(input) {
    var maxSum = -9007199254740991;
    var maxOutput = '';
    var foundData = false;
    for (var i = 2; i < input.length - 1; i += 1) {
        //var data = input[i].replace(/<tr>/g, '').replace(/<\/tr>/g, '').split(/<td>(.+?)<\/td>/g);
        var data = input[i].split(/[^0-9,.-]/g);
        data = data.filter(Boolean);
        var currentSum = 0;
        var nums = [];
        for (var p = 0; p < data.length; p += 1) {
            if (data[p] !== '-') {
                var number = parseFloat(data[p]);
                currentSum += number;
                nums.push(data[p]);
                foundData = true;
            }
        }
        if (currentSum > maxSum && foundData) {
            maxSum = currentSum;
            maxOutput = maxSum + ' = ' + nums.join(' + ');
        }
    }

    if (!foundData) {
        console.log('no data');
    } else {
        console.log(maxOutput);
    }
}