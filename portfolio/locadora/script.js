let bd = [];
let id = 0;
let getAmount = 0;

function validate() {
  let reference = document.forms["register"]["reference"].value;
  let description = document.forms["register"]["description"].value;
  let quantity = document.forms["register"]["quantity"].value;
  let unitaryValue = document.forms["register"]["unitaryValue"].value;

  if (reference == "") {
    alert("Informe a referência do produto.");
    return false;
  }
  if (description == "") {
    alert("Informe a descrição do produto.");
    return false;
  }
  if (quantity == "") {
    alert("Informe a quantidade do produto.");
    return false;
  }
  if (quantity < 0.001) {
    alert("Valor informado é inválido.");
    return false;
  }
  if (unitaryValue == "") {
    alert("Informe o valor unitário do produto.");
    return false;
  }
  insert(reference, description, quantity, unitaryValue);
}

function insert(reference, description, quantity, unitaryValue) {
  let product = new Product(reference, description, quantity, unitaryValue);
  bd.push(product);
  getAmount += quantity * unitaryValue;
  updateRegister(product);
  updateAmount();
}

function getId() {
  id++;
  return id;
}

function updateAmount() {
  document.getElementById("amount").innerHTML = formatValue(getAmount);
}

function formatValue(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function updateRegister(product) {
  let register = "";
  bd.forEach((p) => {
    register += `<tr>
    <th scope="row">${p.id}</th>
    <td scope="col">${p.reference}</td>
    <td scope="col">${p.description}</td>
    <td scope="col">${p.quantity}</td>
    <td scope="col">${formatValue(parseFloat(p.unitaryValue))}</td>
    <td scope="col">${formatValue(p.amount)}</td>
    </tr>`;
  });
  document.getElementById("registers").innerHTML = register;
  clearForm();
}

function clearForm() {
  document.forms["register"]["unitaryValue"].value = "";
  document.forms["register"]["description"].value = "";
  document.forms["register"]["quantity"].value = "";
  document.forms["register"]["reference"].value = "";
}

class Product {
  constructor(reference, description, quantity, unitaryValue) {
    this.id = getId();
    this.reference = reference;
    this.description = description;
    this.quantity = quantity;
    this.unitaryValue = unitaryValue;
    this.amount = quantity * unitaryValue;
  }
}
