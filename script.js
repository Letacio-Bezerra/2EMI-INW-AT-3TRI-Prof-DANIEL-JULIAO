var user = document.getElementById('inputUser')
var senha = document.getElementById('inputSenha')
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}



if (alertTrigger) {
    if (user & senha === null) {
        alertTrigger.addEventListener('click', function () {
        alert('Não logado', 'danger')
    })
    } else {
        alertTrigger.addEventListener('click', function () {
        alert('Logado com sucesso', 'success')})
    }
}