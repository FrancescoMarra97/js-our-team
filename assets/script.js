const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png"
  }
];

const teamEl = document.getElementById("team");

let finalMarkup= " ";

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  console.log(member);
  
  const markup = generateTeamMember(member);
  console.log(markup);

  finalMarkup += markup
 
}

 teamEl.innerHTML=finalMarkup;









function generateTeamMember(member) {
  const {img, name, role, email} = member;

  return `
    <div  class="col-md-4">
                    <div class="card text-bg-dark mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src="${img}" class="img-fluid rounded-start" alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                                <h5 id="name" class="card-title">${name}</h5>
                                <p id="role" class="card-text mb-1">${role}</p>
                                <a href="#"><p id="email" class="card-text">${email}</p></a>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
  `
}