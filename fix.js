const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

code = code.replace(
  "const comp = state.companies.find(c => c.name === user.companyName) || { id: 'c1', name: 'FPT Software' };",
  "const comp = state.companies.find(c => c.name === user.companyName) || { id: user.companyId || 'c_new', name: user.companyName || 'Công ty m?i dang ký' };"
);

const newCompanyCode = sync function saveRecruiterCompany(e) {
  if (e) e.preventDefault();

  const newCompName = document.getElementById('recCompNameInput').value.trim();
  const logo = document.getElementById('recCompLogoInput').value.trim();
  const location = document.getElementById('recCompLocInput').value.trim();
  const desc = document.getElementById('recCompDescInput').value.trim();

  if (!newCompName || !logo || !location || !desc) {
    showToast('Vui lòng di?n d?y d? các tru?ng thông tin công ty!', 'error');
    return;
  }

  const user = state.currentUser;
  
  let companyData = {
    name: newCompName,
    logo,
    location,
    desc
  };

  // Find and update company
  const compIdx = state.companies.findIndex(c => c.name === user.companyName);
  if (compIdx !== -1) {
    companyData.id = state.companies[compIdx].id;
    state.companies[compIdx].name = newCompName;
    state.companies[compIdx].logo = logo;
    state.companies[compIdx].location = location;
    state.companies[compIdx].desc = desc;
  } else {
    // Create new
    companyData.id = 'c_' + Date.now();
    state.companies.push(companyData);
  }

  // Update backend if connected
  if (isBackendConnected) {
    try {
      await fetch(\\/companies\, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(companyData)
      });
      await fetch(\\/users/\/company\, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName: newCompName, companyId: companyData.id })
      });
      // reload data
      const reloadCompsRes = await fetch(\\/companies\);
      state.companies = await reloadCompsRes.json();
      const usersRes = await fetch(\\/users\);
      state.users = await usersRes.json();
    } catch (err) {
      console.error(err);
    }
  }

  // Update user's companyName
  user.companyName = newCompName;
  user.companyId = companyData.id;
  const userIdx = state.users.findIndex(u => u.id === user.id);
  if (userIdx !== -1) {
    state.users[userIdx].companyName = newCompName;
    state.users[userIdx].companyId = companyData.id;
  }

  // Update companyName on existing jobs of this recruiter
  state.jobs.forEach(j => {
    if (j.companyId === user.companyId || j.companyName === user.companyName) {
      j.companyName = newCompName;
    }
  });

  saveState();
  showToast('C?p nh?t thông tin công ty thành công!', 'success');
  renderRecruiterDashboard('company');
};

code = code.replace(/function saveRecruiterCompany\(e\) \{[\s\S]*?renderRecruiterDashboard\('company'\);\s*\}/, newCompanyCode);

fs.writeFileSync('app.js', code, 'utf8');
console.log("Updated app.js");
