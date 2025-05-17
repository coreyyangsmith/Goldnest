import csv
import os
from main.models import Entity, User
from django.utils import timezone
'''
load_entities.py
Python script that receives a .csv file and loads the data into the appropriate django model.

Args:
    DATA_PATH (str): Required path for .csv file to be loaded into database

Return:
    Populates Django DB 'Entity' model
'''

DATA_PATH = "scripts/seeding/data/entities.csv"

def run():
    if not os.path.exists(DATA_PATH):
        print(f"Error: Data file not found at {DATA_PATH}")
        return
        
    count = 0
    try:
        with open(DATA_PATH) as f:
            reader = csv.reader(f)
            for row in reader:
                _, created = Entity.objects.get_or_create(
                    user=User.objects.get(username=row[0]),
                    name=row[1],
                    created_at=timezone.now(),
                    updated_at=timezone.now(),
                )
                _.save()  
                count += 1 
        print(f"'Entity' loaded successfully. ({count})")
    except Exception as e:
        print(f"Error loading Entity data: {str(e)}")