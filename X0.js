function XO(str) {
   
  var x1=counter(str,'x');
var x2=counter(str,'o');
return(x1==x2); 
   
}


function counter(str,char){
   var count=0;
   for (var i=0;i<str.length;i++)
    if (str[i].toLowerCase()==char.toLowerCase())count++;
    return count;

}