/*
Description:

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
FUNDAMENTALS
*/


/*set class SmallestItegerFinder */
class SmallestItegerFinder {
//with function findSmallestInt with parameter/argument args
	findSmallestInt(args) {
/*return Math.min() static function, which returns the lowest-valued
number passed into it; with a parameter of restparameter cause
were putting in a parameter of our function ((args)after) and not a 
specific number */
	return Math.min(...args)
	}
}




//Test cases:
/*
Test.describe("Smallest Integer Tests", _ => {
  var sif = new SmallestIntegerFinder();
  Test.it("Fixed Tests", __ => {
    Test.assertEquals(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
    Test.assertEquals(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
    Test.assertEquals(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
    Test.assertEquals(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
    Test.assertEquals(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
  });
  
  Test.it("Random Tests", __ => {
    for(var i=0;i<100;i++){
      var count = Math.floor(Math.random()*100)+100;
      var test = [];
      for(var x=0;x<count;x++){
        test.push(Math.floor(Math.random()*100000000));
      }
      var ans = solv(test.slice());
      Test.assertEquals(sif.findSmallestInt(test),ans.ans,ans.desc)
    }
  });
});  

function solv(_) {
  var n = _.sort((a,b)=>a-b)[0]
  return {ans:n,desc:`Should return the smallest int ${n}`};
}
*/