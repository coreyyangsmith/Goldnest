import csv
from main.models import MainCategory
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
    with open(DATA_PATH) as f:
        reader = csv.reader(f)
        for row in reader:
            _, created = MainCategory.objects.get_or_create(
                name=row[0],
                description="test",       
                created_at=timezone.now(),
                updated_at=timezone.now(),                     
            )
            _.save()
    print("'MainCategory' loaded successfully.")