export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <div className="badge">PivkoVPN</div>
        <h1>VPN без лишней сложности.</h1>
        <p>
          Управляй подпиской через Telegram, получай конфигурацию и подключайся
          через совместимый VPN-клиент, включая Happ.
        </p>
        <div className="actions">
          <a href="/dashboard" className="button primary">Открыть кабинет</a>
          <a href="https://t.me/" className="button secondary">Telegram</a>
        </div>
      </section>

      <section className="grid">
        <article><strong>01</strong><h2>Telegram</h2><p>Покупка и продление подписки в боте.</p></article>
        <article><strong>02</strong><h2>Web</h2><p>Личный кабинет для управления доступом.</p></article>
        <article><strong>03</strong><h2>Happ</h2><p>Получение конфигурации для подключения.</p></article>
      </section>
    </main>
  );
}
