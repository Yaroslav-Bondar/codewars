String.prototype.trim = function() {
    let tmp = this;
    tmp = tmp.match(/\w.*\w/);
    if (tmp === null) {
        return '';
    }
    else {
        return tmp[0];
    }
};
// '    '.trim();
'str'.trim();