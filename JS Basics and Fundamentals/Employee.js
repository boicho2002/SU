function employee(input) {
    for (const iterator of input) {
        let data = {
            name: iterator,
            personalNumber: iterator.length
        };
        console.log(`Name: ${data.name} -- Personal Number: ${data.personalNumber}`);
    }
}
employee(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

