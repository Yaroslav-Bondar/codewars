function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.getName = function() { return this.name; }
}
function declareWinner(fighter1, fighter2, firstAttacker) {
    // while (fighter2.health > 0 && fighter1.health > 0) {
    if (fighter1.name == firstAttacker) {
        // fighter2.health > 0 && fighter1.health > 0
        while (true) {
            fighter2.health = fighter2.health - fighter1.damagePerAttack
            if(fighter2.health <= 0)
                break
            fighter1.health = fighter1.health - fighter2.damagePerAttack
            if(fighter1.health <= 0)
                break
        }
    }
    else {
        // fighter2.health > 0 && fighter1.health > 0
        while (true) {
            fighter1.health = fighter1.health - fighter2.damagePerAttack
            if(fighter1.health <= 0)
                break
            fighter2.health = fighter2.health - fighter1.damagePerAttack
            if(fighter2.health <= 0)
                break
        }     
    }
    let wins = fighter2.health > 0 ? fighter2.getName() : fighter1.getName() 
    console.log(wins)
    return "Write your code here";
}
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
// declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")
/* https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/discuss
Description:

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
Example:

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

Fundamentals
Games
Algorithms
Classes
Basic Language Features
Object-oriented Programming
 */