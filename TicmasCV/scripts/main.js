function show() {
  let text = document.getElementById("text2");
  let moreBtn = document.getElementById("more-btn");
  let lessBtn = document.getElementById("less-btn");
  if (text.style.display === "none") {
    text.style.display = "block";
    console.log("one click");
    moreBtn.style.display = "none";
    lessBtn.style.display = "block";
  } else {
    text.style.display = "none";
    lessBtn.style.display = "none";
    moreBtn.style.display = "block";
  }
}
