const file = "guestbook.json";


var results = '<table border="1" ';

for (var i=0; i < file.length; i++) {
   results +=
   '<tr>' +
   '<td>' + file[i].username + '</td>' +
   '<td>' + file[i].country + '</td>' +
   '<td>' + file[i].message + '</td>' +
   '</tr>';
}

console.log(results);
