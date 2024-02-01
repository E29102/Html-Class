
if (data ==undefined){
    data = {};
}


let dataBind = function(){

}

dataBind.set = function(key,value){
    data[key] = value;
}

dataBind.get = function(key){
    console.log(key)
    let field = data; 
    key.split(".").forEach(function(item){
    field = field[item];
    
   
    });
    return field; 
}



dataBind.display = function(){
    // ()=>{} otherway for function
    document.querySelectorAll(`[name],[data]`).forEach(function(item){
       
        //if item is not an input element
        if(item.name == undefined){
            //get key from data

            //Input box doesnt have a name but has data hence why it would enter the if statement
            let key = item.getAttribute("data")
            console.log(key)
            if (dataBind.get(key) !==undefined){
                item.innerText = dataBind.get(key);
            }

            
        }
        // if item is an input element
        else{
            let key = item.name;
            if (dataBind.get(key) !== undefined){
            item.value = dataBind.get(key);}
            
        }

    }
    
    ) 
    
}

dataBind.save = function(){
    console.log(JSON.stringify(data))
    sessionStorage.setItem(`data`, JSON.stringify(data));
}

dataBind.display();

document.addEventListener(`input`, function(e){
    console.log(e.target.name)
    dataBind.set(e.target.name, e.target.value);
    dataBind.display()
    
})






    


