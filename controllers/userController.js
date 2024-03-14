module.exports = {
    // user home page getting 
    getUserHome:(req,res)=>{
        try {
            res.status(200).send('User home')
        } catch (error) {
            console.log('error');
        }
    }
}