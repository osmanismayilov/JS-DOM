let addBtn = document.getElementById("add");
let input = document.getElementById("input");
let parentUl = document.querySelector("#parent");
let removeBtn = document.getElementById("remove");
let removeSelected = document.getElementById("removeSelected");

addBtn.addEventListener("click",function(){
    parentUl.innerHTML = "";
    let count = input.value;
    for (let i=1; i<=count; i++){
        let Li = document.createElement("li");
        Li.innerText = i;
        Li.className = "list-group-item";
        Li.onclick = function(){
            Li.classList.add("selected")
        }
        let iTag = document.createElement("i");
        iTag.classList = "fa-solid fa-xmark";
        iTag.onclick = function(){
            this.parentNode.remove();
        }
        Li.append(iTag);
        parentUl.append(Li);
        
    }
    input.value = "";
})

removeBtn.addEventListener("click", function(){
    parentUl.innerHTML = "";
})

removeSelected.addEventListener("click", function(){
    let selectedItems = document.querySelectorAll(".selected");
    for (const item of selectedItems) {
        item.remove()
    }
})