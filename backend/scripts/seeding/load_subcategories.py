import csv
import os
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
    if not os.path.exists(DATA_PATH):
        print(f"Error: Data file not found at {DATA_PATH}")
        return
        
    count = 0
    try:
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
    except Exception as e:
        print(f"Error loading SubCategory data: {str(e)}")