var f= false;
const form=document.querySelector("#check");
form.addEventListener('submit',(e)=>
{
    e.preventDefault();//*/
    //function check()
    console.log("hi");
     console.log("c1");
     ex1();//.then(ex());
})
function ex1()
{
var user=document.getElementById('user').value;
var pass=document.getElementById('pass').value;
setTimeout(ex,1000);
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
            document.getElementById('hid').style.display = "block";
            return true;      
            }
            else
            {   console.log("yashyashay");
                document.getElementById('disp').innerHTML="invalid";
                console.log(f);
                return true;
            }
        }
       
    })
})
}


//setTimeout(function()
function ex()
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
    document.getElementById('hid').style.display = "block";
 }
//return "valid";


}//,7000);

 