//adding image files to the

const tagArea = document.getElementById("infotags");
const svgObject = [
  {
    alt: "HTML",
    src: "static/images/svgs/HTML5.png"
  },
  {
    alt: "CSS",
    src: "static/images/svgs/CSS3.png"
  },
  {
    alt: "JS",
    src: "static/images/svgs/JS.png"
  },
  {
    alt: "node.js",
    src: "static/images/svgs/nodejs.png"
  },
  {
    alt: "express API",
    src: "static/images/svgs/Expressjs.png"
  },
  {
    alt: "pug API",
    src: "static/images/svgs/pugjs-icon.svg"
  }
];
svgObject.forEach(icon => {
  const img = document.createElement("img");
  img.setAttribute("src", icon.src);
  img.setAttribute("alt", icon.alt);
  //tagArea.append(img);
});
