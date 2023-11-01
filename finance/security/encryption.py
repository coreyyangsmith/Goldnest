from cryptography.fernet import Fernet

from django.conf import settings

def encrypt_field(value):
   cipher_suite = Fernet(settings.ENCRYPTION_KEY)
   cipher_text = cipher_suite.encrypt(value.encode())
   return cipher_text.decode()

def decrypt_field(value):
  cipher_suite = Fernet(settings.ENCRYPTION_KEY)
  plain_text = cipher_suite.decrypt(value.encode())
  return plain_text.decode()