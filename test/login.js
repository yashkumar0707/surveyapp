var f= false;
const form=document.querySelector("#check");
form.addEventListener('submit',(e)=>
{  
    e.preventDefault();
     console.log("c1");
     ex1();
    
})
function ex1()
{
var user=document.getElementById('user').value;
var pass=document.getElementById('pass').value;
db.collection('login').orderBy('user').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>
        {var b=doc.id; 
        if(doc.data().user==user && doc.data().pass==pass)
        {   f=true;
            if(doc.data().count==0)
            {
            db.collection('login').doc(b).update({
                count: 1
            })
            console.log(doc.data().count);
            document.getElementById('disp').innerHTML="valid";
            
            }
            else
            {   console.log("yashyashay");
                document.getElementById('disp').innerHTML="invalid";
                console.log(f);
            }
        }
            
    })
})
}
setTimeout(function()
{  
if(f==false)
{   console.log("f is false");
    console.log("c1");
    db.collection('login').add({
        user:form.user.value,
        pass:form.pass.value,
        count:1
    })
    //to clear the adding info
    form.user.value='';
    form.pass.value='';
}

},5000);