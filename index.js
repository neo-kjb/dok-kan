const express = require('express');
const bodyParser = require('body-parser');
const cookieSession=require('cookie-session');
const authRouter=require('./routes/admin/auth')
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieSession({
    keys:['gho87ri76tygu4w65eir76oruy']
}));

app.use(authRouter)




app.listen(3000,()=>{
    console.log('listening');
})