// function runningLogger(){
//     console.log("I am running!");
// }
// runningLogger();
// ****************************************************************************

// function multiplyByTen(x){
//     var result = x * 10;
//     return result;
// }
// console.log(multiplyByTen(5));
// ****************************************************************************

function stringReturnOne(){
    return "cat";
}

function stringReturnTwo(){
    return "dog";
}
// console.log(stringReturnOne());
// console.log(stringReturnTwo());
// ****************************************************************************

// function caller(param){
//     if(typeof param === 'function'){
//         console.log(param());
//     }
// }
// caller("Three");
// caller(stringReturnTwo);
// ****************************************************************************

function myDoubleConsoleLog(param1,param2){
    if(typeof param1 === 'function'){
        console.log(param1());
    }
    if(typeof param2 ==='function'){
        console.log(param2());
    }
}
// myDoubleConsoleLog(stringReturnTwo,stringReturnOne);
// ****************************************************************************

function caller2(param){
    console.log("starting");
    setTimeout(function(){
        if(typeof param === 'function'){
            param(stringReturnOne,stringReturnTwo);
        }
    },2000);
    console.log("ending?");
    return "interesting"
}
caller2(myDoubleConsoleLog);
// ############################################################################
// Another way
/*
  Goal for these first 'easy' difficulty level assignments:
  returns versus void returns
*/

function runningLogger(){
  console.log("I am running");
}

function multiplyBy10(numb){
  if (typeof(numb) == "number"){
    return numb*10;
  }
}

function stringReturnOne(){
  return "cat";
}

function stringReturnTwo(){
  return "dog";
}

function myFunctionRunner(param){
  if (typeof(param)=='function'){
    param();
  }
}
// Somewhat interesting right?
myFunctionRunner(stringReturnOne);

function myDoubleConsoleLog(param1,param2){
  if (typeof(param1) == 'function' && typeof(param2) == 'function'){
    console.log(param1(), param2());
  }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

// more interesting, we hope!
function caller2(param){
  console.log('starting');
  var x = setTimeout(function(){
    if (typeof(param)=='function'){
      // notice the passed parameters...
      param(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log('ending');
  return "interesting";
}

caller2(myDoubleConsoleLog);
