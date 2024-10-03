const inputLabel = document.getElementById("inputLabel");

function pushBtn(item) {
  let pushed = item.innerText;

  if (pushed == "=") {
    // Calculate the result using a safe approach
    try {
      inputLabel.innerText = calculate(inputLabel.innerText);
    } catch {
      inputLabel.innerText = "Error";
    }
  } else if (pushed == "AC") {
    // Clear
    inputLabel.innerText = "0";
  } else {
    // Update input
    if (inputLabel.innerText == "0") {
      inputLabel.innerText = pushed;
    } else {
      inputLabel.innerText += pushed;
    }
  }
}

function calculate(expression) {
  const tokens = expression.match(/(\d+|\+|\-|\*|\/)/g);
  if (!tokens) throw new Error("Invalid expression");

  let stack = [];
  let currentOp = "+";

  for (let token of tokens) {
    if (/\d/.test(token)) {
      let num = parseFloat(token);
      if (currentOp == "+") stack.push(num);
      else if (currentOp == "-") stack.push(-num);
      else if (currentOp == "*") stack.push(stack.pop() * num);
      else if (currentOp == "/") stack.push(stack.pop() / num);
    } else {
      currentOp = token;
    }
  }

  return stack.reduce((acc, num) => acc + num, 0);
}
