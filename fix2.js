const fs = require("fs");
let code = fs.readFileSync("app.js", "utf8");

const startRegex = /function saveRecruiterCompany\(e\) \{/;
const endRegex = /renderRecruiterDashboard\('company'\);\r?\n\}/;
const matchStart = code.match(startRegex);
const matchEnd = code.match(endRegex);

if (matchStart && matchEnd) {
  const startIndex = matchStart.index;
  const endIndex = matchEnd.index + matchEnd[0].length;
  const before = code.substring(0, startIndex);
  const after = code.substring(endIndex);
  
  const newCode = `async function saveRecruiterCompany(e) {
  if (e) e.preventDefault();

  const newCompName = document.getElementById('recCompNameInput').value.trim();
  const logo = document.getElementById('recCompLogoInput').value.trim();
  const location = document.getElementById('recCompLocInput').value.trim();
  const desc = document.getElementById('recCompDescInput').value.trim();

  if (!newCompName || !logo || !location || !desc) {
    showToast('Vui lòng điền đầy đủ các trường thông tin công ty!', 'error');
    return;
  }

  const user = state.currentUser;
  
  let companyData = {
    name: newCompName,
    logo,
    location,
    desc
  };

  const compIdx = state.companies.findIndex(c => c.name === user.companyName);
  if (compIdx !== -1) {
    companyData.id = state.companies[compIdx].id;
    state.companies[compIdx].name = newCompName;
    state.companies[compIdx].logo = logo;
    state.companies[compIdx].location = location;
    state.companies[compIdx].desc = desc;
  } else {
    companyData.id = 'c_' + Date.now();
    state.companies.push(companyData);
  }

  if (isBackendConnected) {
    try {
      await fetch(\`\${API_BASE_URL}/companies\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(companyData)
      });
      await fetch(\`\${API_BASE_URL}/users/\${user.id}/company\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName: newCompName, companyId: companyData.id })
      });
      const reloadCompsRes = await fetch(\`\${API_BASE_URL}/companies\`);
      state.companies = await reloadCompsRes.json();
      const usersRes = await fetch(\`\${API_BASE_URL}/users\`);
      state.users = await usersRes.json();
    } catch (err) {
      console.error(err);
    }
  }

  user.companyName = newCompName;
  user.companyId = companyData.id;
  const userIdx = state.users.findIndex(u => u.id === user.id);
  if (userIdx !== -1) {
    state.users[userIdx].companyName = newCompName;
    state.users[userIdx].companyId = companyData.id;
  }

  state.jobs.forEach(j => {
    if (j.companyId === user.companyId || j.companyName === user.companyName) {
      j.companyName = newCompName;
    }
  });

  saveState();
  showToast('Cập nhật thông tin công ty thành công!', 'success');
  renderRecruiterDashboard('company');
}`;

  fs.writeFileSync("app.js", before + newCode + after, "utf8");
  console.log("Success");
} else {
  console.log("Could not find boundaries");
}
