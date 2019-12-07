import os 
import smtplib
import imghdr
from email.message import EmailMessage

EMAIL_ADDRESS = os.environ.get('EMAIL_ADDRESS')
EMAIL_PASSWORD = os.environ.get('EMAIL_PASSWORD')

#contacts  = ['isatrevor052@gmail.com' , 'trevor.nyagaka@strathmore.edu']
msg = EmailMessage()
msg['Subject'] = 'image'
msg['From'] = EMAIL_ADDRESS
msg['To'] = EMAIL_ADDRESS #contacts
msg.set_content('An image has been attached...')


files = ['cat.png' , 'dog.png']


for file in files:
	with open(file , 'rb') as f:
		file_data = f.read()
		file_type = imghdr.what(f.name)
		file_name = f.name

	
	msg.add_attachment(file_data. maintype= 'image' , subtype = 'file_type',filename=file_name)

with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:

	smtp.login(EMAIL_ADDRESS,EMAIL_PASSWORD)
	smtp.send_message(msg)

