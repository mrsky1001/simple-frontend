
function send(){
    console.log('Hello, I am worked!')
    const name = document.getElementById('inputName').value
    const password = document.getElementById('inputPassword').value
    const email = document.getElementById('inputEmail').value
    const date = document.getElementById('inputDate').value
    const agree = document.getElementById('inputAgree').value

    const data ={ name, password, email, date, agree}

    console.log('Data: ', data)
}
