let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      // console.log(e)
      string = eval(string);
      document.querySelector('input').value = string;
    }

    else if (e.target.innerHTML == 'AC') {
      string = "";
      document.querySelector('input').value = string;
    }

    else if (button.id === 'backspace-button') {
      string = string.toString().slice(0, -1);
      document.querySelector('input').value = string;
    }




    else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }

  })
})

