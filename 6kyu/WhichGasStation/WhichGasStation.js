var obj = {
    // "gas1": {"price": 1.5, "distance": 50},
    // "gas2": {"price": 2.0, "distance": 75}
  };
var currentFuel = 35;
var fuelConsumption = 7.5;

function gasStation(obj, currentFuel, fuelConsumption){
    //happy coding ^.^
    let priceObj,distanceObj,ConsumptionToStation,costToStation,arrCost=[],costObj={},minCost;
    for (let keyOut in obj) {
        console.log("keyOut---",keyOut);
        // if (keyOut==undefined){
        //     return undefined;
        // }
        for (let keyIn in obj[keyOut]) {
            keyIn == 'price' ? priceObj=obj[keyOut]["price"] : distanceObj=obj[keyOut]["distance"];
        }
        ConsumptionToStation = (distanceObj/100)*fuelConsumption; 
        if (ConsumptionToStation>currentFuel) {
            return undefined;
        }
        costToStation=((60-(currentFuel-ConsumptionToStation))+(ConsumptionToStation))*priceObj;
        costObj[keyOut]=costToStation;
        arrCost.push(costToStation);
    }
    if (ConsumptionToStation==undefined) {
        console.log('---',undefined);
        return undefined;
    }
    // minCost=arrCost.reduce((prev,current)=>{
    //     return prev>current ? prev=current : prev;
    // });
    // console.log(minCost);
    for (let key in costObj) {
        if (costObj[key]==minCost) {
            console.log(key);
            // return key;
        }
    }
    console.log(arrCost);
    console.log(costObj);
}
gasStation(obj, currentFuel, fuelConsumption);