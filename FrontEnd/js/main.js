

let element;
let arr = [];
document.getElementById("webex").addEventListener('click',()=>{
    
    const roomId =document.getElementById("roomId").value
    if(roomId){
        document.getElementById("roomId").value=""
    }
})

document.getElementById("addButton").addEventListener('click',()=>{

    const name = document.getElementById("recipientName").value
    if(name){
         element = `<button id="trash"><i class="fa fa-trash" style="color: #666666;"></i> ${name}</button> &nbsp; &nbsp;`
        document.querySelector('.wrap-recipients').insertAdjacentHTML('afterend',element)
        document.getElementById("recipientName").value=""
        arr.push(name)
    }
    const trashElement = document.getElementById('trash');
    if(trashElement){
        trashElement.addEventListener('click', ()=>{
            trashElement.parentElement.removeChild(trashElement)
            arr.pop(name)          
        })
    }
   
})


document.querySelector('.contact2-form-btn').addEventListener('click',(e)=>{
    const adminAndGroupName = ()=>{
        if(document.getElementById('group').value==='' || document.getElementById('admin').value===''){
            return false
        }else{
            return true
        }
        
    }
    const email = document.getElementById('email')
    const webex = document.getElementById('webex')
    
    

    
    
    if(!(email.checked || webex.checked)){
        alert('Please check atleast one mode of communication')
        
    }

    if(!(arr.length>=3)){
        alert('Add atleast three recipients')
    }
    console.log((email.checked || webex.checked)===true)
    console.log(arr.length>=3===true)
    console.log(adminAndGroupName())

    console.log(document.getElementById('admin').value)

    const webexCheck = ()=>{
        
        if(document.getElementById("webex").checked===true && document.getElementById("roomId").value===''){
            alert('Enter the room ID')
            return false
        }
        return true
    }

    if((email.checked || webex.checked) && arr.length>=3 && adminAndGroupName() && webexCheck()){
        window.location.href = 'https://w3docs.com'
        
    }

    


})



