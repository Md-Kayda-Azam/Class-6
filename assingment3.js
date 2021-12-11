const LFWFclub = [
    
    ['Developer Azam', 15, 'member', 'Dhaka'],
    ['Developer Arif', 25, 'member', 'Dhaka'],
    ['Developer Mijan', 45, 'member', 'Dhaka'],
    ['Developer Raju', 15, 'member', 'Dhaka'],
    ['Developer Ayman', 25, 'member', 'Dhaka'],
    ['Developer Arman', 42, 'member', 'Dhaka'],
    ['Developer Adit', 15, 'member', 'Dhaka'],
    ['Developer Mark Zukerberg', 43, 'member', 'Dhaka'],
    ['Developer Sawon', 25, 'member', 'Dhaka'],
    ['Developer Feyeda', 23, 'member', 'Dhaka'],

]

for (let i = 0; i < LFWFclub.length; i++) {


    let age = LFWFclub[i][1];


    function agecal(age) {
        if (age >= 1 && age <= 18) {
            return `sorry  apnar akhon o boys hoy ni .`
        } else if (age >= 18 && age <= 40) {
            return `Hi  Congratulation .`
        } else if (age >= 40 && age <= 100) {
            return `Welcome apner a to dorkar.`
        }
    }


    console.log(`
        Name        : ${LFWFclub[i][0]}
        year        : ${LFWFclub[i][1]}
        Membership  : ${LFWFclub[i][2]}
        location    : ${LFWFclub[i][3]}
        Massage     : ${ agecal(age) }
    `);

}