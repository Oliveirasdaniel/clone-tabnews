function home() {
  return (
    <div>
      <h2>Sejam Bem vindos!</h2>
      <header>
        <h1>PopsDev</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/sobre">Sobre</a>
        </nav>
      </header>

      <h3>Qual a ideia do projeto?</h3>
      <main>
        <h2>E como vai ser desenvolvido...</h2>
        <p>
          A ideia e criar um sistema de noticias comunitário para minha
          comunidade, baseado no tabnews onde a própria comunidade faz sua
          manutenção
        </p>
        <img
          src="https://conteudo.imguol.com.br/c/esporte/d5/2024/05/22/leo-jardim-goleiro-do-vasco-comemora-penalti-defendido-contra-o-fortaleza-na-copa-do-brasil-1716349100130_v2_1x1.jpg"
          alt="imagem"
        />
      </main>

      {/* Rodapé */}
      <footer>
        <p>© 2026 PopsDev</p>
      </footer>
    </div>
  );
}

export default home;
