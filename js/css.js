let nthList = '';
let clrDeg = Math.round(Math.random() * 360);
let sectionsTotal = 6;
for (let i = 1; i <= sectionsTotal; i++) {
  nthList += /*css*/ `
    section:nth-child(${i}) {
      background-color: hsl(${clrDeg}, 30%, 50%);
      color: hsl(${clrDeg + 180}, 30%, 90%);
    }
  `;
  clrDeg += 360 / sectionsTotal;
}

/// CSS
export const CSS = /*css*/ `
section {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  min-height: 100vh;
  padding: 40px;
  box-sizing: border-box;
  counter-increment: num;
  outline: none;
}
section::after {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  left: 20px;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: #000;
  content: counter(num);
}
section::before {
  content: attr(id);
  font-size: 70px;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, .2);
}
${nthList}
`;

