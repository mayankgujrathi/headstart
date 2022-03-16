!(function () {
  //document.querySelector(".target").addEventListener("click", (e) => {
  // console.log(e);
  // let some = new Point(".target");
  // some.render(50);
  // const target = document.querySelector(".target");
  // let inc = setInterval(()=> {
  //     some.render(10);
  // }, 1000 * 2 * 5);
  // setTimeout(() => {
  //     clearInterval(inc);
  // }, 1000 * 2 * 5 * 3);
  //});
})();

function mov(tab, pops = 1) {
  function seturl(url) {
    let l = window.location.pathname.split("/");
    for (let i = 0; i < pops; i++) l.pop();
    l.push(url);
    window.location.assign(
      window.location.origin + "/" + l.filter((x) => x !== "").join("/")
    );
  }
  switch (tab) {
    case "home":
      seturl("/index.html");
      break;
    case "event":
      seturl("/events.html");
      break;
    case "about":
      seturl("/about.html");
      break;
    default:
      seturl(tab);
  }
}
