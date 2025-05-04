import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";
export class AuthService{
    client=new Client()
    account;
    
    constructor(){
        this.client
         .setEndpoint(conf.appwriteURl)
         .setProject(conf.appwriteProjectId)
       this.account = new Account(this.client)
    }
    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique,email,password,name) //await wait untile the process is complete 
            if(userAccount){
                //call another method
                return this.login({email,password}) //automatically logged in hunxa 
            }else{
                return userAccount
            }

        }catch(error){
            throw error;
        }
    }
   async login({email,password}){
    try {
        return await this.account.createEmailSession(email,password)
    } catch (error) {
        throw  error;
        
        
    }

   }
   async getCurrentUser({email,password,name}){
    try{
        return await this.account.get()
        }

     catch(error){
        throw error;
      }
     return null
    }

   async logout(){
    try{
       await this.account.deleteSessions()

    }catch(error){
        throw error;
    }
}



}


const authService = new AuthService()



export default authService
