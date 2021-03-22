document.getElementById("add").addEventListener("click", function addNewcomer() {
    var node = document.createElement("li");
    node.innerText = newcomer.value;
    list.appendChild(node);
});