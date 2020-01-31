import {elements} from './base';
import axios from 'axios'
import model from './Model'

// An object to use model Class
const state={};

// An array to add recipeints and made it global
export let listOfRecipeints = [];

// To clear roomId field if present
elements.webex.addEventListener('click',()=>{
    
    if(elements.roomId.value){
        elements.roomId.value=""
    }
})




// To display and add recipeints
elements.addButton.addEventListener('click',()=>{

    const name = elements.recipeintName.value
    if(name){
        var element = `<button id="trash"><i class="fa fa-trash" style="color: #666666;"></i> ${name}</button> &nbsp; &nbsp;`
        document.querySelector('.wrap-recipients').insertAdjacentHTML('afterend',element)
        elements.recipeintName.value=""
        listOfRecipeints.push(name)
    }
    const trashElement = document.getElementById('trash');
    if(trashElement){
        trashElement.addEventListener('click', ()=>{
            trashElement.parentElement.removeChild(trashElement)
            listOfRecipeints.splice(listOfRecipeints.indexOf(name),1)        
        })
    }
   
})


//Password validator
const passwordValidator = ()=>{
    const password = elements.password.value
    
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    
   
    if(regex.test(password)){    
        return true
    }else{
        return false
    }
    
}

// Confirm password match
elements.confirmPassword.addEventListener('keyup', ()=>{

    if(elements.confirmPassword.value===elements.password.value){
        $('#message').html('Matching').css('color', 'green');
        elements.submit.disbled = false
    }else{
        $('#message').html('Not Matching').css('color', 'red');
        elements.submit.disbled = true
    }
})



// Before posting the payload
elements.submit.addEventListener('click',()=>{
    

    let data = `{
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }`

    axios.post('https://reqres.in/api/register',data,  {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((e)=>console.log(e.data))



    const adminAndGroupName = ()=>{
        if(elements.group.value==='' || elements.admin.value===''){
            return false
        }else{
            return true
        }
        
    } 

    
    // if(passwordValidator()==false){
        
    //     elements.submit.setAttribute("data-toggle","modal")
        
    // }else{
    //     elements.submit.setAttribute("data-toggle","")
    // }
    
    if(!(elements.email.checked || elements.webex.checked)){
        alert('Please check atleast one mode of communication')     
    }

    if(!(listOfRecipeints.length>=3)){
        alert('Add atleast three recipients')
    }


    console.log((elements.email.checked || elements.webex.checked)===true)
    console.log(listOfRecipeints.length>=3===true)
    console.log(adminAndGroupName())

    console.log(document.getElementById('admin').value)

    const webexCheck = ()=>{
        
        if(elements.webex.checked===true && elements.roomId.value===''){
            alert('Enter the room ID')
            return false
        }
        return true
    }

    console.log(`1st ${elements.email.checked || elements.webex.checked}`)
    console.log(`2nd ${listOfRecipeints.length>=3}`)
    console.log(`3rd ${adminAndGroupName()}`)
    console.log(`4th ${webexCheck()}`)
    console.log(`5th ${passwordValidator()}`)

 
    if((elements.email.checked || elements.webex.checked) && listOfRecipeints.length>=3 && adminAndGroupName() && webexCheck() && passwordValidator()){
        state.jj = new model();
        console.log(state.jj)
    }
})


