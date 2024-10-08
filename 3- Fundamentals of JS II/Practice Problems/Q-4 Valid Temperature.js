//Convert the temperature in farenheight
//Calculate if the temperature is above 86 or not
function temperatureInCelcius(temperatureInCelsius){
     
    let f = (temperatureInCelsius * (9/5)) + 32;
    let isHot = f > 86;
return isHot;
    }