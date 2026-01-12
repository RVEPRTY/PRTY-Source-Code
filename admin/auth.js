const USERS = [
  { username: "rveprty.", passwordHash: "PUT_HASH_HERE", role: "owner" }
];

// LOGIN
function login(){
  const u = username.value;
  const p = password.value;
  const h = CryptoJS.SHA256(p).toString();

  const user = USERS.find(x=>x.username===u && x.passwordHash===h);
  if(!user){ error.innerText="Wrong login"; return; }

  localStorage.setItem("prtyUser",JSON.stringify(user));
  if(!localStorage.tickets) localStorage.tickets="[]";
  location.href="dashboard.html";
}

function logout(){
  localStorage.removeItem("prtyUser");
  location.href="login.html";
}

// DASHBOARD
function loadDashboard(){
  const user = JSON.parse(localStorage.prtyUser || null);
  if(!user) location.href="login.html";

  welcome.innerText = `Welcome ${user.username}`;
  if(user.role!=="owner") catBtn.style.display="none";
  render();
}

// TICKETS
function render(){
  const t = JSON.parse(localStorage.tickets);
  tickets.innerHTML="";
  let open=0;
  t.forEach((x,i)=>{
    if(x.status==="Open") open++;
    tickets.innerHTML+=`
    <div class="card ${x.sev}">
      <h3>${x.title}</h3>
      <p>${x.desc}</p>
      <small>${x.type} | ${x.sev} | ${x.status}</small><br>
      <button onclick="done(${i})">Done</button>
      <button onclick="del(${i})">Delete</button>
    </div>`;
  });
  taskCounter.innerText = open+" tasks";
}

function done(i){
  const t = JSON.parse(localStorage.tickets);
  t[i].status="Done";
  localStorage.tickets=JSON.stringify(t);
  render();
}
function del(i){
  const t = JSON.parse(localStorage.tickets);
  t.splice(i,1);
  localStorage.tickets=JSON.stringify(t);
  render();
}

// ADD
function openAdd(){ addPopup.style.display="block"; }
function closeAdd(){ addPopup.style.display="none"; }
function addTicket(){
  const t = JSON.parse(localStorage.tickets);
  t.push({
    type:type.value,
    sev:sev.value,
    title:title.value,
    desc:desc.value,
    status:"Open"
  });
  localStorage.tickets=JSON.stringify(t);
  closeAdd(); render();
}

// CAT MODE
function toggleCat(){
  catOverlay.style.display = catOverlay.style.display=="flex"?"none":"flex";
  const t = JSON.parse(localStorage.tickets);
  const c={Low:0,Medium:0,High:0,Critical:0};
  t.forEach(x=>c[x.sev]++);
  stats.innerText=`Low:${c.Low} Medium:${c.Medium} High:${c.High} Critical:${c.Critical}`;
}
