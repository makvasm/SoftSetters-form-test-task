function SendMail(event) {
  event.preventDefault();
  let form = event.target;
  let data = new FormData(form);

  if (!data.get('mailer') || !data.get('receiver') || !data.get('text')) return;

  fetch('/api/mail', {
    method: 'POST',
    body: data
  })
    .then(res => {
      if (!res || !res.ok) throw Error('Ошибка при оправке сообщения');
      form.reset();
      ShowAlert(true, 'Сообщение отправлено');
    })
    .catch(e => ShowAlert(false, e));
}

// 
function ShowAlert(status, message) {
  let div = document.createElement('div');
  div.innerHTML = 
    `<div class="alert alert-${status ? 'success' : 'danger'} alert-dismissible fade show m-1" role="alert">
      ${message}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`;
  document.body.before(div);
}