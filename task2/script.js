function showUser() {
    let name = "Andrey";
    let user = {
        name: 'Ivan',
        surname: 'Petrov',
        age: 20,
        position: 'developer'
    }
    if (user.name === name) {
            console.log(true);
        } else {
            console.log(false);
        }
}

showUser();