function Substring(str1, str2) {

  var a = new Array(str1.length + 1);
  for (var i = 0; i <= str1.length; i++) {
    a[i] = new Array(str2.length + 1);
    for (var j = 0; j <= str2.length; j++) {
      a[i][j] = 0;
    }
  }
  var result = "";
  var maxLength = 0;
  for (var i = 1; i <= str1.length; i++) {
    for (var j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        a[i][j] = a[i - 1][j - 1] + 1;
        if (a[i][j] > maxLength) {
          maxLength = a[i][j];
          result = str1.substring(i - maxLength, i);
        }
      }
    }
  }
  return result;
}
