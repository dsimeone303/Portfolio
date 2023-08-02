//to get away from inline event handlers:
//need to do this for all the god damn event halders
//think we should switch up to 3 event listeners, 1) for future 1 for catagories and 1 for
const btns = document.querySelectorAll("button");

btns.forEach(btn =>
  btn.addEventListener("click", event => {
    const thebtn = event.currentTarget;
    switch (thebtn.id) {
      case "resumebtn":
      case 'resumeAchr"':
        Resume();
        break;
      case "treehouseBtn":
      case "contactBtn":
      case "dropMenuBtn":
      case "profSumBtn":
      case "pastWrkBtn":
      case "projBtn":
        tabs(thebtn);
        break;
    }
  })
);

//all button onclick functions.
function Resume() {
  let downloadLink = document.createElement("a");
  downloadLink.href = "/static/images/main/Dalton_Simeone_Resume_2023.pdf";
  downloadLink.download = "Dalton Simeone's Resume";
  downloadLink.target = "_blank";

  //append to DOM
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

//when tabs are pressed
function tabs(e) {
  if (document.getElementById("blurry") === null) {
    console.log("its not open");
    const html = document.querySelector("html");
    const blurry = document.createElement("div");
    const closeBlurry = document.createElement("button");
    closeBlurry.setAttribute("id", "closeBlurry");
    closeBlurry.classList.add("black-expand-btmbdr-btn");
    closeBlurry.innerHTML = "[CLOSE]";
    blurry.classList.add("blurry_ani_in");
    blurry.setAttribute("id", "blurry");
    console.log(e.id);

    if (e.id === "ps") {
      const prof_img = [
        {
          src: "static/images/main/citadel.jpg",
          alt: "The Citadel Parade deck"
        },
        {
          src: "static/images/main/control-panel.jpg",
          alt: "PLC panel layout"
        },
        { src: "static/images/main/mep-plans.jpeg", alt: "MEP drawings" }
      ];
      const prof_info = [
        { h2s: "Professional Summary:" },
        {
          p1:
            "I'm a self taught software developer with a focus in front-end development with back-end(node.js) and database(mySQL) understandings. I have over 9 years of experience in tasks such as simultaneously managing multiple projects, leading teams to project completion, understanding variety of programs, strong communication skills with vendors and clients, and in some instances teaching the clients how to effectively use the software."
        },
        {
          li_1:
            "Graduated 2015 with Bachelors of Science in Electrical Engineering from The Citadel.",
          li_2: "2014-2018 I worked as a PLC Programmer/Project Manager.",
          li_3:
            "2018-present MEP engineering focused in Electrical engineering."
        },
        {
          p3:
            "I started learning to be a developer in 2022, I began educating myself with the raw data, such as this front page, it was created only using HTML, CSS, and JavaScript. I also have experience in the React.js library, express.js framework, and pug templating which have been implemented in some of the projects, and plan on moving onto React native in the near future."
        }
      ];
      const prof_li = [
        "Graduated 2015 with Bachelors of Science in Electrical Engineering from The Citadel.",
        "2014-2018 I worked as a PLC Programmer/Project Manager.",
        "2018-present MEP engineering focused in Electrical engineering."
      ];
      const div1 = document.createElement("div");
      const h2_1 = document.createElement("h2");
      const p1 = document.createElement("p");
      const ul_1 = document.createElement("ul");
      const p3 = document.createElement("p");
      div1.classList.add("tabs_layout");
      ul_1.setAttribute("id", "profsum_ul");
      h2_1.innerHTML = prof_info[0].h2s;
      p1.innerHTML = prof_info[1].p1;
      for (i = 0; i < prof_li.length; i++) {
        const li = document.createElement("li");
        const li_p = document.createElement("p");
        const images = document.createElement("img");
        li_p.innerHTML = prof_li[i];
        images.src = prof_img[i].src;
        images.alt = prof_img[i].alt;
        li.appendChild(li_p);
        li.appendChild(images);
        if (i < prof_li.length) {
          const li_hr = document.createElement("hr");
          li.appendChild(li_hr);
        }
        ul_1.appendChild(li);
      }
      p3.innerHTML = prof_info[3].p3;
      div1.appendChild(h2_1);
      div1.appendChild(p1);
      div1.appendChild(ul_1);
      div1.appendChild(p3);
      div1.appendChild(closeBlurry);
      blurry.appendChild(div1);
      html.append(blurry);
    } else if (e.id === "pastWrkBtn") {
      pastWork(e, html, closeBlurry, blurry);
    } else if (e.id === "projBtn") {
      profilebtn(e, closeBlurry, blurry, html);
    } else if (e.id === "contactBtn") {
      contactbtn(e, closeBlurry, blurry, html);
    } else if (e.id === "drop-menu") {
      //create da buttons
      dropdownClicked(blurry, closeBlurry, html);
    } else if (e.id === "treehouseBtn") {
      //see treehouse.js
      Treehouse(e, closeBlurry, blurry, html);
    }
    closeBlurry.focus();
    // modalOpen();
    listener(blurry);
  } else if (e.id === "closeBlurry") {
    return closeBlurry();
  }
  console.log(e.id);
  switch (e.id) {
    case "Project-WTD":
    case "Project-LEH":
    case "Project-MH":
    case "Project-SS":
      redirect(e);
      break;
    case "copyE":
      copyEmail(e);
  }
}

//small devices
function dropdownClicked(blurry, closeBlurry, html) {
  const sect1 = document.createElement("section");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");
  sect1.setAttribute("id", "dd-container");
  btns = [btn1, btn2, btn3];
  const btn_info = [
    {
      bclass: "black-expand-btmbdr-btn",
      texts: "Download Resume",
      clicking: "Resume()"
    },
    {
      bclass: "black-expand-btmbdr-btn",
      cclass: "treehouse",
      texts: "Tree House Profile Achievements",
      clicking: "tabs(event)"
    },
    {
      bclass: "black-expand-btmbdr-btn",
      cclass: "contact",
      texts: "Contact",
      clicking: "tabs(event)"
    }
  ];
  for (let i = 0; i < btn_info.length; i++) {
    btns[i].classList.add(btn_info[i].bclass);
    btns[i].innerHTML = btn_info[i].texts;
    btns[i].setAttribute("onclick", btn_info[i].clicking);
    if (btn_info[i].cclass) {
      btns[i].classList.add(btn_info[i].cclass);
    }
    sect1.appendChild(btns[i]);
  }
  blurry.appendChild(sect1);
  blurry.appendChild(closeBlurry);
  html.append(blurry);
  closeBlurry.focus();
  dropdownEvent(blurry, sect1);
}

function dropdownEvent(blurry, sect1) {
  var dd_used = true;
  window.addEventListener("resize", closeDDbyW);

  function closeDDbyW(event) {
    var w = window.innerWidth;
    if (w > 660 && document.getElementById("dd-container")) {
      closeBlurry();
      window.removeEventListener("resize", closeDDbyW);
    }
  }
  blurry.addEventListener("click", closeDD);

  function closeDD() {
    closeBlurry();
    //blurry.removeEventListener("click", closeDD(event));
  }
}

//have to find a way to remove the event listeners or i'm adding a new one each time.

//Profiles:
function profilebtn(e, closeBlurry, blurry, html) {
  //make an array of objects with all information
  //valid projects: lets Eat and WTD for now, ligithing will be an update.
  const projectInfo = [
    {
      id: "Project-SS",
      img: "/static/images/main/Simon_pic.png",
      title: "Simon Says - First personal Project",
      para1: "Front-end: HTML | JavaScript | CSS",
      para2: ""
    },
    {
      id: "Project-WTD",
      img: "/static/images/main/WTD-sitephoto.png",
      title: "What's The Def - Webster word lookup",
      para1: "Front-end: PUG | JavaScript | CSS",
      para2: "Back-end: Node.js | Express | Axios"
    },
    {
      id: "Project-LEH",
      img: "/static/images/main/letEatPic.jpg",
      title: "Lets Eat! - Food Recipe",
      para1: "Front-end: HTML | JavaScript | CSS",
      para2: " " //"Node.js | MySQL | Express"
    } /*,
    
    {
    id: "project-MH",
    title: Azalea Physical Therapy
    para1:
    para2:
    },
    {
    
    }
    */
  ];
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  div2.classList.add("blurryContainer");
  div2.setAttribute("id", "projectContainer");
  projectInfo.forEach(project => {
    const btn = document.createElement("button"),
      img = document.createElement("img"),
      span = document.createElement("span"),
      p1 = document.createElement("p"),
      p2 = document.createElement("p"),
      p3 = document.createElement("p");

    btn.classList.add("projBtn");
    btn.setAttribute("id", project.id);
    img.setAttribute("src", project.img);
    img.setAttribute("alt", "project example photo");
    p1.innerHTML = project.title;
    p2.innerHTML = project.para1;
    p3.innerHTML = project.para2;
    span.append(p1);
    span.append(p2);
    span.append(p3);
    btn.append(img);
    btn.append(span);
    div2.appendChild(btn);
  });
  //end of new code

  div1.appendChild(closeBlurry);
  div1.appendChild(div2);
  blurry.appendChild(div1);
  html.append(blurry);
}
//for contactbtn popup
function contactbtn(e, closeBlurry, blurry, html) {
  const copycontain = document.createElement("div");
  copycontain.classList.add("copycontain");
  const para = document.createElement("p");
  para.innerHTML = "DSIMEONE303@GMAIL.COM";
  para.classList.add("email");
  const copyEbtn = document.createElement("button");
  copyEbtn.onclick = "tabs(this)";
  copyEbtn.classList.add("blue-bdr-btn");
  copyEbtn.setAttribute("id", "copyE");
  copyEbtn.innerHTML = "Copy Email";

  //send it
  copycontain.appendChild(closeBlurry);
  copycontain.appendChild(para);
  copycontain.appendChild(copyEbtn);
  blurry.appendChild(copycontain);
  trapFocus(blurry);
  html.append(blurry);
}

function pastWork(e, html, closeBlurry, blurry) {
  /* new code begins now:*/
  blurry.append(closeBlurry);
  pastWorkInfo = [
    {
      title: "Electrical Engineer",
      id: "EE",
      years: "[2018-Present]",
      links: [
        {
          name: "revit",
          href: "https://www.autodesk.com/products/revit/mep",
          image: "/static/images/main/revit.png"
        },
        {
          name: "AGI32",
          href:
            "https://lightinganalysts.com/software-products/agi32/overview/",
          image: "/static/images/main/agi32.jpeg"
        },
        {
          name: "AutoCAD",
          href:
            "https://www.autodesk.com/products/autocad/overview?term=1-YEAR&tab=subscription",
          image: "/static/images/main/autoCad.png"
        },
        {
          name: "Visual Lighting",
          href:
            "https://www.acuitybrands.com/resources/technical-resources/visual-lighting-software",
          image: "/static/images/main/visualLighting.png"
        }
      ],
      para1:
        "Designed electrical and lighting systems in buildings with a primary focus in commercial, K-12, and institutional buildings. Design would consists of:",
      listItems: [
        "Colaborating with owners, architects and suppliers for specific needs.",
        "calculating lighting designs using lighting applications to comply to local ordinance.",
        "Design and calculating a sufficent electrical distrubution system(from Boiler rooms/cooling towers to the location of the receptacle for a breakroom coffee maker).",
        "Site Visits.",
        "Requiring and reviewing contractor provided equipment to ensure proper specifications are used."
      ]
    },
    {
      title: "PLC Programmer/ Project Manager",
      id: "PLC",
      years: "[2014-2018]",
      links: [
        {
          name: "AutoCAD",
          href:
            "https://www.autodesk.com/products/autocad/overview?term=1-YEAR&tab=subscription",
          image: "/static/images/main/autoCad.png"
        },
        {
          name: "C+",
          href: "https://en.wikipedia.org/wiki/C%2B%2B",
          image: "/static/images/main/cplus.png"
        },
        {
          name: "building management system",
          href:
            "https://www.siemens.com/global/en/products/buildings/automation.html",
          image: "/static/images/main/Siemens-logo.png"
        }
      ],
      para1:
        "HVAC Controls Project Manager is responsible for overseeing the planning, execution, and delivery of building automation projects using Siemens automation         software related to Heating, Ventilation, and Air Conditioning (HVAC) systems. With primary focus to ensure that projects are completed on time, within budget, and     to the satisfaction of the client. The primary duties for this career are:",
      listItems: [
        "Creating, diagnosing, and implementing programmable logic (similar to C+) algorithms for real world applications.",
        "Creating, diagnosing, implementing, and training the client Building Automation Systems (BAS) using graphical interfaces.",
        "Designing control panel layout diagrams and associated sensory information via AutoCAD.",
        "Building, installing, and implementing control panel and associated system sensors on-site.",
        "Planned, oversaw and directed large commercial projects to ensure the smooth flow of operations and compliance.",
        "Demonstrated skills in outlining timescales, costs, and resources needed to design and deliver the finished product for client use.",
        "Managed skilled individuals that assisted in delivering a quality product on time."
      ]
    }
  ];
  pastWorkInfo.forEach(career => {
    const mainContainer = document.createElement("div"),
      title = document.createElement("h3"),
      dates = document.createElement("span"),
      appsText = document.createElement("spans"),
      container = document.createElement("div"),
      section = document.createElement("section"),
      p = document.createElement("p"),
      span = document.createElement("span"),
      hr = document.createElement("hr"),
      responsiblities = document.createElement("ul");

    mainContainer.classList.add("pastWork");
    mainContainer.setAttribute("id", career.id);
    section.classList.add("apps");
    title.innerHTML = career.title;
    dates.innerHTML = career.years;
    appsText.innerHTML = "Frequently used programs (clickable):";
    //need to make a loop function for both links and listsItems
    section.append(appsText);
    career.links.forEach(link => {
      const anchor = document.createElement("a"),
        img = document.createElement("img");
      img.src = link.image;
      anchor.href = link.href;
      img.alt = link.name;
      anchor.append(img);
      section.append(anchor);
    });
    p.innerHTML = career.para1;
    career.listItems.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = item;
      responsiblities.append(li);
    });
    hr.classList.add("breaker");

    mainContainer.append(title);
    mainContainer.append(dates);
    mainContainer.append(container);
    container.append(section);
    container.append(p);
    container.append(responsiblities);
    mainContainer.append(hr);
    blurry.append(mainContainer);
  });

  html.append(blurry);
}

//copy emails
function copyEmail(e) {
  const parentC = e.parentElement;
  const email = parentC.children[1];
  navigator.clipboard.writeText(email.innerHTML);
  email.classList.add("copiedEmail");
  /*var styleElem = document
    .getElementById("blurry")
    .appendChild(document.createElement("style"));
  styleElem.innerHTML = ".copyE::after {display:block;}";*/
}
//closing popups
function closeBlurry() {
  const blurry = document.getElementById("blurry");
  blurry.classList.remove("blurry_ani_in");
  blurry.classList.add("blurry_ani_out");
  setTimeout(() => {
    blurry.remove();
  }, 300);
}
//entry

function redirect(e) {
  //proj links go through backend
  const proj_link = ["/whatsthedef", /*"#",*/ "#", "/simon"];
  const proj_id = [
    "Project-WTD",
    /*"Project-LEH", */ "Project-MH",
    "Project-SS"
  ];
  const btn = e;

  for (let i = 0; i < proj_id.length; i++) {
    if (btn.id === proj_id[i]) {
      const anchor = document.createElement("a");
      anchor.href = proj_link[i];
      anchor.target = "_blank";
      //append to dom
      if (proj_link[i] == "#") {
        anchor.setAttribute("onclick", "notReady()");
      }

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
  }
}

const notReady = () => {
  alert(
    "This Portfolio project has been temporarily removed to implement New logic. please check again later"
  );
};

function listener(container) {
  //get all buttons in container
  const containbtns = container.querySelectorAll("button");
  console.log(containbtns + "is it");
  containbtns.forEach(btn =>
    btn.addEventListener("click", () => {
      tabs(btn);
    })
  );
}
