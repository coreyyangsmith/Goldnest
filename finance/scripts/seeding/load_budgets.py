import csv
from main.models import MainCategory, SubCategory, Budget
from django.utils import timezone

'''
load_budgets.py
Python script that receives a .csv file and loads the data into the appropriate django model.

Args:
    DATA_PATH (str): Required path for .csv file to be loaded into database

Return:
    Populates Django DB 'Budget' model
'''

DATA_PATH = "scripts/seeding/data/budgets.csv"

def run():
    with open(DATA_PATH) as f:
        reader = csv.reader(f)
        for row in reader:
            _, created = Budget.objects.get_or_create(
                sub_category=SubCategory.objects.get(name=row[1], main_category = MainCategory.objects.get(name=row[0])),
                amount=row[4],   
                year=row[2],
                month=row[3],
                created_at=timezone.now(),
                updated_at=timezone.now(),                
            )
            _.save()
    print("'Budget' loaded successfully.")