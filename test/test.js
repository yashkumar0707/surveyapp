// json array movement variable
var i = 0;
var j=0;
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
    var i=3;
function rendercafe(doc)
{
    let li=document.createElement('li');
    let q=document.createElement('h3');
    let a=document.createElement('span');
    // setting the document id from firestore
    li.setAttribute('data-id',doc.id);
    a.textContent=doc.data().name+" Users chose this option "+doc.data().count;
    //appending
    li.appendChild(a);  
}


db.collection('survey').orderBy('name').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        if(i%3==0)
        disp();
        console.log(doc.data());
        rendercafe(doc);
        i++;
    })
    console.log(snapshot.docs);
})  



function disp()
{   
    let li=document.createElement('li');
    let q=document.createElement('h3');
    let a=document.createElement('span');
    let b=document.createElement('span');
    let c=document.createElement('span');
    // setting the document id from firestore
    q.textContent=jsonData[j].q;
    a.textContent=jsonData[j].a;
    b.textContent=jsonData[j].b;
    c.textContent=jsonData[j].c;
    //appending
    j++;
    li.appendChild(q); 
    li.appendChild(a);
    li.appendChild(b); 
    li.appendChild(c);
}
}
