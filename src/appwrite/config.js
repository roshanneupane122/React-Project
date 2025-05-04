import conf from "../conf/conf";
import { Client, Account, ID, Databases,Storage,Query} from "appwrite";
export class Service{
    client=new Client()
    databases;
    bucket;
    constructor(){
        this.client()
        .setEndpoint(conf.appwriteURl)
        .setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client)
        this.databases=new Storage(this.client)

    }
    async createpost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
            
        } catch (error) {
            throw error
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            
        } catch (error) {
            
        }

    }



    }
    







const service=new Service()
export default service