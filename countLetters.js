const countLetters = function(str, letter) {
  var countLetters = 0;
  for (var position = 0; position < str.length; position++) 
  {
     if (str.charAt(position) == letter) 
       {
       countLetters += 1;
       }
   }
   return countLetters;
 }
 
 console.log(countLetters('lighthouse in the house'));
