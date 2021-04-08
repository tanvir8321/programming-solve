function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return "Please enter positive nummber";
    } else {
        var meter = 1000 * kilo;
        return meter;
    }
}
var getKilometerToMeter = kilometerToMeter(443);
console.log(getKilometerToMeter);

function budgetCalculator(watch, phone, laptop) {
    var totalPrice = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalPrice;
}
var getBudget = budgetCalculator(2, 5, 7);
console.log(getBudget);

function hotelCost(day) {
    if (day <= 0) {
        return "Negative or zero day not possible.";
    } else {
        if (day <= 10) {
            return day * 100;
        } else if (day <= 20) {
            var afterTenDay = day - 10;
            return (afterTenDay * 80) + (10 * 100);
        } else {
            var afterTwentyDay = day - 20;
            return (afterTwentyDay * 50) + (10 * 80) + (10 * 100);
        }
    }
}
var getHotelCost = hotelCost(100);
console.log(getHotelCost);

function megaFriend(arr) {
    for (var i = 1; i < arr.length; i++) {
        for(var j=0; j<i; j++){
            if(arr[i].length<arr[j].length){
                var temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }

    }
    return arr[arr.length-1];


}

var friends = ['Petey Cruiser', 'Anna Sthesia', 'Paul Molive', 'Anna Mull', 'Mario Speedwagon', 'Gail Forcewind', 'Paige Turner', 'Bob Frapples'];
var getMegaFriend = megaFriend(friends);
console.log(getMegaFriend);