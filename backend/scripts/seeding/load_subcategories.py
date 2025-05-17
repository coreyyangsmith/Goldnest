import csv
from main.models import SubCategory, MainCategory, User
from django.utils import timezone
'''
load_subcategories.py
Python script that receives a .csv file and loads the data into the appropriate django model.

Args:
    DATA_PATH (str): Required path for .csv file to be loaded into database

Return:
    Populates Django DB 'SubSubCategory' model
'''

DATA_PATH = "scripts/seeding/data/subcategories.csv"

def run():
    count = 0
    with open(DATA_PATH) as f:
        reader = csv.reader(f)
        for row in reader:
            _, created = SubCategory.objects.get_or_create(
                user=User.objects.get(username=row[0]),
                name=row[2],
                description="test",     
                main_category=MainCategory.objects.get(name=row[1]),
                created_at=timezone.now(),
                updated_at=timezone.now(),                
            )
            _.save()
            count += 1
    print(f"'SubCategory' loaded successfully. ({count})")