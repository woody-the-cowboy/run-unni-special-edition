// special edition things

// pop over modal
const modal = document.querySelector("#modal");
const btn = document.querySelector("#modal-btn");
const inp = document.querySelector("#passSpell");
const err = document.querySelector(".password-error");

const hashX = '453cb53c84a6ce285d73a9aaa2414b8bf6ba2f200b912256024045f0cdbec58b';
const ciphertext = 'U2FsdGVkX18eCwFFLHS/r//BA+TLZexmvK0l48Q16wgthdjDdVKSBVzROBfkXrDsMsuRqUBUYr28t7Tg3WQ9XA8wmfjMZC1Ccq2cypw011Y='

// function encrypt(text, password) {
//   return CryptoJS.AES.encrypt(text, password).toString();
// }

function decrypt(password) {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, password);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return null;
  }
}


btn.addEventListener("click", async () => {
  const dat = inp.value;
  const hash = sha256(dat);
  if (hashX !== hash) {
    err.classList.remove("d-none");
    return
  }
  document.querySelector(".heading-main").innerHTML = decrypt(dat);
  modal.hidePopover();
})

inp.addEventListener("input", () => {
  err.classList.add("d-none");
})

window.addEventListener("load", () => {
  modal.showPopover();
})

export const version = "special_edition"
