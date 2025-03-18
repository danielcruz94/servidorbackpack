const boom= require('@hapi/boom')


const checkAPIKey=(req,res,next) => {
    const apiKey=req.headers['api']
    if(apiKey==='123'){
        next()
    }else{
        next(boom.unauthorized())
    }


}

module.exports={checkAPIKey};
