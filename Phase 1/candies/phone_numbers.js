const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd'
];

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  } else {
    return false;
  };
}

const filterLongNumbers = (numbers) => {
  console.log(numbers.filter(checkLength));
}

const generateMessages = (nameList) => {
  return nameList.map((name) => {
    return "Hi " + name + "! 50% off our best candies for you today!"
  })
}

filterLongNumbers(numbers);
filterLongNumbers(['4763687363', '7867867862']);
filterLongNumbers([]);
console.log(generateMessages(names));
