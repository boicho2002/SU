function Numbers(input){
    let array = [];
    for(let i of input)
    {
        if(array.indexOf(i)== -1)
        {
            array.push(i);
        }
       

    }
    console.log(array.join(" "));
    console.log(array[1]);
}
Numbers([1, 2, 3, 4]);
Numbers([7, 8, 9, 7, 2, 3, 4, 1, 2])