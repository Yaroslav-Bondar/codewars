function hidePasswordFromConnection(url) {
    let newStr;
    function convert(y) {
        let passw = '', codePassw = ''; 
        passw = y.replace(/password=/, '');
        for (let i = 0; i < passw.length; i++) {
            codePassw += '*';
        }
        return 'password=' + codePassw;
    }
    newStr = url.replace(/password=.*(?=&user)|password=.*/, convert);
    console.log(newStr);
}
// hidePasswordFromConnection("jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12(3&j45");
hidePasswordFromConnection("jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?password=12(3&j45&user=root");
// "jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****");

/*
https://www.codewars.com/kata/5a726f16373c2ee6c60000db/train/javascript
Description:
We have to create a function that receives a connection string with password included and you have to mask the password i.e. change password by asterisks.

Preconditions:

non empty valid url
password always next to string section password=
assume password will not contain ampersand sign for sake of simplicity
to make it more real it has non ASCII characters
"password=" and "user" will occur only once
empty passwords are not validated but best solutions take empty passwords into account

Example:

input
jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345

output
jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=*****

Extra readings:

https://alvinalexander.com/java/jdbc-connection-string-mysql-postgresql-sqlserver

FUNDAMENTALSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES */