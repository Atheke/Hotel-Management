
const fs = require('fs');
const jsonString = fs.readFileSync('data.txt', 'utf-8');
const data = JSON.parse(jsonString);

let nextfilter =new Set();
let filter = {};

function findDeease(patientSym){
    try{
    filter={};
    for(Des in data){
        let count =0;
          for(sym in patientSym){
               data[Des].forEach((desSym,index)=>{
                   const temp1=desSym.toLowerCase();
                   const temp2=patientSym[sym].toLowerCase();
                   if(temp1.includes(temp2)||temp2=='none'){
                        count++;
                   }
                }); 
                const comp=(count/patientSym.length)*100;
                console.log(comp);
                if(comp>70){
                     filter[Des]=data[Des];
                    console.log((data[Des] ,count/patientSym.length)*100);
                }
           }
    }
  
      if(patientSym[patientSym.length-1]=='none'||Object.entries(filter).length === 1){
         console.log("hello",filter);
         return filter; 
      }
    //   if(Object.entries(filter).length === 1) 
    //         return  Object.values(filter);
    //   }   
      console.log(filter);
      return (nextLayer(filter,patientSym));
    }catch(err){
    console.error(err);
    }
}

    
function nextLayer(filter,t){
    try{
    nextfilter.clear();
    for(i in filter){
        filter[i].forEach(k => {
        if(!t.includes(k)){
             nextfilter.add(k);
            }
        });
    }
    let tmp=Array.from(nextfilter)
    console.log(typeof tmp,tmp);
    return tmp;
    }catch(err){
    console.error(err);
    }
}



function checker (req) {
    try{
    const systom = req;
    console.log(systom);
    //console.log(t);
    let ans=findDeease(systom);
    return ans;
     }catch(err){
    console.error(err);
    }
}


module.exports = {
    checker,
};

