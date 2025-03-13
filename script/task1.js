const leftSection = document.getElementById("left-section");
const rightSection = document.getElementById("right-section");
const getCountDiv = document.getElementById("task-count");
const getCountP = document.getElementById("task-count-p");

const h1Tags = leftSection.getElementsByTagName("h1");

const buttons = leftSection.querySelectorAll("button");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const h1 = document.createElement("h1");
    const divText = h1Tags[index].textContent;
    const currentTime = new Date().toLocaleDateString();
    h1.innerText = divText;
    alert("Board update Successfully");
    rightSection.appendChild(h1);
    btn.setAttribute("disabled", true);

    let currentCount = parseInt(getCountDiv.innerText);
    let updatedCount = currentCount - 1;
    getCountDiv.innerText = updatedCount;

    let currentCountp = parseInt(getCountP.innerText);
    let updatedCountp = currentCountp + 1;
    getCountP.innerText = updatedCountp;
  });
});
