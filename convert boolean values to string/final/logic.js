//set function to boolToWord with parameter bool
function boolToWord( bool ){
//if bool equals true ;equal is 'two' equals
  if(bool == true){
// return yes string; strings have to be wrapped in quotes
    return 'Yes'
//else return no string;
  }else return 'No'
}

/*
console.log("Basic tests: ' true '/' false '")
Test.assertEquals(boolToWord(true), 'Yes')
Test.assertEquals(boolToWord(false), 'No')

console.log("Tests for true values")
Test.assertEquals(boolToWord(0<1), 'Yes' )
Test.assertEquals(boolToWord(!(0>1)), 'Yes' )
Test.assertEquals(boolToWord(typeof boolToWord=="function" ), 'Yes' )
Test.assertEquals(boolToWord(!0), 'Yes' )

console.log("Tests for false values")
Test.assertEquals(boolToWord(0>1), 'No' )
Test.assertEquals(boolToWord(!(0<1)), 'No' )
Test.assertEquals(boolToWord(typeof boolToWord=="string" ), 'No' )
Test.assertEquals(boolToWord(!1), 'No' )
*/