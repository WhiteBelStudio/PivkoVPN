import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
REQ = os.path.join(ROOT, "bot", "requirements.txt")
BOT = os.path.join(ROOT, "bot", "main.py")

def run(command):
    subprocess.check_call(command, cwd=ROOT)

def main():
    run([sys.executable, "-m", "pip", "install", "--disable-pip-version-check", "-r", REQ])
    run([sys.executable, BOT])

if __name__ == "__main__":
    main()
