function price(a) {
  const iva = a * 0.21;
  const total = a + iva;
  const text = `Precio sin IVA: ${a}, IVA: ${iva} y Total: ${total}`;
  return text;
}
const ej = price(3);
console.log(ej);
//Si queremos meter el return de la función dentro de un párrafo html hacemos:

const paragraph = document.querySelector(".js-text");
paragraph.innerHTML = price(100);
