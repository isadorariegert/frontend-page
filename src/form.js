class fomrObject {
    constructor(name, email, gender, subject, message, assign) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.subject = subject;
        this.message = message;
        this.assign = assign;
    }
}

function showForm() {
    let form = new fomrObject(document.querySelector('#contactName').value,
        document.querySelector('#contactEmail').value,
        document.querySelector('input[name="gender"]:checked').value,
        document.querySelector('#about').value,
        document.querySelector('#contactMessage').value,
        document.getElementById("contactCheck").checked);
    console.log(form);

    const resetForm = () => {
        let form = document.getElementById('form')
        form.reset()
    }
    resetForm();
}





/**
 * NÃO ENVIAR O FORMULÁRIO
 */
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
});