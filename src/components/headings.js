function renderHeaders(headers, thead, model) {
  thead.innerHTML = '';
  const tr = document.createElement('tr');
  const div = document.createElement('div');
  Object.values(headers).forEach(headerObj => {
    const header = createElement('th', headerObj.label.replace(/_/g, ' '), '', headerObj.label);
    div.appendChild(header);
  });
  Object.values(model.headers).forEach(headerObj => {
    const input = createInput('text', headerObj.label.replace(/_/g, ' '));
    div.appendChild(input);
  });
  tr.appendChild(div);
  thead.appendChild(tr);
}
