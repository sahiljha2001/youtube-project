//THIS IS A HANDLER FOR DATABASE RESPONSES 
const asyncHandler=(reqestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(err))
    }

}
export {asyncHandler}
// const asyncHandler = (fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }

