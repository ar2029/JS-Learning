// Question 5
//     You are managing a sales department for your company, you want to reward your employees based on the sales made by them during the year. The criteria is as follows:
//     1. Sales from 0-5000 : 2%
//     2. Sales from 5001 - 10000 : 5%
//     3. Sales from 10001 - 20000 : 7%
//     4. Above 20000 : 10% Then log the total commission earned by him.

document.getElementById("btn").onclick = function () {
  let sales = document.getElementById("salesid").value;
  let comm;
  switch (true) {
    case sales >= 0 && sales < 5001:
      comm = sales * 0.02;
      break;
    case sales >= 5001 && sales < 10001:
      comm = 5000 * 0.02 + (sales - 5000) * 0.05;
      break;
    case sales >= 10001 && sales < 20001:
      comm = 5000 * 0.02 + 5000 * 0.05 + (sales - 10000) * 0.07;
      break;
    case sales >= 20001:
      comm = 5000 * 0.02 + 5000 * 0.05 + 10000 * 0.07 + (sales - 20000) * 0.1;
      break;
  }
  document.getElementById("netcomm").innerHTML =
    "Net Commision in Rs.:&nbsp &nbsp" + comm;
}
