
import {listOfRecipeints} from './index'
export default class FormModel{

    constructor(){
        this.adminId= document.getElementById("admin").value,
        this.groupName = document.getElementById('group').value,
        this.password = document.getElementById('password').value,
        this.recipeints = listOfRecipeints,
        this.jsongenerator()
    }

    jsongenerator(){
        
        if(document.getElementById("webex").checked){

            console.log('roomID')
            // console.log(document.getElementById('roomID').value)
            this.modeOfCommunication = [
                {
                    "email": document.getElementById("email").checked,
                    "webex": document.getElementById("roomId").value
                }
            ]    
        }else{
            console.log('no roomID')
            this.modeOfCommunication = [
                {
                    "email": document.getElementById("email").checked,
                    "webex": ""
                }
            ]

        }
        return this.modeOfCommunication
    }
    
}
