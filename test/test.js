// json array movement variable
var i = 0;
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

function checkAnswer() {
    console.log('yash');
    console.log(jsonData[i].opt1);
        if (document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer) 
        { var a=i+'A';
            th()
       correctCount++;
       console.log(correctCount);
    }
    if (document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer) 
    {
        correctCount++;
        console.log(correctCount);
    }
    if (document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer) {
        correctCount++;
        console.log(correctCount);
    }
    // increment i for next question
    i++;
    if(jsonData.length-1 < i){
        /*console.log(correctCount);
        document.write("<body style='background-color:#348322;'>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>*****Your score is : "+correctCount+"*****</div>");
        document.write("</body>");*/
        document.getElementById("question").innerHTML="*****Your score is : "+correctCount+"*****";
        document.getElementById("optt1").innerHTML = jsonData[index].opt1;
        document.getElementById("optt2").innerHTML = jsonData[index].opt2;
        document.getElementById("optt3").innerHTML = jsonData[index].opt3;
    }
    // callback to generate
    generate(i);

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