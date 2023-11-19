import React from "react";
import "./style.css";

export default function LandingPage() {
  return (
    <div>
      <header className="topo modo-claro limitar-secao">
        <img className="logo" src="./assets/barbearia-logo.png" alt="Logomarca da Barbearia" title="Barber shop logo" />
        <button className="button-topo">
          <span>
            <img src="./assets/moon.png" alt="Botão para alterar os modos da página entre dark e light" title="Botão dark e light" />
          </span>
          Dark
        </button>
      </header>
      <main>
        <section className="section-banner"></section>
        <section className="section-texto limitar-secao">
          <h1>Bem-vindo a Barber Shop</h1>
          <p className="paragrafos paragrafo-destaque">Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos prontos para lidar com suas maiores expectativas.</p>
          <p className="paragrafos">Nossos serviços são dedicados ao seu sucesso pessoal.
            Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo.
            Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
          </p>
          <p className="paragrafo-assinatura">S. Kelly</p>
        </section>
      </main>
    </div>
  )
}