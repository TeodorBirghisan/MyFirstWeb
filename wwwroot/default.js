function addNewcomer() {
    //asign event handler onClick
    var node = document.createElement("li");
    node.innerText = newcomer.value;
    list.appendChild(node);
}