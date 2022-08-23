const handleLogin = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const correctEmail = 'tryber@teste.com'
  const correctPassword = '123456'

  if (email === correctEmail && password === correctPassword) {
    return window.alert('Olá, Tryber!')
  }
  return window.alert('Email ou senha inválidos.')
}

const isAgree = () => {
  const button = document.getElementById('submit-btn');
  const checkbox = document.getElementById('agreement').checked;
  
  if (checkbox) return button.disabled = false;
  return button.disabled = true;
}

const handleSend = () => {
  const form = document.getElementById('evaluation-form');
  const divInfos = document.getElementById('infos');
  const divInfo = document.getElementById('div-infos');
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  let family
  document.getElementsByName('family').forEach((element) => element.checked ? family = element.value : family = family);
  let contents = ''
  const content = Object.values(document.querySelectorAll('.content:checked'));
  for (let i = 0; i < content.length; i++) {
    contents += `- ${content[i].value} `
  }
  let rate
  document.getElementsByName('rate').forEach((element) => element.checked ? rate = element.value : rate = rate);
  const textarea = document.getElementById('textarea').value;
  form.parentNode.removeChild(form);
  divInfo.hidden = false;
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.innerHTML = `Nome: ${name} ${lastName}
  <br>
  <br>Email: ${email}
  <br>
  <br>House: ${house}
  <br>
  <br>Family: ${family}
  <br>
  <br>Content: ${contents}
  <br>
  <br>Rate: ${rate}
  <br>
  <br>Commentary: ${textarea}
  <br>
  <br>Seja bem vindo!`;
  div.appendChild(p);
  divInfos.appendChild(p);
}