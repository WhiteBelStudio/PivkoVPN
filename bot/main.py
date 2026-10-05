import asyncio
import os

from aiogram import Bot, Dispatcher, F
from aiogram.filters import CommandStart
from aiogram.types import Message
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
if not TOKEN:
    raise RuntimeError("TELEGRAM_BOT_TOKEN is not configured")

dp = Dispatcher()


@dp.message(CommandStart())
async def start(message: Message) -> None:
    await message.answer(
        "🍺 PivkoVPN\n\n"
        "Добро пожаловать! Здесь можно будет купить и продлить VPN-подписку.\n\n"
        "Веб-кабинет и подключение через Happ появятся после настройки аккаунта."
    )


@dp.message(F.text == "💳 Купить подписку")
async def buy(message: Message) -> None:
    await message.answer(
        "💳 Покупка подписки\n\n"
        "Платёжный провайдер пока не подключён. "
        "Система оплаты будет подключена после выбора провайдера."
    )


async def main() -> None:
    bot = Bot(TOKEN)
    try:
        await dp.start_polling(bot)
    finally:
        await bot.session.close()


if __name__ == "__main__":
    asyncio.run(main())
