function NamedOne(first, last) {
// -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;

}
var n = new NamedOne('John', 'Doe');
Object.defineProperty(n, 'fullName', {
    set fullName (value) {
        [this.firstName, this.lastName] = value.split(' ')
    }
}) 
console.log(n.firstName)
n.firstName = 'Yarik'
console.log(n.firstName)
n.fullName = 'Yar Bond'
console.log(n.lastName)
console.log(n.fullName)
console.log(n.lastName)