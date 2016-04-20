exports.countryCode = function(countryName){
    var code;
    switch(countryName){
        case 'IND' :code = 91; break;
        case 'US' : code = 10; break;
        default : code = 0;
    }
    return code;
}