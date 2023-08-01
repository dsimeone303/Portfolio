document.addEventListener("mousemove", event => {
  const content = document.getElementById("catagories");
  const scrnWidth = window.innerWidth;
  const scrnHeight = window.innerHeight;
  const clientMX = event.clientX;
  const clientMY = event.clientY;
  //calculation, divide clients location with scrn size, multiply by 2 then minus 1 so the middle would be 0 and either side will be -1 or 1;

  const tiltX = ((clientMX / scrnWidth) * 2 - 1) * 30;
  const tiltY = ((clientMY / scrnHeight) * 2 - 1) * -30;
  //lets use 30deg as max;
  const blocks = Array.prototype.slice.call(content.children);
  blocks.forEach(element => {
    element.style.transform =/*
      "rotateX(" + tiltY + "deg)" + */"rotateY(" + (tiltX) +"deg)";
  });
});
