//task a-b
// function loadImage(success,error){
//     let a = document.createElement("img");
//     a.src = 'back.jpg';
//     document.body.appendChild(a);

//     a.onload = success;
//     a.onerror = error;
// }

// loadImage(() => {
//     console.log('image loaded')},
//      ()=>{
//         console.log('load failed');
//     });
// ;



//task c
// function success1(){
//     console.log("Loaded");
// }

// function error1(){
//     console.log("Failed");
// }

// async function loadImage(){
//     let a = document.createElement("img");
//     a.src = 'back.jpg';
        
//     //@ts-ignore 
//     //start of task d
//     await new Promise( (resolve, reject)=>{
//         setTimeout(resolve, 12000);
//         a.onerror = () => reject(new Error("error while loading"));
//     });
//     //end of task d
    
//     document.body.appendChild(a);
//     return a;

// }
// let promise:any = loadImage();
// promise.then(success1, error1);
// promise.then(success1).then(success1).catch(error1);
// promise.finally(()=>console.log("done"));7





//task e
function success1(){
    console.log("Loaded");
}

function error1(){
    console.log("Failed");
}

async function loadImage(){
    let a = document.createElement("img");
    let b = document.createElement("img");
    let c = document.createElement("img");
    a.src = 'back.jpg';
    b.src = '007gNgEOly1gihvnjucqlj31sg1sghdt.jpg';
    c.src = '118385103_114625810361587_8571102593084231161_n.jpg';
    let array: Array<HTMLImageElement> = [a,b,c];
    //@ts-ignore 
    await new Promise( (resolve, reject)=>{
        setTimeout(resolve, 5000);
        a.onerror = () => reject(new Error("error while loading"));
        b.onerror = () => reject(new Error("error while loading"));
        c.onerror = () => reject(new Error("error while loading"));
    });
    
    document.body.appendChild(a);
    document.body.appendChild(b);
    document.body.appendChild(c);
    return  array;

}
let promise:any = loadImage();
promise.then(success1, error1);
//promise.then(success1).then(success1).catch(error1);
promise.finally(()=>console.log("done"));
