function schoolLibrary(input) {
    let shelf = input.shift().split("&");

    let currentLine = input.shift();
    while (currentLine !== 'Done') {
        let lineArr = currentLine.split(' | ');
        let command = lineArr.shift();
        let book = " ";


        switch (command) {
            case 'Add Book':
                book = lineArr.shift();
                if (!shelf.includes(book)) {
                    shelf.unshift(book);
                }
                break;
            case 'Take Book':
                book = lineArr.shift();
                if (shelf.includes(book)) {
                    shelf = shelf.filter(x => x !== book);
                }

                break;
            case 'Swap Books':
                let book1 = lineArr.shift();
                let book2 = lineArr.shift();
                let index1 = shelf.indexOf(book1);
                let index2 = shelf.indexOf(book2);
                if (shelf.includes(book1) && shelf.includes(book2)) {
                    shelf[index1] = book2;
                    shelf[index2] = book1;
                }
                break;
            case 'Insert Book':
                book = lineArr.shift();
                shelf.push(book);
                break;
            case 'Check Book':
                let index = lineArr.shift();
                if (shelf[index] !== undefined) {
                    console.log(shelf[index]);

                }

                break;
        }


        currentLine = input.shift();
    }
    console.log(shelf.join(', '));
}
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Check Book | 1",
    "Done"])
