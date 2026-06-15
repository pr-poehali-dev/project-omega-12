import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

SMTP_HOST = "smtp.reg.ru"
SMTP_PORT = 465
FROM_EMAIL = "info@xn--e1afmkfd.store"
TO_EMAIL = "info@xn--e1afmkfd.store"


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта АРТСТРОЙ на почту info@артстрой.store"""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    message = body.get("message", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "Укажите имя и телефон"}),
        }

    smtp_password = os.environ.get("SMTP_PASSWORD", "")

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #F59E0B; border-bottom: 2px solid #F59E0B; padding-bottom: 10px;">
        Новая заявка с сайта АРТСТРОЙ
      </h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #666; width: 120px;">Имя:</td>
          <td style="padding: 10px; font-size: 16px;">{name}</td>
        </tr>
        <tr style="background:#f9f9f9;">
          <td style="padding: 10px; font-weight: bold; color: #666;">Телефон:</td>
          <td style="padding: 10px; font-size: 16px;"><a href="tel:{phone}">{phone}</a></td>
        </tr>
        {"<tr><td style='padding: 10px; font-weight: bold; color: #666;'>Сообщение:</td><td style='padding: 10px; font-size: 16px;'>" + message + "</td></tr>" if message else ""}
      </table>
      <p style="color: #999; font-size: 12px; margin-top: 20px;">
        Заявка получена с сайта артстрой.store
      </p>
    </div>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Заявка от {name} — АРТСТРОЙ"
    msg["From"] = FROM_EMAIL
    msg["To"] = TO_EMAIL
    msg.attach(MIMEText(html, "html", "utf-8"))

    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT) as server:
        server.login(FROM_EMAIL, smtp_password)
        server.sendmail(FROM_EMAIL, TO_EMAIL, msg.as_string())

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"ok": True}),
    }
