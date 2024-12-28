function numberToString(num){
    let ones=['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twele','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let tens=['twenty','thirty','fourty','fifety','sixty','seventy','eighty','ninety']
    if(num === 0){
        return "zero";

    }
    let rst='';
    if(num >= 1000){

        rst += ones[Math.floor(num / 1000) -1] + ' thousand  ';
        num %=1000
      }
      if(num>=100){
        rst += ones[Math.floor(num/100) -1] + ' hundred ';
        num %= 100

      }
      if(num >= 20){
        rst += tens[Math.floor(num/10)-2]+ '  ';
        num %= 10;

      }if(num > 0){

        rst += ones[num -1]+' ';
    }
    return rst.trim()


}
console.log(numberToString(345))

   