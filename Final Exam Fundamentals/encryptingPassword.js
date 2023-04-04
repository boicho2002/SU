function encryptingPassword(arr) {
    let n = Number(arr.shift());
    let pattern = /(.+)>(?<Numbers>\d{3})\|(?<Lower>[a-z]{3})\|(?<Upper>[A-Z]{3})\|(?<Symbols>[^<>]{3})<\1/;

    for (let i of arr) {
        let match = pattern.exec(i);

        if (!match) {
            console.log('Try another password!');
            continue;
        }
        let num = match.groups.Numbers;
        let lower = match.groups.Lower;
        let upper = match.groups.Upper;
        let symbols = match.groups.Symbols;

        let finalPassword = num + lower + upper + symbols;

        console.log(`Password: ${finalPassword}`);
    }
}
encryptingPassword(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])
