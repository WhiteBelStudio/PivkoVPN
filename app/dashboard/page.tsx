export default function DashboardPage() {
  return (
    <main className="shell">
      <div className="dashboard">
        <div className="badge">Личный кабинет</div>
        <h1>PivkoVPN</h1>
        <div className="card">
          <span>Подписка</span>
          <strong>Не активна</strong>
          <p>Купи подписку через Telegram-бота, чтобы получить доступ к VPN.</p>
          <a className="button primary" href="https://t.me/">Купить в Telegram</a>
        </div>
        <div className="card">
          <span>Подключение</span>
          <strong>Ожидает подписку</strong>
          <p>После оплаты здесь появится конфигурация для подключения через Happ.</p>
        </div>
      </div>
    </main>
  );
}
