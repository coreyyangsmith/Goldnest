import csv
from main.models import Entry, MainCategory, SubCategory, Entity
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
                income=row[1],
                expense=row[2],
                notes=row[3],
                date=row[4],
                routing=Entity.objects.get(name=row[5]),
                main_category=MainCategory.objects.get(name=row[6]),
                sub_category=SubCategory.objects.get(name=row[7]),      
                created_at=timezone.now(),
                updated_at=timezone.now(),
            )
        _.save()
    print("'Entity' loaded successfully.")              
    print("'Entry' loaded successfully.")