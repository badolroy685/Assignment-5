let remainingTask = 6;
let taskCompleted = 23;
const completedTaskElement = document.getElementById('task-completed');
const remainingTaskElement = document.getElementById('task-remaining');
const completeButton = document.getElementById('btn-complete');
const card1 = document.getElementById('card1').textContent;
const card2 = document.getElementById('card2').textContent;
const card3 = document.getElementById('card3').textContent;
const card4 = document.getElementById('card4').textContent;
const card5 = document.getElementById('card5').textContent;
const card6 = document.getElementById('card6').textContent;



document.getElementById('btn-complete1')
    .addEventListener('click', function(){
        alert('Board updated Successfully');
        if(remainingTask > 0){
            remainingTask--;
            remainingTaskElement.textContent = remainingTask;

            taskCompleted++;
            completedTaskElement.textContent = taskCompleted;

            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const timeElement = document.createElement("p");
            timeElement.textContent = `${timeString}`

            const activityContainer = document.getElementById('activities')
            const p = document.createElement("p");
            p.classList.add("activity1")
            p.innerText = `
            You have completed the task ${card1} issue at ${timeElement.textContent}
            `
            activityContainer.appendChild(p);
           
            
            this.disabled = true; 

          
            if(remainingTask === 0 ){
                alert('congrates!!! You have completed all the current task');
            }
        }

       

    })

document.getElementById('btn-complete2')
    .addEventListener('click', function(){
        alert('Board updated Successfully');
        if(remainingTask > 0){
            remainingTask--;
            remainingTaskElement.textContent = remainingTask;

            taskCompleted++;
            completedTaskElement.textContent = taskCompleted;

            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const timeElement = document.createElement("p");
            timeElement.textContent = `${timeString}`

            const activityContainer = document.getElementById('activities')
            const p = document.createElement("p");
            p.classList.add("activity1")
            p.innerText = `
            You have completed the task ${card2} issue at ${timeElement.textContent}
            `
            activityContainer.appendChild(p);
           
            
            this.disabled = true; 

            if(remainingTask === 0 ){
                alert('congrates!!! You have completed all the current task');
            }
           
        }

    })
document.getElementById('btn-complete3')
    .addEventListener('click', function(){
        alert('Board updated Successfully');
        if(remainingTask > 0){
            remainingTask--;
            remainingTaskElement.textContent = remainingTask;

            taskCompleted++;
            completedTaskElement.textContent = taskCompleted;

            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const timeElement = document.createElement("p");
            timeElement.textContent = `${timeString}`

            const activityContainer = document.getElementById('activities')
            const p = document.createElement("p");
            p.classList.add("activity1")
            p.innerText = `
            You have completed the task ${card3} issue at ${timeElement.textContent}
            `
            activityContainer.appendChild(p);
           
            
            this.disabled = true; 
            
                      if(remainingTask === 0 ){
                            alert('congrates!!! You have completed all the current task');
                        }
        }
       

    })
document.getElementById('btn-complete4')
    .addEventListener('click', function(){
        alert('Board updated Successfully');
        if(remainingTask > 0){
            remainingTask--;
            remainingTaskElement.textContent = remainingTask;

            taskCompleted++;
            completedTaskElement.textContent = taskCompleted;

            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const timeElement = document.createElement("p");
            timeElement.textContent = `${timeString}`

            const activityContainer = document.getElementById('activities')
            const p = document.createElement("p");
            p.classList.add("activity1")
            p.innerText = `
            You have completed the task ${card4} issue at ${timeElement.textContent}
            `
            activityContainer.appendChild(p);
           
            
            this.disabled = true; 

            if(remainingTask === 0 ){
                  alert('congrates!!! You have completed all the current task');
              }
        }
       

    })
document.getElementById('btn-complete5')
    .addEventListener('click', function(){
        alert('Board updated Successfully');
        if(remainingTask > 0){
            remainingTask--;
            remainingTaskElement.textContent = remainingTask;

            taskCompleted++;
            completedTaskElement.textContent = taskCompleted;

            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const timeElement = document.createElement("p");
            timeElement.textContent = `${timeString}`

            const activityContainer = document.getElementById('activities')
            const p = document.createElement("p");
            p.classList.add("activity1")
            p.innerText = `
            You have completed the task ${card5} issue at ${timeElement.textContent}
            `
            activityContainer.appendChild(p);
           
            
            this.disabled = true; 
            if(remainingTask === 0 ){
                 alert('congrates!!! You have completed all the current task');
             }
        }
       

    })
document.getElementById('btn-complete6')
    .addEventListener('click', function(){
        alert('Board updated Successfully');
       
        if(remainingTask > 0){
            remainingTask--;
            remainingTaskElement.textContent = remainingTask;

            taskCompleted++;
            completedTaskElement.textContent = taskCompleted;

            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const timeElement = document.createElement("p");
            timeElement.textContent = `${timeString}`

            const activityContainer = document.getElementById('activities');
            const p = document.createElement("p");
            p.classList.add("activity1")
            p.innerText = `
            You have completed the task ${card6} issue at ${timeElement.textContent}
            `
            activityContainer.appendChild(p);
           
            
            this.disabled = true; 

            if(remainingTask === 0 ){
                  alert('congrates!!! You have completed all the current task');
              }
        }
       

    })


    document.getElementById('clear-history')
        .addEventListener('click', function (event){
            event.preventDefault();
            const activityContainer = document.getElementById('activities');
            activityContainer.innerHTML = '';
        })




