const getTasks=async()=>{
    try {
        const res= await fetch(`http://localhost:3000/tasks`);
        const data= await res.json();
        console.log(data);
         
         updateOnUi(data);
    } catch (error) {
        console.log(error);
    }
}
getTasks();

// POST DATA
const addTask = async()=>{
    
    try {
        let tasks={
        title:document.getElementById('title').value,
    
        status:document.getElementById('status').checked,
        }
    
        if(tasks.title.length!==0){
            let res=await fetch(`http://localhost:3000/tasks`,{
                method:"POST",
                body:JSON.stringify(tasks),
                headers:{
                    "Content-Type":"application/json"
                }
            
            });
            let data= await res.json();
    
        
        }else{
        alert("Please input must fill")
        }
    
    } catch (error) {
        console.log(error);
    }

    
}


const  updateOnUi = (data)=>{
    data.forEach(function(text){
        console.log(text);
        let div=document.createElement('div');

        div.setAttribute('id',"listsContainer")
        let tr=document.createElement('h3');
        tr.setAttribute('id',"listsData");
        if(text.status===true){
            tr.style.color="green";
        }else{
            tr.style.color="red";
        }
        
        
        tr.innerText=text.title;

        div.append(tr);
        document.querySelector('#container').append(div);

    });
}