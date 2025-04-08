const fs = require('fs');
const jsonString = fs.readFileSync('data2.txt', 'utf-8');
const data = JSON.parse(jsonString);
// console.log(data);
let filter = {};
let filter2 ={}; 
let nextsym= new Set();
let maxgotmatch= {}

function getsym(patsym){
    try{
  filter={};
  for( des in data ){
    let count = 0;
    for( k in patsym ){
        for( item in data[des] ){
            if(item !=='overall_severity'){
                const temp1 = patsym[k].toLowerCase();
                const temp2 = (item).toLowerCase();
                if(temp2.includes(temp1)){
                    //console.log(temp1,temp2);
                    count++;
                    
               }
            }
            let len = patsym.length;
            if(patsym[patsym.length-1]=='none'){
                    len--;
            }
            const comp=(count/len)*100;
            if(comp>=60){
                console.log(comp);
                filter[des]=data[des];
              // console.log((data[des],count/patsym.length)*100);
           }
        }
    }
}

    console.log(filter);
    return filter;
}catch(err){
    console.error("the bug in the filter");
 }
}


function nextfilter(t,serv,patsym){
    try{
    filter2={};
    for(des in t){
        for(item in t[des]){
            if(item==='overall_severity'&&t[des][item]<=serv+0.9&&t[des][item]>=(serv-4)){
                console.log(t[des][item],serv);
                filter2[des] = t[des];
            }
       }
    }
       if(patsym[patsym.length-1]=='none'||Object.entries(t).length <= 1){
        console.log("hello",filter2);
        return filter2; 
     }
    console.log(filter2);
   return filter2;
}catch(err){
    console.error("the bug in the filter 2");
 }
}


function nextlayer(t,fil){
    try{
    nextsym.clear();
    console.log(fil);
    for(i in fil){
       for(k in fil[i] ) {
        if(!t.includes(k)){
             nextsym.add(k);
            }
        };
    }
    let tmp=Array.from(nextsym)
    console.log("je;;",typeof tmp,tmp);
    return tmp;
}catch(err){
    console.error("the nextlaryer is not working");
 }
}



function checker(patsym,serv){
    try{
    let t = getsym(patsym);
    let k = nextfilter(t,serv,patsym);
    if(patsym[patsym.length-1]=='none'||Object.entries(k).length <= 1){
        return k;
    }
    let ans = nextlayer(patsym,k);
    return ans;
}catch(err){
    console.error("ther checker have a proble");
 }
}

module.exports ={
    checker,
}


