

const student = [

['Azam', 80, 89, 92, 93, 94, 95, 4578125, 252478149654, 'Dhaka' ],
['Arif', 80, 89, 92, 93, 94, 95, 2145879, 25414789654, 'Cumilla'  ],
['Raju', 80, 89, 92, 93, 94, 95, 3521472, 25474189654, 'Rangpur' ],
['Mijan', 80, 89, 92, 93, 94, 95, 9632105, 25954789654, 'Dinajpur' ],
['Arman', 80, 89, 92, 93, 94, 95, 7458712, 25478479654, 'Dhaka' ],
['Shuwan', 80, 89, 92, 93, 94, 95, 4781204, 47254789654, 'Cumilla' ],
['Achem', 80, 89, 92, 93, 94, 95, 1204789, 25844789654, 'Rangpur' ],
['Sujon', 80, 89, 92, 93, 94, 95, 7485169, 25304789654, 'Dinajpur' ],
['Rifat', 80, 89, 92, 93, 94, 95, 7489567, 25784789654, 'Dhaka' ],
['Nayem', 80, 89, 92, 93, 94, 95, 7410258, 25914789654, 'Cumilla' ],
]

for (let i = 0; i < student.length; i++){

    let bn = student[i][1];
    let en = student[i][2];
    let math = student[i][3];
    let ss = student[i][4];
    let s = student[i][5];
    let rel = student[i][6];



function Kaydaazam(){


    this.grade = function (marks){
        
        if( marks >= 0 && marks <= 32 ){
        return 'F';
        }
        else if(marks >=32 && marks < 40 ){
        return 'D';
        }
        else if(marks >=40 && marks < 50 ){
        return 'C';
        }
        else if(marks >=50 && marks < 60 ){
        return 'B';
        }
        else if(marks >=60 && marks < 70 ){
        return 'A-';
        }
        else if(marks >=70 && marks < 80 ){
        return 'A';
        }
        else if(marks >=80 && marks <= 100 ){
        return 'A+';
        }
        
    }
        


        this.gpa = function (marks){
            
            if( marks >= 0 && marks <= 32 ){
                return 0;
            }
            else if(marks >=32 && marks < 40 ){
                return  1;
            }
            else if(marks >=40 && marks < 50 ){
                return 2;
            }
            else if(marks >=50 && marks < 60 ){
                return  3;
            }
            else if(marks >=60 && marks < 70 ){
                return  3.5;
            }
            else if(marks >=70 && marks < 80 ){
                return  4;
            }
            else if(marks >=80 && marks <= 100 ){
                return  5;
            }
            
         }
            
            
this.totalMark = function ( bn, en, math, s, ss, rel ){

    let totalMark = ( bn + en + math + s + ss + rel );
    
    let cgpa = totalMark / 6;
    
    if( bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0 ){ 

    return "You are a Failed"

    }else{
    return` your Total CGPA ${ cgpa.toFixed(2) } And your total Grade ${this.totalgrade(cgpa)}`
    }
    
    }
    
    
    
    this.totalgrade = function(cgpa){
    if( cgpa >= 0 && cgpa < 1){
    return 'F';
    }
    else if( cgpa >= 1 && cgpa < 2){
    return 'D';
    }
    else if( cgpa >= 2 && cgpa < 3){
    return 'C';
    }
    else if( cgpa >= 3 && cgpa < 3.5){
    return 'B';
    }
    else if( cgpa >= 3.5 && cgpa < 4){
    return 'A-';
    }
    else if( cgpa >= 4 && cgpa < 5){
    return 'A';
    }
    else if( cgpa == 5){
    return 'A+';
    }
    }
    
    
            
        
}

// This is  Constactor Function Var
let azam = new Kaydaazam;

console.log(`


Name      :${ student[i][0] }
Roll      :${ student[i][7] }
Reg       :${ student[i][8] }
Location  :${ student[i][9] }
-------------------------------------------------------------------

No              Subject          Mark       Grade                       GPA

01              Bangla           ${ bn }    ${ azam.grade(bn) }        ${ azam.gpa(bn)}
02              Engliah          ${ en }    ${ azam.grade(en) }        ${ azam.gpa(en)}
03              Math             ${ math }  ${ azam.grade(math) }      ${ azam.gpa(math)}
04              Social Science   ${ s }     ${ azam.grade(s) }         ${ azam.gpa(s)}
05              Science          ${ ss }    ${ azam.grade(ss) }        ${ azam.gpa(ss)}
06              Religion         ${ rel }   ${ azam.grade(rel) }       ${ azam.gpa(rel)}
--------------------------------------------------------------------
                             ${ azam.totalMark( azam.gpa(bn), azam.gpa(en), azam.gpa(math), azam.gpa(s), azam.gpa(ss), azam.gpa(rel),)}





     `);

}












