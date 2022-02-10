export function section(data) {
  return /*html*/ `<section id="${data.id}" tabindex="0">${data.content}</section>`;
}