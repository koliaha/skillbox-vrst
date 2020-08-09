const form = document.querySelectorAll('#form_id')
console.log(form)
form.forEach((event) => {
    event.addEventListener('submit', (e) => {
        const name = event.querySelector('#name')
        const phone = event.querySelector('#phone')
        const email = event.querySelector('#email')
        let error = event.querySelector('#message')
        let thanks = event.querySelector('#message_thx')
        const check = event.querySelector('#checkbox')
        e.preventDefault(); // отключение отправки
        let messages = [];
        var regname = /^([A-Za-zА-Яа-яё ]{4,20})$/; // все буквы латиницы и кириллицы + пробел, минимум 4 символа
        var regphone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/; //+79261234567
        var regmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; // любые латиницы плюс символы _-.
        var addname = name.value;
        var addphone = phone.value;
        var address = email.value;
        if (regname.test(addname) == false) {
            messages.push(' Введите корректный имя')
        }
        if (regphone.test(addphone) == false) {
            messages.push(' Введите корректный телефон')
        }
        if (regmail.test(address) == false) {
            messages.push(' Введите корректный e-mail')
        }
        if (!check.checked) {
            messages.push(' Нужно согласиться с условиями обработки персональных данных')
        }
        if (messages.length == 0) {
            thanks.innerText = ' Спасибо! Мы вскоре свяжемся с Вами!'
        } else {
            thanks.innerText = ''
        }
        error.innerText = messages
    })
})