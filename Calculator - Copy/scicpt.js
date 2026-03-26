 function appendValue(value) {
      document.getElementById("textBox").value += value;
    }

    function clearResult() {
      document.getElementById("textBox").value = "";
    }

    function deleteLast() {
      let current = document.getElementById("textBox").value;
      document.getElementById("textBox").value = current.slice(0, -1);
    }

    function calculate() {
      let expression = document.getElementById("textBox").value;
      try {
        document.getElementById("textBox").value = eval(expression);
      } catch {
        document.getElementById("textBox").value = "";
      }
    }
     function toggleSign() {
      let current = document.getElementById("textBox").value;
      if (current) {
        if (current.startsWith("-")) {
          document.getElementById("textBox").value = current.substring(1);
        } else {
          document.getElementById("textBox").value = "-" + current;
        }
      }
    }