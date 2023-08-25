function generateList(array){
    let list = document.createElement('ul');
    for(let item of array){
        let listItem = document.createElement('li');
        if(Array.isArray(item)){
            listItem.appendChild(generateList(item));
        } else{
            listItem.textContent = item;
        }
        list.appendChild(listItem)
    }
    return list;
}

let fn = generateList([1,2, [1.1,1.2,1.3], 3]);
console.log(fn);
