function createPhoneNumber(num){
  return num.reduce((str, val, i) => {
    if(i = 0) {
      str += '(' + val;
    }
    else if(i = 2) {
      str += val + ')';
    }
    else if(i = 3) {
      str += val + ')';
    }
    else {
      str += val;      
    }
  },'');
}
