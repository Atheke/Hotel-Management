const datadb= require('./achecker.disease');


async function allthebest(req,count,nam)
    {

        const allthedata= await datadb.find({});
        
        console.log(allthedata);
        // console.log(clas);
        let ans1=[];
        let ans2=[];
        if(count==1){
            allthedata.forEach((thing)=>{
                ans1.push(thing.name);
            }) 
            // req.session.n=nam; 
            return [ans1];
        }
        else if(count==2){

                const t = req.body.symptoms[0];
                //  req.session.n=nam;
                // const ans2=[];
                console.log(t,count);
                allthedata.forEach((thing)=>{
                    if(thing.name==t){
                        console.log(t);
                        ans2=thing.lookseenfeel;
                    }
                    console.log(ans2);
                }) ;
                req.session.n=nam;
                return ans2;
            }
        else if(count==3){
            let ans;

            // na=req.session.n;
            // console.log(na);
            data=req.body.symptoms;
            // console.log(data,"llll");
            
            allthedata.forEach((thing)=>{
                 if(thing.name==nam){
                    //  console.log(nam)
                    thing.classification.forEach((m)=>{
                        let len=m.sing.length;
                        let t = 0;
                         console.log(m,"kkkk");
                        m.sing.forEach((h)=>{
                            // console.log(h,"yyyyy");
                            data.forEach((ti)=>{
                                // console.log(ti,"dfdd");
                                if(h===ti){
                                    t++;
                                     console.log(ti,t);
                                }
                            })
                        })
                        
                        console.log(len,t);

                        if(t===len){
                            console.log("sdfs")   
                            const a={
                                nam:m.nameofdiease,
                                treatment:m.treatment,
                                end:"end"
                            }
                            console.log(a,"xcxfs");
                            ans=a;
                            return a;
                        }
                    });
                }
        })
        if(ans){
            return ans;
        }
        return "no thing i find out";
    }
}

module.exports ={
    allthebest,
}