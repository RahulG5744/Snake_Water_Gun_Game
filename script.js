let user = prompt("Enter S, W or G (Snake, Water or Gun)").toUpperCase();

if (!["S", "W", "G"].includes(user)) {
  alert("Invalid input! Please refresh and enter S, W, or G.");
} else {
  let cpuI = Math.floor(Math.random() * 3);
  let cpu = ["S", "W", "G"][cpuI];

  const match = (cpu, user) => {
    if (cpu === user) return "Nobody";
    else if (
      (cpu === "S" && user === "W") ||
      (cpu === "W" && user === "G") ||
      (cpu === "G" && user === "S")
    ) return "CPU";
    else return "User";
  }

  let result = match(cpu, user);

  document.body.innerHTML = `
    <div style="text-align:center; font-size:24px; margin-top:50px; font-family:Arial;">
      <h2>🐍 Snake Water Gun Game 🔫</h2>
      <p><strong>CPU:</strong> ${cpu}</p>
      <p><strong>User:</strong> ${user}</p>
      <h3>The winner is: <span style="color:#4CAF50">${result.toUpperCase()}</span></h3>
    </div>
  `;

  alert(`You chose ${user}\nComputer chose ${cpu}\nWinner: ${result.toUpperCase()}`);
}
