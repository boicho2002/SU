class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.isOn = false;
        this.quality = quality;
    }

    turnOn() {
        this.isOn = true;
        this.quality -= 1;
    }

    turnOff() {
        this.isOn = false;
        this.quality -= 1;
    }

    showInfo() {
        let { producer, age, brand } = this.info;
        return JSON.stringify({ producer, age, brand });
    }

    get price() {
        let { age } = this.info;
        return 800 - age * 2 + this.quality * 0.5;
    }
}
let info = {
    producer: "Dell",
    age: 2,
    brand: "XPS"
}

let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
