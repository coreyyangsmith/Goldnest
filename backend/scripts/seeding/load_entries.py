import csv
import os
from main.models import Entry, MainCategory, SubCategory, Entity, User
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
    if not os.path.exists(DATA_PATH):
        print(f"Error: Data file not found at {DATA_PATH}")
        return
        
    count = 0
    try:
        with open(DATA_PATH) as f:
            reader = csv.reader(f)
            for row in reader:
                _, created = Entry.objects.get_or_create(
                    user=User.objects.get(username=row[0]),
                    name = row[1],
                    income=row[2],
                    expense=row[3],
                    notes=row[4],
                    date=row[5], ## TODO fix warning error for this import - maybe have to fix data?
                    routing=Entity.objects.get(name=row[6]),
                    main_category=MainCategory.objects.get(name=row[7]),
                    sub_category=SubCategory.objects.get(name=row[8]),      
                    created_at=timezone.now(),
                    updated_at=timezone.now(),
                )
                _.save()          
                count += 1
        print(f"'Entry' loaded successfully. ({count})")
    except Exception as e:
        print(f"Error loading Entry data: {str(e)}")