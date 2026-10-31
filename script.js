var count = 0;
var lines = ["ouchh 😭", "ajunn marrr😩", "Dard ho raha hai 🥲", "Sorry sorry sorry 🙏", "ataa maaf kara n 👉👈 🥹"];

function go(id) {
  document.querySelectorAll('.screen').forEach(function (s) {
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function hit() {
  count++;
  var h = document.getElementById('hammer');
  var p = document.getElementById('pic');
  h.classList.add('swing');
  setTimeout(function () {
    h.classList.remove('swing');
    p.classList.remove('hit');
    void p.offsetWidth;
    p.classList.add('hit');
  }, 120);
  document.getElementById('msg').textContent = lines[(count - 1) % lines.length];
  if (count >= 3) {
    document.getElementById('done').style.display = 'inline-block';
  }
}
