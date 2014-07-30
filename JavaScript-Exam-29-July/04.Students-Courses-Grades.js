function solve(input) {
    var dict = {};
    var uniqueCourses = [];
    for (var i = 0; i < input.length; i += 1) {
        var data = input[i].trim().split('|');
        data = data.filter(Boolean);
        for (var k in data) {
            data[k] = data[k].trim();
        }
        var personName = data[0];
        var courseName = data[1];
        var grade = parseFloat(data[2]);
        var visits = parseFloat(data[3]);
        if (!(courseName in dict)) {
            dict[courseName] = {};
            dict[courseName]["avgGrade"] = grade;
            dict[courseName]["avgVisits"] = visits;
            dict[courseName]["students"] = [personName];
            dict[courseName]["count"] = 1;
            uniqueCourses.push(courseName);
        } else {
            if (dict[courseName].students.indexOf(personName) === -1) {
                dict[courseName].students.push(personName);
            }
            dict[courseName].avgGrade += grade;
            dict[courseName].avgVisits += visits;
            dict[courseName].count += 1;
        }
    }
    for (var i in dict) {
        var avgG = (dict[i].avgGrade / dict[i].count).toFixed(2);
        var avgV = (dict[i].avgVisits / dict[i].count).toFixed(2);
        dict[i].avgGrade = round(avgG);
        dict[i].avgVisits = round(avgV);
        dict[i].students.sort();
        delete dict[i].count;
    }
    uniqueCourses.sort();
    var newDict = {};
    for (var i = 0; i < uniqueCourses.length; i += 1) {
        newDict[uniqueCourses[i]] = dict[uniqueCourses[i]];
    }
    var stringOutput = JSON.stringify(newDict).trim();

    console.log(stringOutput);

    function round(str) {
        for (var i = str.length - 1; i >= 0; i -= 1) {
            if (str.charAt(i) == '0') {
                str = str.substring(0, i);
            } else if (str.charAt(i) == '.') {
                str = str.substring(0, i);
                break;
            } else {
                break;
            }
        }
        return parseFloat(str);
    }
}