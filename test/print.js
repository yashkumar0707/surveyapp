var i=3;
var j =0;
const cafelist= document.querySelector('#sur');
function rendercafe(doc)
{   console.log(doc.id);
    console.log(doc.data().name);
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
        if(i%3==0)
        disp();
        console.log(doc.id);
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