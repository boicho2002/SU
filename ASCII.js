function ASCII(char1,char2){
    let code1=char1.charCodeAt(0);
    let code2=char2.charCodeAt(0);
    let startIndex=code1>code2 ?  code2 : code1;
    let endIndex=code1>code2 ? code1 : code2;
    buff="";
    for(let i=startIndex+1;i<endIndex;i++)
    {
        buff+=String.fromCharCode(i)+" ";
    }
    return buff;
}
console.log(ASCII("a","d"));