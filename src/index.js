module.exports = function toReadable (number) {
    const TRANSLATOR = {
        '1' : 'one',
        '2' : 'two',
        '3' : 'three',
        '4' : 'four',
        '5' : 'five',
        '6' : 'six',
        '7' : 'seven',
        '8' : "eight",
        '9' : "nine",
        '0' : 'zero',
        '10' : 'ten',
        '11' : 'eleven',
        '12': 'twelve',
        '13' : 'thirteen',
        '14' : 'fourteen',
        '15' : 'fifteen',
        '16' : 'sixteen',
        '17' : 'seventeen',
        '18' : 'eighteen',
        '19' : 'nineteen'
    }
    let array = String(number).split('').reverse().map((x) => +x);
    let result = '';
    if(array.length === 3){
        result = toReadable(+array[2]) + ' hundred ';
        number = + (String(array[1]) + array[0]);
    }

    if (array[1] == 2) result = result + "twenty ";
    if (array[1] == 3) result = result + "thirty "; 
    if (array[1] == 4) result = result + "forty ";
    if (array[1] == 5) result = result + "fifty ";
    if (array[1] == 6) result = result + "sixty ";
    if (array[1] == 7) result = result + "seventy ";
    if (array[1] == 8) result = result + "eighty "; 
    if (array[1] == 9) result = result + "ninety ";

    if (number == 0 && array.length == 1) result += "zero";
    if (number <= 19 && number >= 1){
      result += TRANSLATOR[String(number)];
    }
    if (number > 19 && array[0] != 0) result += toReadable(array[0]);

    return result.trim('');
}
