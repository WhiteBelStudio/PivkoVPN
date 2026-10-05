# PivkoVPN — Architecture

## 1. Product scope

PivkoVPN is a web-first VPN service with subscription management through a Telegram bot and VPN connection through compatible clients, including Happ.

## 2. High-level architecture

```text
User
 ├── Web Browser
 │    └── Next.js Web App
 │         └── Backend API
 │              ├── PostgreSQL
 │              ├── Payments
 │              └── VPN Service API
 │                   └── WireGuard VPN Servers
 │
 └── Telegram
      └── PivkoVPN Bot
           ├── Account / linking
           ├── Plans
           ├── Payments
           ├── Subscription management
           └── VPN access

VPN connection:
User → Happ → WireGuard → PivkoVPN VPN Server
```

## 3. Components

### Web App
- Next.js App Router
- Public landing page
- Authentication
- Personal dashboard
- Profile
- Subscription management
- Device management
- VPN configuration delivery
- Support pages

### Backend API
The API is the central application layer between the web interface, Telegram bot, database, payment system and VPN infrastructure.

Planned domains:
- Users
- Authentication
- Profiles
- Subscriptions
- Plans
- Payments
- Devices
- VPN configurations
- VPN servers
- Telegram integration
- Administration

### PostgreSQL
PostgreSQL is the primary persistent database.

Planned core entities:
- users
- sessions
- telegram_accounts
- plans
- subscriptions
- payments
- devices
- vpn_configs
- vpn_servers
- audit_logs

### Telegram Bot
The Telegram bot is the primary purchase and subscription-management interface.

Main responsibilities:
- registration/linking
- displaying plans
- purchasing subscriptions
- renewing subscriptions
- subscription status
- device/VPN access
- notifications
- support

The bot runs independently from the Next.js web process and is deployable on Pterodactyl using `start.py`.

### VPN Infrastructure
WireGuard is the planned VPN protocol/backend.

The VPN service will manage:
- server configuration
- peer creation/removal
- key material
- client configuration generation
- device limits
- revocation
- server health

Actual production VPN server provisioning is a separate deployment step and is not considered complete by this architecture document alone.

### Happ
Happ is treated as a supported client for the generated VPN configuration. The exact configuration/import format will be verified before implementation of the production connection flow.

## 4. Core flows

### Registration
`User → Web/Telegram → Account → PostgreSQL`

### Purchase
`User → Telegram Bot/Web → Payment Provider → Webhook/API → Subscription → PostgreSQL → Notification`

### VPN access
`Active Subscription → Device → VPN Config → Happ → WireGuard Server`

### Revocation
`Subscription/Device revoked → API → WireGuard peer disabled/removed → Config access revoked`

## 5. Deployment architecture

```text
GitHub
 ├── Web source
 └── Bot source

Vercel
 └── Next.js Web + API

Pterodactyl
 └── Telegram Bot

PostgreSQL
 └── Production database

VPN Server(s)
 └── WireGuard
```

## 6. Security boundaries

- Secrets are stored in environment variables, never committed to Git.
- Database access is server-side only.
- VPN management endpoints require authorization.
- Payment webhooks require signature/validity verification where supported.
- Telegram bot credentials are server-side secrets.
- VPN private keys must never be exposed to the client unnecessarily.
- Audit logging will be used for sensitive administrative actions.

## 7. Source of truth

This document defines the baseline architecture for PivkoVPN. Future implementation should follow this structure unless an explicit architectural decision changes it.

Architecture status: **defined**.

Implementation status of individual components is tracked separately in the project checklist.
