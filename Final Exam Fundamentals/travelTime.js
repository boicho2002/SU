// function travelTime(arr) {
//     let data = {}
//     arr.forEach(x => {
//         const [country, town, price] = x.split(" > ")
//         if (data[country] === undefined) data[country] = {}
//         if (data[country][town] === undefined) data[country][town] = Number(price)
//         if (data[country][town] > Number(price)) data[country][town] = Number(price)
//     })

//     arr = Object.entries(data).sort((x, y) => x[0].localeCompare(y[0]))
//     arr = arr.map(x => [x[0], Object.entries(x[1]).sort((x, y) => x[1] - y[1])])
//     arr.forEach(x => {
//         console.log(`${x[0]} -> ${x[1].reduce((a, v) => (a += `${v[0]} -> ${v[1]} `), "").trim()}`)
//     })
function travelTime(arr) {
    let orders = {};
    for (const iterator of arr) {
        let [countryName, townName, travelCost] = iterator.split(' > ');
        if (orders.hasOwnProperty(countryName)) {
            let [name, cost] = orders[countryName].join().split(' -> ');
            if (townName === name) {
                let min = Math.min(travelCost, cost);
                orders[countryName] = [townName = `${townName} -> ${min}`];
            } else {
                orders[countryName].push(townName = `${townName} -> ${travelCost}`);
            }
        } else {
            orders[countryName] = [townName = `${townName} -> ${travelCost}`];
        }
    }

    for (const towns of Object.values(orders)) {
        towns.sort((a, b) => { return a.split(' -> ')[1] - b.split(' -> ')[1]; });
    }

    orders = Object.entries(orders).sort((a, b) => { return a[0].localeCompare(b[0]); });
    for (const [country, towns] of orders) {
        console.log(`${country} -> ${towns.join(' ')}`);
    }
}
travelTime([
    'Bulgaria > Sofia > 900',
    'Bulgaria > Sofia > 2000',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000'
]);