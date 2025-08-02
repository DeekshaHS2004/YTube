const asynHandler = (requestHandler)=>{
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err)=>next(err))
    }
}





export { asynHandler };

//Passing a function to function to handle async
// const asynHandler = (fn) => ()=>{}
// const asynHandler = (func) => ()=>{}
// const asynHandler = (func) => async()=>{}
   

/*
//This is using try catch
//Making a wrapper fn to use it everytime
const asynHandler = (fn) =>async (req,res,next)=>{
    try{
        await fn(req,res,next); //awaiting the function to execute
    }
    catch(error){
        res.status(err.code || 500).json({
            success: false,
            message: error.message || "Internal Server Error"
        })
    }
}
*/