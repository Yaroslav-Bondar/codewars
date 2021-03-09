function communicationModule(packet) {
    let header = '', instruction = '', data1 = '', data2 = '', footer = '', 
    responseId = 'FFFF', resData;
    // разбиваем входные данные для последующего формирования ответа    
    for (let i = 0; i < packet.length; i++) {
        if ( i <= 3 && i >= 0 ) {
            header += packet[i]; 
        }
        if ( i > 3 && i <= 7 ) {
            instruction += packet[i]; 
        }
        if ( i > 7 && i <= 11) {
            data1 += packet[i]; 
        }
        if ( i > 11 && i <= 15) {
            data2 += packet[i]; 
        }
        if ( i > 15 && i <= 19) {
            footer += packet[i]; 
        }       
    }
    // формируем строку ответа для данных data1 и data2, начало
    if (instruction === '0F12') {                     // Addition
        resData = Number(data1) + Number(data2);  
    }
    if (instruction === 'B7A2') {                    // Subtraction
        resData = Number(data1) - Number(data2);  
    }
    if (instruction === 'C3D9') {                    // Multiplication
        resData = Number(data1) * Number(data2);  
    }
    resData = resData.toString().split('');
    for (let i = resData.length, j = 0; i < 4; i++, j++) {
        resData.splice(j, 0, '0');
    }
    // формируем строку ответа для данных data1 и data2, завершено
    // анализ строки ответа для данных data1 и data2, начало
    resData = resData.join('');
    if (Number(resData) > 9999) {       // проверка если результат число больше чем 9999 тогда ответ '9999'
        resData = '9999'
    }
    for (let i = 0; i < resData.length; i++) {   // проверка если результат отрицательное число тогда ответ '0000'
        if (resData[i] === '-') {
            resData = '0000';
            break;
        }
    }
    // анализ строки ответа для данных data1 и data2, завершено
    return header + responseId + resData + '0000' + footer;
}
communicationModule("X7X7B7A201400158L0L0");
// communicationModule("X7X7 B7A2 0140 0058 L0L0");
// communicationModule("H1H10F1200120008F4F4");


/* Description:
We need you to implement a method of receiving commands over a network, processing the information and responding.

Our device will send a single packet to you containing data and an instruction which you must perform before returning your reply.

To keep things simple, we will be passing a single "packet" as a string. Each "byte" contained in the packet is represented by 4 chars.

One packet is structured as below:

Header  Instruction   Data1    Data2   Footer
------   ------       ------   ------  ------
 H1H1     0F12         0012     0008    F4F4
------   ------       ------   ------  ------

The string received in this case would be - "H1H10F1200120008F4F4"

Instruction: The calculation you should perform, always one of the below.
            0F12 = Addition
            B7A2 = Subtraction
            C3D9 = Multiplication
            FFFF = This instruction code should be used to identify your return value.
The Header and Footer are unique identifiers which you must use to form your reply.

Data1 and Data2 are the decimal representation of the data you should apply your instruction to. i.e 0109 = 109.

Your response must include the received header/footer, a "FFFF" instruction code, and the result of your calculation stored in Data1.

Data2 should be zero'd out to "0000".

To give a complete example:

If you receive message "H1H10F1200120008F4F4".
The correct response would be "H1H1FFFF00200000F4F4"
In the event that your calculation produces a negative result, the value returned should be "0000", similarily if the value is above 9999 you should return "9999".

Goodluck, I look forward to reading your creative solutions!

FUNDAMENTALSNETWORKSALGORITHMSSTRINGSGAMES */