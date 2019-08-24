var f= false;
const form=document.querySelector("#check");
form.addEventListener('submit',(e)=>{
    e.preventDefault();//*/
    //function check()
    
    console.log("hi");
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
            sur();
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
 sur();
},5000);
function sur()
{
var i=0;
var j =0;
const cafelist= document.querySelector('#sur');
var correctCount = 0 ;
//initialize the first question
generate(0);
// generate from json array data with index
function generate(index) 
{
    document.getElementById("question").innerHTML = jsonData[index].q;
    document.getElementById("optt1").innerHTML = jsonData[index].opt1;
    document.getElementById("optt2").innerHTML = jsonData[index].opt2;
    document.getElementById("optt3").innerHTML = jsonData[index].opt3;
}

function checkAnswer()
{   if(i<=4)
        {
    console.log('yash');
    console.log(jsonData[i].opt1);
        if (document.getElementById("opt1").checked) 
        { var a=(i+1)+'A';
            th(a);
       correctCount++;
       console.log(correctCount);
    }
    if (document.getElementById("opt2").checked ) 
    {   var a=(i+1)+'B';
        th(a);
        correctCount++;
        console.log(correctCount);
    }
    if (document.getElementById("opt3").checked )
     {
        var a=(i+1)+'C';
            th(a);
        correctCount++;
        console.log(correctCount);
    }
    // increment i for next question
    if(i==4)
    {
        /*console.log(correctCount);
        document.write("<body style='background-color:#348322;'>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>*****Your score is : "+correctCount+"*****</div>");
        document.write("</body>");
        document.getElementById("question").innerHTML="*****Your score is : "+correctCount+"*****";
        document.getElementById("optt1").innerHTML = "";
        document.getElementById("optt2").innerHTML ="";
        document.getElementById("optt3").innerHTML = "";
        */
       display();
    }
    else
    {// callback to generate
    generate(++i);

    }
}
}
function th(d)
{
    console.log(d);
    db.collection('survey').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
         if(doc.data().name == d)
        {    
            var a=doc.data().count;
            var b=doc.id;
            console.log(b);
            db.collection('survey').doc(b).update({
                count: a+1
            })
            console.log(a);
            console.log(doc.data());
        }
    })
})  
}


function display()
{   var j=0;
    var k=3;
    document.getElementById("question").innerHTML="*****Result*****";
        document.getElementById("optt1").innerHTML = "";
        document.getElementById("optt2").innerHTML ="";
        document.getElementById("optt3").innerHTML = "";
        document.getElementById("opt1").style.display="none";
        document.getElementById("opt2").style.display="none";
        document.getElementById("opt3").style.display="none";
function rendercafe(doc)
{   
    
    let li=document.createElement('li');
    let q=document.createElement('h3');
    let a=document.createElement('span');
    // setting the document id from firestore
    li.setAttribute('data-id', doc.id);
   
    a.textContent=doc.data().name+" Users chose this option "+doc.data().count;
    //appending
    li.appendChild(a);  
    cafelist.appendChild(li);
}


db.collection('survey').orderBy('name').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        if(k%3==0)
        disp();
        console.log(doc.data());
        rendercafe(doc);
        k++;
    })
    console.log(snapshot.docs);
})  



function disp()
{   
    let li=document.createElement('li');
    let q=document.createElement('h3');
    let a=document.createElement('div');
    let b=document.createElement('div');
    let c=document.createElement('div');
    // setting the document id from firestore
    q.textContent=jsonData[j].q;
    a.textContent=jsonData[j].opt1;
    b.textContent=jsonData[j].opt2;
    c.textContent=jsonData[j].opt3;
    //appending
    j++;
    li.appendChild(q); 
    li.appendChild(a);
    li.appendChild(b); 
    li.appendChild(c);
    cafelist.appendChild(li);
}
}
}
