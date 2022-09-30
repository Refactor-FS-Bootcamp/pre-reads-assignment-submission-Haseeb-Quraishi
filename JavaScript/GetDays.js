function getDays(d1,d2) {
    //console.log(d2 +" >> "+d1);
    var t2 = d2.getTime();
    var t1 = d1.getTime();
    // var days = Math.floor((t2-t1)/(24*3600*1000*7)); //week
    var days = Math.floor((t2-t1)/(24*3600*1000*7));
    
    return days;
}

const d1 = new Date(2022,09,11);
const d2 = new Date(2022,09,24);
console.log(getDays(d1,d2));