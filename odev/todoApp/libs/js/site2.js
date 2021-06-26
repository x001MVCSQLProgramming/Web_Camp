
//alert("Hello, you can do them!") çalışıyor mu diye test ettik.

let todos=[
    {
        id:1,
        task:"Do homework",
        isDone:false
    },
    {
        id:2,
        task:"Type Codes",
        isDone:true
    },
    {
        id:3,
        task:"Solve algorithms",
        isDone:false
    }
];

// function listTodos(){
//     $.each(todos,function(index,todo){
//         console.log(index,todo);
//     });
// }

//events
//new todo
// $("#frmTodo").submit(function(event){
//     event.preventDefault();//Ben müdahale etmediğim sürece teslim etme bir şey yapma butona tıklanınca
//     let todo ={
//         id:0,
//         task:$("#inputTask").val().trim(),
//         isDone:false
//     }
//     todos.push(todo);
//     this.reset();
//     listTodos();
// });

$("#frmTodo").submit(function(event){
    event.preventDefault();//Ben müdahale etmediğim sürece teslim etme bir şey yapma butona tıklanınca
    let todo ={
        id:maxId()+1,
        task:$("#inputTask").val().trim(),
        isDone:false
    }
    todos.push(todo);
    this.reset();
    listTodos();
});


//Functions
function maxId(){
    let max=0;

    for (const todo in todos){
        if(todo.id>max)
            max=todo.id;
    }
}

function listTodos(){
    $("ul#todos").html("");
    $.each(todos,function(index,todo){
        let li=$("<li/>");
        let cb=$("<input/>")
                    .attr("type","checkbox")
                    .attr("data-id",todo.id);
        if (todo.isDone){
            cb.prop("checked",true);
            li.addClass("done");
        }
        else{
            li.addClass("undone");
        }
        li.append(cb);
        li.append(" "+todo.task);
        $("ul#todos").append(li);
    });
        yildiz=$("li").append(" *");
}
    

listTodos();

    
