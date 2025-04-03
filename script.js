let aArray = []
let arrayName = document.querySelector(".name");
let search = document.querySelector(".search-bar")
aArray = ["Rakesh","Cooper","Stephen","Hawking","Raghav","Cooper"]
let method = document.querySelector(".method")
let type;
let newType
// arrayName.innerHTML = aArray

method.addEventListener("change", (e) =>{
    console.log(e.target.value);
    type = true
    if(e.target.value == "regular"){
        newType = type
    } else if(e.target.value == "exact"){
        newType = !type        
    }
})

search.addEventListener("input",(e)=>{
    if(newType == false){
       console.log(newType);
    } else {
        let findArray = aArray.map((data) => {
        let dat = data.toLowerCase()
        let txtValue = dat.slice(0)
        if (txtValue.indexOf(search.value) > -1 ){
                console.log(dat);
                return dat[0].toUpperCase()+dat.slice(1)  
        }
        })

        let filteredArray = findArray.filter((data) => {
            return data !== undefined
        })
        console.log(findArray);
        if(filteredArray.length > 0){
            if(e.target.value.length <= 0) 
                {
                    arrayName.innerHTML ="" 
                }
            else{
                arrayName.innerHTML = filteredArray
            }
        } else{
            arrayName.innerHTML = "Not Found"
        }
        
    }   
})




