function makeSentence(parts) {
    let res;
    res = parts.join(' ');
    res = res.replace(/( ,)/g, (x, p1) => {
        return p1 = ','
    });
    res = res.replace(/\n/g, (x) => {
        return x = '.'
    });
    console.log(res);
}
makeSentence(['hello', 'world ']);
// makeSentence(['hello', ',', 'my', 'dear']);