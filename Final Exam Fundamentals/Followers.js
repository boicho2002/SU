function Followers(arr) {
    let total = {};
    let counter = 0;
    for (let i of arr) {
        if (i === 'Log out') {
            break;
        }
        else {
            let line = i.split(': ');
            let command = line[0];
            let username = line[1];
            let points = Number(line[2]);
            switch (command) {
                case 'New follower':
                    if (total[username] == undefined) {
                        total[username] = {
                            likes: 0,
                            comments: 0,
                        }
                        counter++;
                    }
                    break;
                case 'Like':
                    if (total[username] != undefined) {
                        total[username].likes += points;
                    } else {
                        total[username] = {
                            likes: points,
                            comments: 0,
                        }
                        counter++;
                    }
                    break;
                case 'Comment':
                    if (total[username] == undefined) {
                        total[username] = {
                            likes: 0,
                            comments: 1
                        }
                        counter++;
                    } else {
                        total[username].comments += 1;
                    }
                    break;
                case 'Blocked':
                    if (total[username] != undefined) {
                        delete total[username];
                        counter--;
                    } else {
                        console.log(`${username} doesn't exist.`);
                    }
                    break;
            }
        }
    }
    console.log(`${counter} followers`);

    for (let [username, values] of Object.entries(total)) {
        console.log(`${username}: ${values.likes + values.comments}`);
    }




}
Followers(["Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"])



