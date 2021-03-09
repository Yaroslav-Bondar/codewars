let Obj = {
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    Peter: ['Lucy', 'Kyle']
}

let d = ['Lucas', 'Bill'];
function killer(suspectInfo, d) {
    let count = 0, name;
    for (key in suspectInfo) {
        count = 0;
        suspectInfo[key].forEach(value => {
            d.forEach(element => {
                if (element === value) {
                    count++;
                }
            });
            if (count == d.length) {
                name = key;
            }
        });
    }
    console.log (name);
}
killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']);

/* Description:
Who is the killer?
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

FUNDAMENTALSDICTIONARYDATA STRUCTURESLISTSOBJECTS */