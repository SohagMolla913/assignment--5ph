document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("history-list").innerHTML = "";

  localStorage.removeItem("searchHistory");
});
