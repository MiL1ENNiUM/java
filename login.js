var login = prompt('Введите логин:');

if (login == 'admin'){
    var password = prompt('Введите пароль');

    if (password == 'Чёрный Властелин'){
        alert('Добро пожаловать Админ!');
    } else if (password == null){
        alert('Вход отменен');
    } else {
        alert('Пароль неверен');
    }
} else if (login == null){
    alert('Вход отменен');
} else {
    alert('Вы кто такой?');
}