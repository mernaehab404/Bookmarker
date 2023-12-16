var siteName = document.getElementById("bookName")
var siteUrl = document.getElementById("bookUrl")

var siteList=[]
if(localStorage.getItem("details")!=null){
    siteList= JSON.parse(localStorage.getItem("details"))
    display()
}

function main(){
    submit()
    display()
    clear()
}
function submit(){
    var sites={
        name:siteName.value,
        url:siteUrl.value

    }
    if(!validationAlert()){
  return
    }
  
    siteList.push(sites)
    localStorage.setItem('details',JSON.stringify(siteList))
    display()


}
function display(){
    var cartona=''
    for (var i=0;i < siteList.length; i++){
        cartona +=`  <tr>
        <td>${i}</td>
        <td>${siteList[i].name}</td>
        <td><a href="${siteList[i].url}" target="_blank">${siteList[i].url}</a></td>
       
        <td><button onclick="deleteBook(${i})" class="btn btn-danger">DELETE</button></td>
    </tr>
        `
      
    }
document.getElementById("tbody").innerHTML=cartona
}
function clear(){
    siteName.value=""
    siteUrl.value="" 
}
function deleteBook(index){
    siteList.splice(index, 1)
    localStorage.setItem('details',JSON.stringify(siteList))
    display()

}
function validationAlert(){
    var name = siteName.value;
    var url = siteUrl.value;
    var validationErrors = [];
    
    var namePattern = /^[A-Z][a-z]{3,8}$/;
    if(name!=namePattern){
        if(!namePattern.test(name)){
            validationErrors.push('Site name must contain at least 3 characters& start with capital letter.');
        }
    }
 
    var urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if(url!=urlPattern){
    
        if (!urlPattern.test(url)) {
            validationErrors.push('Site URL is not valid.');
        }
    }
    if (validationErrors.length > 0) {
        alert(validationErrors.join('\n'));
        return false; 
}
return true;
}
