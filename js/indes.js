function getAmount(id) {
  return parseFloat(document.getElementById(id).value);
}
function clearField(id) {
  document.getElementById(id).value = "";
}
document.getElementById("btn-calculate").addEventListener("click", function () {
  const income = getAmount("income");
  const food = getAmount("food");
  const rent = getAmount("rent");
  const clothes = getAmount("clothes");
  //   clearField("income");
  //   clearField("food");
  //   clearField("rent");
  //   clearField("clothes");
  document.getElementById("total-expenses").innerText =
    ": " + (food + rent + clothes);
  document.getElementById("balance").innerText =
    ": " + (income - (food + rent + clothes));
});

document.getElementById("btn-save").addEventListener("click", function () {
  let percent = document.getElementById("save").value;
  percent = parseFloat(percent);
  console.log("percent " + percent);
  let balance = document.getElementById("balance").innerText;
  balance = balance.substring(2, balance.length);
  console.log(balance);
  balance = parseFloat(balance);
  console.log(balance);
  console.log("percent " + percent);
  let savingAmount = balance * (percent / 100);
  let remainingBalance = balance - savingAmount;
  console.log(savingAmount, remainingBalance);
  document.getElementById("saving-amount").innerText =
    ": " + savingAmount.toFixed(2);
  document.getElementById("remaining-balance").innerText =
    ": " + remainingBalance.toFixed(2);
});
