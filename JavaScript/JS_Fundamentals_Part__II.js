var sumXY = function (x,y){
    var sum = 0;
    for(var i = x; i <= y; i++){
        sum += i;
    }
    return sum;
}

var findMin = function (arr){
    var min = arr[0];
    for(var i = 1; i <= arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

var findAvg = function (arr){
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
// ****************************************************************************
var myObject = {
    sumXY: function (x,y){
        var sum = 0;
        for(var i = x; i <= y; i++){
            sum += i;
        }
        return sum;
    },
    findMin: function (arr){
        var min = arr[0];
        for(var i = 1; i <= arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    },
    findAvg: function (arr){
        var sum = arr[0];
        for(var i = 1; i < arr.length; i++){
            sum += arr[i];
        }
        return sum / arr.length;
    }
}

// ****************************************************************************

var person = {
    name : "Saranda",
    distance_traveled : 0,
    say_name : function(){
        console.log(person.name);
    },
    say_something : function(phrase){
        console.log(`${person.name} says ${phrase}`);
    },
    walk : function(){
        console.log(`${person.name} is walking`);
        person.distance_traveled += 3;
        return person;
    },
    run : function(){
        console.log(`${person.name} is running`);
        person.distance_traveled += 10;
        return person;
    },
    crawl : function(){
        console.log(`${person.name} is crawling`);
        person.distance_traveled += 1;
        return person;
    }
}
// person.say_something("I love JS objects");
console.log(person.distance_traveled);
person.walk().run().crawl().run().crawl();
console.log(person.distance_traveled);
