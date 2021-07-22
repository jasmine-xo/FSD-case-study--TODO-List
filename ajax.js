function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange =function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var output="";
           
            for(var i=0;i<response.length;i++){
                output += '<span class="checkmark"><input  type="checkbox"   name="chk" onclick="return myfun() ">' + response[i].title + "</span><br><br>";
                
            }
            document.getElementById("demo").innerHTML=output;
            
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
function myfun()
        {
            var a=document.getElementsByName('chk');
            var newvar=0;
            var count;
            for(count=0;count<a.length;count++){
                if(a[count].checked==true){
                    newvar=newvar+1;
                }
            }
            if(newvar>=5){
                alert("Congrats. 5 Tasks have been Successfully Completed"); 
                return true;
                
                   
                
                
            }


        }
