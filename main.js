let user = document.querySelector(".container .header input");
let btn = document.getElementById("btnGet");
let areaText = document.querySelector(".container .data");

btn.addEventListener("click", function () {
  if (user.value === "") {
    areaText.innerHTML = `<span>Please Enter Your User Name</span>`;
  } else {
    areaText.innerHTML = "";
    fetch(`https://api.github.com/users/${user.value}/repos`)
      .then((e) => e.json())
      .then((data) => {
        data.forEach((e) => {
          let mainDiv = document.createElement("div");
          mainDiv.textContent = `${e.name} `;
          let urlRep = document.createElement("a");
          urlRep.textContent = "Visit Repo";
          urlRep.href = `https://github.com/${user.value}/${e.name}`;
          urlRep.target = "_blank";
          mainDiv.className = "box";
          let star = document.createElement("span");
          star.textContent = `Star: ${e.stargazers_count}`;
          mainDiv.appendChild(urlRep);
          mainDiv.appendChild(star);
          areaText.appendChild(mainDiv);
        });
      });
  }
});
