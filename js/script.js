
if(window.SimpleSlide){

   new SimpleSlide({
      slide: 'quote', // nome do atributo data-slide="principal"
      //nav: true, // se deve ou não mostrar a navegação
      auto: true, // se o slide deve passar automaticamente
      time: 5000, // tempo de transição dos slides
      pauseOnHover: true, // pausa a transição automática
   });

   new SimpleSlide({
      slide: 'portifolio', // nome do atributo data-slide="principal"
      nav: true, // se deve ou não mostrar a navegação
      auto: true, // se o slide deve passar automaticamente
      time: 5000, // tempo de transição dos slides
      pauseOnHover: true, // pausa a transição automática
   });

}

if(window.SimpleAnime){
   new SimpleAnime();
}

if(window.SimpleForm){
new SimpleForm({
   form: ".formphp", // seletor do formulário
   button: "#send", // seletor do botão
   erro: "<div id='form-erro'><h2>Sent error!</h2><p>Sorry, an error has occurred, send an email to wtaiatella@gmail.com.</p></div>", // mensagem de erro
   sucesso: "<div id='form-success'><h2>Form sent successfully!!</h2><p>Soon I will get in contact with you.</p> <p>Thanks!</p></div>", // mensagem de sucesso
 });

}