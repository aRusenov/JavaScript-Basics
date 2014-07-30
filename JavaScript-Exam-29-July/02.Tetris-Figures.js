function solve(input) {
    var matrix = [];
    var iS = 0, lS = 0, jS = 0, oS = 0, zS = 0, sS = 0, tS = 0;
    for (var i = 0; i < input.length; i += 1) {
        var row = [];
        for (var j = 0; j < input[i].length; j += 1) {
            row.push(input[i].charAt(j));
        }
        matrix.push(row);
    }

    for (var i = 0; i < matrix.length; i += 1) {
        for (var j = 0; j < matrix[i].length; j += 1) {
            iS += checkShape(i, j, i + 1, j, i + 2, j, i + 3, j);
            lS += checkShape(i, j, i + 1, j, i + 2, j, i + 2, j + 1);
            jS += checkShape(i, j, i + 1, j, i + 2, j, i + 2, j - 1);
            oS += checkShape(i, j, i + 1, j, i + 1, j + 1, i, j + 1);
            zS += checkShape(i, j, i, j + 1, i + 1, j + 1, i + 1, j + 2);
            sS += checkShape(i, j, i, j + 1, i - 1, j + 1, i - 1, j + 2);
            tS += checkShape(i, j, i, j + 1, i, j + 2, i + 1, j + 1);
        }
    }

    console.log('{"I":' + iS + ',"L":' + lS + ',"J":' + jS + ',' +
        '"O":' + oS + ',"Z":' + zS + ',"S":' + sS + ',"T":' + tS + '}');

    function checkShape(i1, j1, i2, j2, i3, j3, i4, j4) {
        if ((i1 < 0 || i1 >= matrix.length) || (i2 < 0 || i2 >= matrix.length)
            || (i1 < 0 || i1 >= matrix.length) || (i4 < 0 || i4 >= matrix.length) ||
            (j1 < 0 || j1 >= matrix[0].length) || (j2 < 0 || j2 >= matrix[0].length)
            || (j1 < 0 || j1 >= matrix[0].length) || (j4 < 0 || j4 >= matrix[0].length)) {
            return 0;
        } else if (matrix[i1][j1] === 'o' && matrix[i2][j2] == 'o'
            && matrix[i3][j3] === 'o' && matrix[i4][j4] === 'o') {
            return 1;
        } else {
            return 0;
        }
    }
}