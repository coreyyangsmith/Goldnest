from main.models import *
import csv
from django.utils import timezone
from datetime import datetime


from re import sub
from decimal import Decimal

SELECTED_USERNAME = "coreyyangsmith"

DATA_PATH = "/Users/corey/Desktop/personalData.csv"

SELECTED_YEAR = 2023

'''
Data Format
[0] : Date
[1] : Entity
[2] : Item Name
[3] : Main Category
[4] : Sub Category
[5] : Income
[6] : Expense
'''



def run():
    # Find Selected User
    user = User.objects.get(username=SELECTED_USERNAME)

    # Delete All Data for Selected User
    Entry.objects.filter(user=user).delete() #Done
    Account.objects.filter(user=user).delete() # Not Doing
    Entity.objects.filter(user=user).delete() #Done
    Budget.objects.filter(user=user).delete() #Done
    SubSubCategory.objects.filter(user=user).delete() # Not Doing
    SubCategory.objects.filter(user=user).delete() # Done
    MainCategory.objects.filter(user=user).delete() # Done

    # Get MainCategory, SubCategory, & Entity
    main_categories = set()
    sub_categories = []
    entities = set()

    # Get Main Categories & Entities
    with open(DATA_PATH) as f:
        reader = csv.reader(f)
        for row in reader:
            main_categories.add(row[3])
            entities.add(row[1])   
    main_categories = list(main_categories)       

    # Setup Sub_Category
    for item in main_categories:
        sub_categories.append(set()) #append empty set for each main_category                     

    # Populate Sub Category Array
    with open(DATA_PATH) as f:
        reader = csv.reader(f)
        for row in reader:
            for i in range (0, len(main_categories)):
                if main_categories[i] == row[3]:
                    sub_categories[i].add(row[4])

    # ADD MAIN CATEGORY TO DB
    for i in range(0, len(main_categories)):
        _, created = MainCategory.objects.get_or_create(
            user=user,
            name=main_categories[i],
            description="test",
            created_at=timezone.now(),
            updated_at = timezone.now()
        )
        _.save()
    print("Main Category Added")

    # ADD SUB CATEGORY TO DB
    for i in range(0, len(main_categories)):
        for subcategory in sub_categories[i]:
            _, created = SubCategory.objects.get_or_create(
                user=user,
                name=subcategory,
                description="test",
                main_category=MainCategory.objects.get(user=user, name=main_categories[i]),
                created_at=timezone.now(),
                updated_at=timezone.now()
            )
            _.save()
    print("Sub Category Added")            

    # ADD ENTITY TO DB
    entities = list(entities)        
    for i in range (0, len(entities)):
        _, created = Entity.objects.get_or_create(
            user=user,
            name=entities[i],
            created_at=timezone.now(),
            updated_at=timezone.now()
        )
    print("Entity Added")        

    # POPULATE BUDGETS
    for i in range(0, len(main_categories)):
        for subcategory in sub_categories[i]:
            for month in range (0, 12):
                _, created = Budget.objects.get_or_create(
                    user=user,
                    sub_category=SubCategory.objects.get(user=user, 
                                                         name=subcategory,
                                                         main_category = MainCategory.objects.get(name=main_categories[i], 
                                                                                                  user=user)),
                    amount=50,
                    year=SELECTED_YEAR,
                    month=month,
                )
                _.save()
    print("Budget Added")

    # IMPORT ENTRIES
    with open(DATA_PATH) as f:
        reader = csv.reader(f)
        for row in reader:
            processed_date = datetime.strptime(row[0], '%m/%d/%y').strftime('%Y-%m-%d')

            if (row[5] == ''):
                processed_income = 0
            else:
                new_string = row[5].replace(",", "")    
                new_string = row[5].replace("\t", "")     
                new_string = row[5].replace(" ", "")                                                          
                processed_income = Decimal(sub(r'[^\d.]', '', new_string))

            if (row[6] == ''):
                processed_expense = 0
            else:
                new_string = row[6].replace(",", "")    
                new_string = row[5].replace(" ", "")                     
                new_string = row[6].replace("\t", "")                                     
                processed_expense = Decimal(sub(r'[^\d.]', '', new_string))        


            _, created = Entry.objects.get_or_create(
                user=user,
                name=row[2],
                income=processed_income,
                expense=processed_expense,
                notes="test",
                date=processed_date,
                routing=Entity.objects.get(user=user, name=row[1]),
                main_category=MainCategory.objects.get(user=user, name=row[3]),
                sub_category=SubCategory.objects.get(user=user, name=row[4], main_category=MainCategory.objects.get(user=user, name=row[3])),
                created_at=timezone.now(),
                updated_at=timezone.now(),
            )
            _.save()
    print("Entry Added")            
    print("Import Complete!") 
    
if __name__ == "__main__": 
    run()