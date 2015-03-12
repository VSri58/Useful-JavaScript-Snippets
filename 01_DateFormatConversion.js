/** Convert Date Format from M/D/YYYY to YYYYMMDD **/

var ipDate = "2/3/2014";

function convertDateFormat(date){

    var dtStr = ipDate.split("/");
    if (dtStr[0].length==1){dtStr[0]="0"+dtStr[0]};
    if (dtStr[1].length==1){dtStr[1]="0"+dtStr[1]};
    
    return(dtStr[2]+dtStr[1]+dtStr[0]);
}

console.log(convertDateFormat(ipDate));