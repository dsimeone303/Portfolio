//summary: using AJAX to pull in badges and points from teamtreeehouse to show course progression. this will be implemented as a button click from the side bar.

let treehouse_info;

function Treehouse(e, closeBlurry, blurry, html) {
  console.log("treehouse works");
  const div1 = document.createElement("div");
  const hr = document.createElement("hr");
  const h2_1 = document.createElement("h2");
  const h3_1 = document.createElement("h3");
  const h3_2 = document.createElement("h3");
  //AJAX request
  loadtreehouse(div1, hr, h3_2);
  div1.id = "TH_port";
  h2_1.textContent = "Team TreeHouse Progress:";
  h3_1.innerHTML = "Points Accreddited:";
  h3_2.innerHTML = "Badges Accreddited:";

  div1.append(h2_1);
  div1.appendChild(h3_1);
  blurry.appendChild(div1);
  blurry.appendChild(closeBlurry);
  html.appendChild(blurry);
}

function loadtreehouse(div1, hr, h3_2) {
  setuptreehouse = true;
  //AJAX begins:
  var tHRequest = new XMLHttpRequest(); // Ajax request
  //callback:

  tHRequest.open(
    "GET",
    "https://teamtreehouse.com/profiles/daltonsimeone.json"
  );

  tHRequest.onreadystatechange = () => {
    if (tHRequest.readyState === 4) {
      const site = JSON.parse(tHRequest.responseText);
      //from here, badges & points are two seperate arrays that we want.
      //points:
      //need to remove the items not trained for i.e. if value === 0.
      //step 1 = break to two seperate arrays to read values as a number.
      var ulP = document.createElement("ul");
      var keys = Object.keys(site.points);
      var values = Object.values(site.points);
      for (let i = 0; i < values.length; i++) {
        var div = document.createElement("div");
        var li = document.createElement("li");
        let key = keys[i];
        let value = values[i];
        div.setAttribute("class", "pointsDisplay");
        // if value !== 0 then put value and keys into a new varable;
        if (value !== 0) {
          var span = document.createElement("span");
          span.textContent = `${key}: ${value}`;
          li.appendChild(span);
          div.appendChild(li);
          ulP.appendChild(div);
        }
        div1.appendChild(ulP);
      }
      div1.appendChild(hr);
      //badges
      //want to pull following data: name, icon_url, earned_date
      var ulb = document.createElement("ul");
      div1.appendChild(h3_2);
      for (let i = 0; i < site.badges.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "badgeDisplay");
        var li = document.createElement("li");
        var bname = document.createElement("p");
        var badge = site.badges[i]; // single badge data
        var acheivedDate = badge.earned_date; // will need to remove timestamp (keepfirst 10 characters);
        acheivedDate = acheivedDate.slice(0, 10);
        var earnDate = badge.earnDate;
        var badgename = badge.name;
        var picture = document.createElement("img");
        picture.setAttribute("src", badge.icon_url);
        bname.textContent = badgename;
        div.appendChild(picture);
        div.appendChild(bname);
        li.appendChild(div);
        ulb.append(li);
      }
      div1.append(ulb);
    }
  };

  tHRequest.send();
}
