class TodoItem {
    liElement = document.createElement("li");
    spanElement = document.createElement("span");
    buttonElement = document.createElement("button");
    buttonRemoveElement = document.createElement("button");
    divElement = document.createElement("div");
    

    constructor(spanValue, index){
        this.liElement.setAttribute('id', `activity-${index}`);
        
        let textSpan = document.createTextNode(spanValue);        
        this.spanElement.appendChild(textSpan);

        
        let textButton = document.createTextNode("Concluir");
        this.buttonElement.appendChild(textButton);
        this.buttonElement.setAttribute('class', 'conclude');
        this.buttonElement.addEventListener("click", (ev) => document.getElementById(`activity-${index}`).classList.add('concluded'))

        let textButtonRemove = document.createTextNode("Remover");
        this.buttonRemoveElement.appendChild(textButtonRemove);
        this.buttonRemoveElement.setAttribute('class', 'remove');
        this.buttonRemoveElement.addEventListener("click", (ev) => {
            document.getElementById("todo-list-ul").removeChild(document.getElementById(`activity-${index}`))
        })

        this.divElement.setAttribute('class','buttons');
        this.divElement.appendChild(this.buttonElement);
        this.divElement.appendChild(this.buttonRemoveElement);

        this.liElement.appendChild(this.spanElement);
        this.liElement.appendChild(this.divElement);
    }
    
    getNode(){
        return this.liElement;
    }


}

const todoListUl = document.getElementById("todo-list-ul");
let index = 0;

document.getElementById("new-activity").addEventListener("submit", (event) => {
    event.preventDefault();

    let activity = document.getElementById("activity-today");

    todoListUl.appendChild(new TodoItem(activity.value, index).getNode());

    activity.value = "";
    index++;
})

