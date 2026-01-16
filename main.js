const listDiv = document.getElementById("gang-list");

gangs.forEach(gang => {
  const item = document.createElement("div");
  item.classList.add("gang-item");
  item.innerHTML = `
    <h2>${gang.name}</h2>
    <p>${gang.description}</p>
    <a href="gang.html?id=${gang.id}">ดูรายละเอียด</a>
  `;
  listDiv.appendChild(item);
});
