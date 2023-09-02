import csv
from main.models import Entry
from django.utils import timezone
'''
load_entries.py
Python script that receives a .csv file and loads the data into the appropriate django model.

Args:
    DATA_PATH (str): Required path for .csv file to be loaded into database

Return:
    Populates Django DB 'Entry' model
'''

DATA_PATH = "scripts/seeding/data/entries.csv"

def run():
    with open(DATA_PATH) as f:
        reader = csv.reader(f)
        for row in reader:
            _, created = Entry.objects.get_or_create(
                name=row[0],
                description=row[1],            
            )
            _.save()
    print("'Entry' loaded successfully.")