function showUser() {
    let user = {
        name: 'Ivan',
        surname: 'Petrov',
        age: 20,
        position: 'developer'
    }

    for(let key in user) {
            console.log(key)
    }
}

showUser();


