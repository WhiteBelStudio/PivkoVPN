# PivkoVPN

PivkoVPN — веб-сервис управления VPN с Telegram-ботом для покупки и управления подпиской.

## Components

- Web: Next.js App Router
- Bot: Python + aiogram
- API: Next.js Route Handlers
- Database: PostgreSQL (planned)
- VPN: WireGuard / Happ-compatible client configuration (planned)

## Development

Web:
```bash
npm install
npm run dev
```

Bot:
```bash
pip install -r bot/requirements.txt
python bot/main.py
```

See `.env.example` for configuration.
