function moveRandomEl(elm) {
  const x = Math.random() * 90 + 5;
  const y = Math.random() * 90 + 5;
  elm.style.transform = `translate(${x}vw, ${y}vh)`;
}

document.querySelector("#move-random").addEventListener("mouseover", (e) => {
  moveRandomEl(e.target);
});
