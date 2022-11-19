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

const editTask = async(id)=>{
    try {
        let tasks={
        title:document.getElementById('title').value,
    
        status:document.getElementById('status').checked,
        }
    
        if(tasks.title.length!==0){
            let res=await fetch(`http://localhost:3000/tasks/{id}`,{
                method:"PATCH",
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
        let div2=document.createElement('div');
        let div3=document.createElement('div');
        div3.setAttribute('id',"buttonsDiv")
        div.setAttribute('id',"listsContainer")
        
        let title=document.createElement('h2');
        title.setAttribute('id',"listsData");
        let addButton = document.createElement('button');
        addButton.innerText="Edit"
        addButton.setAttribute('id',"editbutton");
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('id',"deletebutton");
        
        deleteButton.innerText="Delete"
        if(text.status===true){
            title.style.color="green";
        }else{
            title.style.color="red";
        }
        
        div2.append(title);
        div3.append(addButton,deleteButton)
        
        title.innerText=text.title;

        div.append(div2,div3);
        document.querySelector('#container').append(div);

    });
        const deleteTask=()=>{
            console.log("CALLING DELETE")
        }

        var d = document.querySelector("#deletebutton");
        d.addEventListener("click",deleteTask());
    
}