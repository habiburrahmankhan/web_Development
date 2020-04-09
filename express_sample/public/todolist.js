$(function () {
   // console.log("Page is loaded ")
    let newTodoBox = $("#newtodo")
    let addtoBtn = $("#addtodo")
    let todolist = $("#todolist")

    addtoBtn.click(function () {
       let newTodo = newTodoBox.val()
        console.log(newTodo)
        $.post(
            "/todos" ,
            {task: newTodo} ,
            function (data) {
               todolist.empty();
               for (todo of data)
               {
                   todolist.append("<li>" + todo.task + "</li>") 
               }
            }

        )
    })
})
console.log("some Stuff ")