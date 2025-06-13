// special edition things

// pop over modal
const modal = document.querySelector("#modal");
const btn = document.querySelector("#modal-btn");
const inp = document.querySelector("#passSpell");
const err = document.querySelector(".password-error");

const hashX = 'f3157d91f3d1f790b1771e3ee2fe95d513d8d1e65caa8cae54dec729231249e4';
const ciphertext = 'U2FsdGVkX18YKJkCVS8I+i2vMr9KwktIEfJ3vZXtuQdh1XzyeIdnk00sYQhLsHPMs5De9HGz7v9S0/aLvP01SYtCmtW1xPx4Cncpiqnm9uaLwrUgUzvYlGaVdq7Z2VEcJaIaRjycu7ZAxhPtg345UQ=='

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
