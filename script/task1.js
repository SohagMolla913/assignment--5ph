// const leftSection = document.getElementById("left-section");
// const rightSection = document.getElementById("right-section");
// const h1Tag = leftSection.getElementById("carderd");

// // const getCountDiv = document.getElementById("task-count");
// const buttons = document.querySelectorAll("#btn");
// console.log(buttons);

// for (let titels of h1Tag) {
//   const btn = titels.querySelector("button");
//   btn.addEventListener("click", () => {
//     const h1 = document.createElement("h1");
//     const divText = titels.querySelector("h1").textContent;
//     h1.innerText = divText;
//     alert("task");
//     rightSection.append(h1);
//     btn.setAttribute("disabled", true);
//   });
// }
const leftSection = document.getElementById("left-section");
const rightSection = document.getElementById("right-section");
const getCountDiv = document.getElementById("task-count");
const getCountP = document.getElementById("task-count-p");

// Select all h1 elements inside leftSection
const h1Tags = leftSection.getElementsByTagName("h1");

// Select all buttons inside leftSection
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
