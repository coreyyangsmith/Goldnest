import csv
from main.models import SubSubCategory, SubCategory, MainCategory, User
from django.utils import timezone
'''
load_subsubcategories.py
Python script that receives a .csv file and loads the data into the appropriate django model.

Args:
    DATA_PATH (str): Required path for .csv file to be loaded into database

Return:
    Populates Django DB 'SubSubCategory' model
'''

DATA_PATH = "scripts/seeding/data/subsubcategories.csv"

def run():
    with open(DATA_PATH) as f:
        reader = csv.reader(f)
        for row in reader:
            _, created = SubSubCategory.objects.get_or_create(
                user=User.objects.get(username=row[0]),
                name=row[3],
                description="test",    
                sub_category=SubCategory.objects.get(name=row[2], main_category=MainCategory.objects.get(name=row[1])),
                created_at=timezone.now(),
                updated_at=timezone.now(),                        
            )
            _.save()
    print("'SubSubCategory' loaded successfully.")