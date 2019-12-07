import os 
import smtplib
import imghdr
from email.message import EmailMessage

EMAIL_ADDRESS = os.environ.get('EMAIL_ADDRESS')
EMAIL_PASSWORD = os.environ.get('EMAIL_PASSWORD')

#contacts  = ['isatrevor052@gmail.com' , 'trevor.nyagaka@strathmore.edu']
msg = EmailMessage()
msg['Subject'] = 'Message'
msg['From'] = EMAIL_ADDRESS
msg['To'] = EMAIL_ADDRESS #contacts
msg.set_content('An file has been attached...')


with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:


	smtp.login(EMAIL_ADDRESS,EMAIL_PASSWORD)
	smtp.send_message(msg)



#then run this code on debug server,type this in the terminal : py -m smtpd -c DebuggingServer -n localhost:1025

