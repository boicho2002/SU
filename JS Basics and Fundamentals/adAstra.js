function followers(input) {

    let collection = {};
    let counter = 0;

    while (input[0] != "Log out") {
        let [command, username, p1] = input.shift().split(": ");

        if (command == "New follower") {
            if (collection[username] == undefined) {
                collection[username] = {
                    likes: 0,
                    comments: 0,
                }
                counter++;
            }
        } else if (command == "Like") {
            p1 = Number(p1);
            if (collection[username] != undefined) {
                collection[username].likes += p1;
            } else {
                collection[username] = {
                    likes: p1,
                    comments: 0,
                }
                counter++;
            }
        } else if (command == "Comment") {
            if (collection[username] == undefined) {
                collection[username] = {
                    likes: 0,
                    comments: 1
                }
                counter++;
            } else {
                collection[username].comments += 1;
            }

        } else if (command == "Blocked") {
            if (collection[username] != undefined) {
                delete collection[username];
                counter--;
            } else {
                console.log(`${username} doesn't exist.`);
            }
        }
    }
    console.log(`${counter} followers`);

    for (let [username, values] of Object.entries(collection)) {
        console.log(`${username}: ${values.likes + values.comments}`);
    }

}


followers(["Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"])
