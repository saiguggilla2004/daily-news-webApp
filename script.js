let key="3503f7a34b244582a643cb7f62e4ede0";
let cardData=document.querySelector(".cardData");
let searchbtn=document.getElementById("searchbtn");//JSON-javascript object notation,the data is represented as key-value pair and enhances the readability of humans
let inputData=document.getElementById("inputData");//JSON data is the data which is transmitted between the API and our application
let searchType=document.getElementById("type");
const getdata = async(input) =>{//asyn specifies that it will perform asynchronous operations like searching
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);//fetch is used to maje a request to news api
    let jsonData=await res.json()//the response is converted json data
    console.log(jsonData.articles);//the articles are logged into the console
    searchType.innerText="Search : "+input;
    inputData.value="";
    cardData.innerHTML="";

    jsonData.articles.forEach(function(article){//foreach loop is like for loop and it iterates through each article and creates divs for each article and these divs may contain the image,title and description
        console.log(article);
        
        let divs = document.createElement("div");
        divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML=`
    <img src="${article.urlToImage}" alt="">
    <h2>${article.title}</h2>
    <p>${article.description}</p>
    
    `
    divs.addEventListener("click",function(){
        window.open(article.url);
    })
       
    
    })

}
window.addEventListener("load",function(){
    getdata("india");
})
window.
searchbtn.addEventListener("click",function(){
    let inputText=inputData.value;
    getdata(inputText);
})
function navClick(navName){
    if(navName=="politics"){
        document.getElementById("politics").style.color="blue";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
    }
    if(navName=="sports"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="blue";
        document.getElementById("technology").style.color="white";
    }
    if(navName=="technology"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="blue";
    }
    getdata(navName);
}

function login(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email=="sai@gmail.com" && password=="1234")
    {
         window.location.assign('index.html');
         alert("logged in");
    }
    else{
         alert("failed");
    }
}