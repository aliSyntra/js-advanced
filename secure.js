async function fetchApi(){
    try{
        const api= await fetch ("https://randomuser.me/api/?results=100");
        const data = await api.json();
        console.log(data) ;
         
         dataUser(data);
    }
    catch(error){
    // console.log(Error)
    };
   
};
fetchApi();

function dataUser(data){
    let div = `<div>`;
    for(let result  of data.results){
        div+= `
        <br> 
        ${result.location.country}<br>
       <br>  
        `
        if(result.location.country=="Switzerland"){
            console.log("idereen")
            chekCountries();
        }
    };
    div+= "</div>"
    document.getElementById("output").innerHTML=div;
};
function chekCountries(){
    
    let div2 = `<div><h1>iedereen komt als je leo roept</h1></div>`
    document.getElementById("melding").innerHTML=div2
}

function loguit(){
window.location.href="index.html"
localStorage.removeItem('user');
}
