
export const initState={
    "username":"",
    "email":"",
    "address":"",
    "phone":null
    }
    
    export const RegisterActions={
     username: "username",
     email:"email",
     address:"address",
     phone:"phone"
    }
    export const reducer=(state,action)=>{
        switch(action.type){
            case RegisterActions.username:{
                return({
                    ...state,
                    username:action.payload
                })
            }
            case RegisterActions.address:{
                return({
                    ...state,
                    address:action.payload
                })
            }
            case RegisterActions.email:{
                return({
                    ...state,
                   email:action.payload
                })
            }
            case RegisterActions.phone:{
                return({
                    ...state,
                    phone:action.payload
                })
            }
        }
    
    }
    