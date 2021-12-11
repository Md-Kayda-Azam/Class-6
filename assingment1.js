
const devs = [
    ['Developer Azam', 35 , 'Mern', 8000,'Dhaka'],
    ['Developer Mijan', 22 , 'Java',7000,'Dinajpur'],
    ['Developer Raju', 21 , 'Django', 6000, 'Rangpur'],
    ['Developer Arif', 18 , 'Laravel', 8000, 'Khulna'],
    ['Developer Abida', 15 , 'Mern', 6000, 'Dinajpur'],
    ['Developer Shawon', 16 , 'Java', 8000, 'Rangpur'],
    ['Developer Komol', 30 , 'Django', 7000,'Khulna'],
    ['Developer Amol', 35, 'Laravel', 6000, 'Dhaka'],
    ['Developer Feyeda', 37, 'Wordpress', 8000, 'Dinajpur'],

]

let  total= 0;

for (let i = 0; i < devs.length; i++) {
        
    total = total + devs[i][3];

    console.log(`
    
    Name     = ${devs[i][0]}
    Age      = ${devs[i][1]}
    Skills   = ${devs[i][2]}
    Location = ${devs[i][4]}
    Sellary  = ${devs[i][3]}
--------------------------------------------------
    `);

    
}
  console.log(` Total sellary = ${total}$`)