const name = document.getElementById("name");
const tagsContainer = document.querySelector(".tags");

const addName = () => {
    if (name.value === "" ||  name.value === " ") {
        return null;
    }


    const tag = document.createElement("div");
    tag.setAttribute("class", "tag");

    tag.innerText = `Hello  I am ${name.value}`;

    tagsContainer.append(tag);


}