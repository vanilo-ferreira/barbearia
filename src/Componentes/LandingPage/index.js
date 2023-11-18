import React from "react";

export default function LandingPage() {
  return (
    <div>
      <header className="topo">
        <img src="./assets/barbearia-logo.png" alt="Logomarca da Barbearia" title="Barber shop logo" />
        <button>
          <img src="./assets/moon.png" alt="Botão para alterar os modos da página entre dark e light" title="Botão dark e light" />
          Dark
        </button>
      </header>
      <main>
        <section className="section-banner">Imagem</section>
        <section className="section-texto">
          <h1>Bem-vindo a Barber Shop</h1>
          <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos prontos para lidar com suas maiores expectativas.</p>
          <p>Nossos serviços são dedicados ao seu sucesso pessoal.
            Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo.
            Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
          </p>
          <p>S. Kelly</p>
        </section>
      </main>
    </div>
  )
}