import csv
import os
from main.models import Account, User, AccountEntry
from django.utils import timezone
'''
load_accountentries.py
Python script that receives a .csv file and loads the data into the appropriate django model.

Args:
    DATA_PATH (str): Required path for .csv file to be loaded into database

Return:
    Populates Django DB 'AccountEntry' model
'''

DATA_PATH = "scripts/seeding/data/accountEntries.csv"

def run():
    if not os.path.exists(DATA_PATH):
        print(f"Error: Data file not found at {DATA_PATH}")
        return
        
    count = 0
    try:
        with open(DATA_PATH) as f:
            reader = csv.reader(f)
            for row in reader:
                _, created = AccountEntry.objects.get_or_create(
                    account=Account.objects.get(name=row[0], user=(User.objects.get(username=row[1]))), 
                    balance=row[3],
                    user=User.objects.get(username=row[1]), 
                    date=row[2],
                    created_at=timezone.now(),
                    updated_at=timezone.now(),
                )
                _.save()   
                count += 1
        print(f"'AccountEntry' loaded successfully. ({count})")
    except Exception as e:
        print(f"Error loading AccountEntry data: {str(e)}")