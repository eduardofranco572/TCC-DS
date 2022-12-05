$("#btn-entrar").click(() => {
  const email = $("#email").val();
  const senha = $("#senha").val();
  realizaLogin(email, senha);
});

$('#olhos').click(function () {
  if ($(this).hasClass('olho-aberto')) {
    $(this).removeClass('olho-aberto');
    $(this).attr("src", "/img/icons/olhos-abertos.svg");
    $(this).addClass('olho-fechado');
    $('#senha').attr('type', 'text');
  }
  else {
    $(this).removeClass('olho-fechado');
    $(this).attr("src", "/img/icons/olhos-fechados.svg");
    $(this).addClass('olho-aberto');
    $('#senha').attr('type', 'password');
  }
});

async function realizaLogin(email, senha,) {
  const dados = {
    email: email,
    senha: senha
  };

  try {
    const requisicao = await axios.post('/login', dados);

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: setTimeout(() => {
        window.location.href = 'http://localhost:3333/home'
      }, 1600)
    });

    Toast.fire({
      icon: 'success',
      title: requisicao.data.mensagem
    });

  }
  catch (erro) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: 'error',
      title: '',
      text: erro.response.data.mensagem,
    })
  }
}