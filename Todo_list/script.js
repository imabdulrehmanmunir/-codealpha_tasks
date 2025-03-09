
//Global vars to store data globally
let totalTaskCount = 0 ;
let counter = 1
let penTaskCount = 0;
let comTasksCount = 0;
let pendingTasks = [];
let completedTasks = [];
function markComplete(){
    Array.from(document.querySelectorAll(".checkbox")).forEach(e=>{
        e.addEventListener("click",a=>{
                for (const element of pendingTasks) {
                    if (element.id==a.currentTarget.id&&a.currentTarget.checked) {
                        console.log(element.id==a.currentTarget.id);
                        completedTasks.push(element)
                        penTaskCount--;
                comTasksCount++;
                document.querySelector(".textarea-completed-tasks").getElementsByTagName("span")[0].innerHTML = comTasksCount
                document.querySelector(".textarea-pending-tasks").getElementsByTagName("span")[0].innerHTML = penTaskCount
                const indexToDelete = pendingTasks.findIndex(element => element.id == a.currentTarget.id);
                if (indexToDelete !== -1) {
                    pendingTasks.splice(indexToDelete, 1); 
                }
                let completedContainer = document.querySelector(".completed-tasks-container")
                let html = ""
                for (const element of completedTasks) {
                    html += ` <div class="completed-card">
                        <p>${element.name}</p>
                        <div class="line"></div>
                    </div> `
                }
                completedContainer.innerHTML = html
                let todoContainer = document.querySelector(".todo-card-container")
                 html = ""
                for (const element of pendingTasks) {
                    html += ` <div class="todo-card">
                                    <div class="task-details">
                                         <input type="checkbox" name="check" id ="${element.id}"  class="checkbox">
                                        <div class="task-name">
                                           ${element.name}
                                            <div class="task-description">
                                            ${element.description}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="task-priority">
                                        ${element.priority}
                                    </div>
                                </div>`
                }
                todoContainer.innerHTML = html
                markComplete()
                }
                
            }
        })
    })
}
function initList(){
    document.querySelector(".addTask").addEventListener("click",e=>{
        if (document.querySelector("body").offsetWidth<850) {
            document.querySelector(".new-dialog-box").style.left = "5vw"
            document.querySelector(".new-dialog-box").style.top = "10%"
        }       
        else{
            
            document.querySelector(".new-dialog-box").style.left = "32%"
       }
    })
    document.querySelector(".close").addEventListener("click",e=>{

        if (document.querySelector("body").offsetWidth<850) {
            document.querySelector(".new-dialog-box").style.left = "-200%"
        }       
        else{
            
         document.querySelector(".new-dialog-box").style.left = "-100%"
       }
    })
    document.querySelector(".add-btn").addEventListener("click",e=>{
        let task = {
            id: counter + 1,
            name: document.querySelector("#task-name").value,
            description: document.querySelector("#task-des").value,
            priority: document.querySelector("select").value,
            isCompleted: false
        }
        if (task.name) {
            counter++;
            totalTaskCount++;
            penTaskCount++;
            pendingTasks.push(task);
        }
        document.querySelector(".new-dialog-box").style.left = "-100%"
        document.querySelector("#task-name").value = ""
        document.querySelector("#task-des").value = ""
        let todoContainer = document.querySelector(".todo-card-container")
        let html = ""
        for (const element of pendingTasks) {
            html += ` <div class="todo-card">
                            <div class="task-details">
                                 <input type="checkbox" name="check" id ="${element.id}"  class="checkbox">
                                <div class="task-name">${element.name}<div class="task-description">
                                    ${element.description}
                                    </div>
                                </div>
                            </div>
                            <div class="task-priority">
                                ${element.priority}
                            </div>
                        </div>`
        }
        todoContainer.innerHTML = html
        document.querySelector(".textarea-total-tasks").getElementsByTagName("span")[0].innerHTML = totalTaskCount
        document.querySelector(".textarea-completed-tasks").getElementsByTagName("span")[0].innerHTML = comTasksCount
        document.querySelector(".textarea-pending-tasks").getElementsByTagName("span")[0].innerHTML = penTaskCount
        markComplete()
    })
    document.querySelector(".clearAll").addEventListener("click",e=>{
        pendingTasks = []
        totalTaskCount = 0
        penTaskCount = 0
        comTasksCount = 0
        completedTasks = []
        document.querySelector(".todo-card-container").innerHTML = ""
        document.querySelector(".completed-tasks-container").innerHTML = ""
        document.querySelector(".textarea-total-tasks").getElementsByTagName("span")[0].innerHTML = totalTaskCount
        document.querySelector(".textarea-completed-tasks").getElementsByTagName("span")[0].innerHTML = comTasksCount
        document.querySelector(".textarea-pending-tasks").getElementsByTagName("span")[0].innerHTML = penTaskCount
        
    })
}
initList()