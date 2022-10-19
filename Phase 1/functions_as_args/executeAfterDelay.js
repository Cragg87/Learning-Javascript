const printHello = () => {
  console.log("Hello");
}

const executeAfterDelay = (time, myFunction) => {
  setTimeout(myFunction, time*1000);
}

module.exports = {
  printHello : printHello,
  executeAfterDelay : executeAfterDelay
}