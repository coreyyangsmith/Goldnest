import csv
from main.models import Account, User
from django.utils import timezone
'''
load_accounts.py
Python script that receives a .csv file and loads the data into the appropriate django model.

Args:
    DATA_PATH (str): Required path for .csv file to be loaded into database

Return:
    Populates Django DB 'Account' model
'''

DATA_PATH = "scripts/seeding/data/accounts.csv"

def run():
    count = 0
    with open(DATA_PATH) as f:
        reader = csv.reader(f)
        for row in reader:
            _, created = Account.objects.get_or_create(
                user=User.objects.get(username=row[2]), 
                name=row[0],
                account_type=row[1],
                created_at=timezone.now(),
                updated_at=timezone.now(),
            )
            _.save()   
            count += 1
    print(f"'Account' loaded successfully. ({count})")