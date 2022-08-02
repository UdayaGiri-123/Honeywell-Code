
module.exports =getdate;

function getdate(){
let today = new Date();
    const options ={
       
        year:'numeric',
        month:'short',
        day:'numeric'
    };
var day = today.toLocaleDateString('en-us',options);

return day;
}

function getday(){
    let today = new Date();
    return today.getDay();
}