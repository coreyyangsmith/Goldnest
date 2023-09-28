import csv
from main.models import Entity, Account, User
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
    with open(DATA_PATH) as f:
        reader = csv.reader(f)
        for row in reader:
            if (row[5] == "" or row[6] == ""):
                _, created = Account.objects.get_or_create(
                    user=User.objects.get(username=row[0]), 
                    name=row[1],
                    account_type=row[2],
                    current_balance=row[3],
                    rate=row[4],
                    start_term=None,
                    end_term=None,
                    entity=Entity.objects.get(name=row[7]),
    
                    created_at=timezone.now(),
                    updated_at=timezone.now(),
                )
            else:
                    _, created = Account.objects.get_or_create(
                    user=User.objects.get(username=row[0]),                          
                    name=row[1],
                    account_type=row[2],
                    current_balance=row[3],
                    rate=row[4],
                    start_term=row[5],
                    end_term=row[6],
                    entity=Entity.objects.get(name=row[7]),
    
                    created_at=timezone.now(),
                    updated_at=timezone.now(),
                )
            _.save()   
    print("'Account' loaded successfully.")