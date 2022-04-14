let addbutton=document.querySelector(".add");
let dialogbox=document.querySelector("#dialog");
let crossbutton=document.querySelector(".close");
let title=document.querySelector(".title");
console.log(title);
let text=document.querySelector("#todo_text");
let todocontainer=document.querySelector(".todo_container");
let error=document.querySelector(".error");
addbutton.addEventListener("click",function(){
    dialogbox.style.display="flex";
    
   
})
crossbutton.addEventListener("click",function(){
    dialogbox.style.display="none";
})
function addtodo()
{
    if(title.value!=="" && text.value!=="")
    {
        let todotext=`<div class="todo_list">
        <div class="header">${title.value}
            <button class="cross">X</button>
            <button class="minimize">-</button>
         </div>
       <textarea rows="14" class="text">${text.value}</textarea>
       </div>`
        todocontainer.innerHTML=todocontainer.innerHTML+todotext;
        dialogbox.style.display="none";
        title.value="";
        text.value="";
        error.style.display="none";
        deletetodolist();
        minimizetodo();
    }
    else
    {
        error.style.display="flex";

    }
    function deletetodolist()
    {
        let closebtn=document.querySelectorAll(".cross");
        for(let i=0;i<closebtn.length;i++)
        {
            closebtn[i].addEventListener("click",(e)=>{
                let box=e.target.closest(".todo_list");
                box.remove();
                console.log(box);
            })
        }

    }
    function minimizetodo()
    {
        let minibtn=document.querySelectorAll(".minimize");
        for(let i=0;i<minibtn.length;i++)
        {
             minibtn[i].addEventListener("click",(e)=>{
                let box=e.target.closest(".todo_list");
                let textArea=box.querySelector(".text");
                if(textArea.style.display=="flex")
                {
                    textArea.style.display="none";

                }
                else{
                    textArea.style.display="flex";
                }
            })
        }
    }

}
