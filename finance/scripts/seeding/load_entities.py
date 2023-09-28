import csv
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
    print("'Entity' loaded successfully.")