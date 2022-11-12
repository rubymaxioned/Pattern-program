//Pattern 3
var n = 4;
for (var i = 0; i <= n; i++) {
    for (var j = 0; j <= (2 * n) + 1; j++) {
        if ((n - i < j) && (j < n + 1 + i)) {
            document.write("&nbsp&nbsp");
        }
        else {
            document.write("*");
        }
    }
    document.write("<br>");
}

for (var i = 0; i < n; i++) {
    for (var j = 0; j <= (2 * n) + 1; j++) {
        if ((i + 1 < j) && (j < (n * 2) - i)) {
            document.write("&nbsp&nbsp");
        }
        else {
            document.write("*");
        }
    }
    document.write("<br>");
}
