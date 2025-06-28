import {Webhook} from 'svix'
import userModel from '../models/userModel.js'
// API CONTROLLER FUNCTION TO MANAGE CLERK USER WITH DATABASE
//HHTP://LOCALHIOST:4000/API/USER/WEBHOOK

const clerkWebhooks = async (req, res) => {
    try {
        //create a svix instance with clerk 
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers['svix-id'],
            "svix-timestamp":req.headers['svix-timestamp'],
            "svix-signature":req.headers['svix-signature']
        })

        const {data,type} = req.body

        switch (type) {
            case "user.created":{
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.create(userData)
                res.json({success: true, message: "User created successfully"})
                break;
            }
            case "user.updated":{
                    const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }
                await userModel.findOneAndUpdate({clerkId: data.id}, userData)
                res.json({success: true, message: "User updated successfully"})
                break;
            }
            case "user.deleted":{
                await userModel.findOneAndDelete({clerkId: data.id})
                res.json({success: true, message: "User deleted successfully"})
                break;
            }
            default:
                break;
        }


    } catch (error) {
        console.log(error.message);
        res.json({success: false,message: error.message})
    }
}



//API CONTROLLER FUNCTION TO GET USER AVAILABLE CREDIT UNIT 

const userCredits = async (req, res) => {
    try {
        
        const { clerkId } = req.user
        const userData = await userModel.findOne({ clerkId })
        
        if (!userData) {
            return res.status(404).json({success: false, message: "User not found"})
        }
        
        res.json({success: true, credits: userData.creditBalance})

        

    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message})
    }
}

export {clerkWebhooks, userCredits}