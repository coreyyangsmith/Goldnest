import csv
from main.models import MainCategory, User
from django.utils import timezone
'''
load_maincategories.py
Python script that receives a .csv file and loads the data into the appropriate django model.

Args:
    DATA_PATH (str): Required path for .csv file to be loaded into database

Return:
    Populates Django DB 'MainCategory' model
'''

DATA_PATH = "scripts/seeding/data/maincategories.csv"

def run():
    count = 0
    with open(DATA_PATH) as f:
        reader = csv.reader(f)
        for row in reader:
            _, created = MainCategory.objects.get_or_create(
                user=User.objects.get(username=row[0]),
                name=row[1],
                description="test",       
                created_at=timezone.now(),
                updated_at=timezone.now(),                     
            )
            _.save()
            count += 1
    print(f"'MainCategory' loaded successfully. ({count})")