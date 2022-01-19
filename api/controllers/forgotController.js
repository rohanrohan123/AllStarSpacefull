import forgotpassModel from "../models/forgotPass.js";

class forgotController{
    static getForgotData=async(req,res)=>{
        try {
            const resultforgot = await forgotpassModel.find()
            res.send(resultforgot)
        } catch (error) {
            console.log(error) 
        }
    }
}


export default forgotController
