'''
generate_fake_entries.py
Python script that queries the available categories, and randomly generates X entries for random categories.

Args:
    None

Returns:
    Populates Django DB 'Entry' model
'''

import random
from faker import Faker
from faker.providers import color


from django.utils import timezone
from main.models import Entry, MainCategory, SubCategory, Entity, User
import calendar
import datetime

GENERATE_NUM = 500
GENERATE_YEARS = [2023]
GENERATE_MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

MIN_INCOME = 0
MAX_INCOME = 0
MIN_EXPENSE = 0
MAX_EXPENSE = 75

MIN_CENTS = 0
MAX_CENTS = 99

SHOW_ENTRY = True

SELECTED_USERNAME = "admin"

def get_random_date():
    '''
    get_random_date

    Args:
        None

    Returns:
        Randomly selected date for range in YYYY-MM-DD format
    '''
    # YYYY-MM-DD
    year = random.choice(GENERATE_YEARS)
    month = random.choice(GENERATE_MONTHS)

    possible_dates = calendar.Calendar().itermonthdates(year, month)
    random_date = random.choice([date for date in possible_dates if date.month == month])
    random_date_string = random_date.strftime('%Y-%m-%d')
    return random_date_string

def get_random_entity():
    '''
    get_random_entity

    Args:
        None

    Returns:
        Randomly selected entity for SELECTED_USER
    '''
    selected_user = User.objects.get(username=SELECTED_USERNAME)

    all_entities = Entity.objects.filter(user=selected_user)
    random_entity = random.choice(all_entities)
    return random_entity

def get_random_categories():
    '''
    get_random_categories
    
    Args:
        None

    Returns:
        Randomly selected main category & sub category for SELECTED_USER
    '''
    selected_user = User.objects.get(username=SELECTED_USERNAME)    

    all_sub_categories = SubCategory.objects.filter(user=selected_user)
    random_sub_category = random.choice(all_sub_categories)
    related_main_category = random_sub_category.main_category

    categories = [related_main_category, random_sub_category]

    return categories


def run():
    # Initialize Faker
    faker = Faker()
    faker.add_provider(color)

    for i in range(GENERATE_NUM):
        categories = get_random_categories()

        random_name = faker.color()
        random_date = get_random_date()
        random_entity = get_random_entity()
        random_main_category = categories[0]
        random_sub_category = categories[1]     
        random_income = random.randint(MIN_INCOME, MAX_INCOME)
        random_expense = float(str(random.randint(MIN_EXPENSE, MAX_EXPENSE)) + "." + str(random.randint(MIN_CENTS, MAX_CENTS)))



        _, created = Entry.objects.get_or_create(
            user=User.objects.get(username=SELECTED_USERNAME),
            name = random_name,
            income = random_income,
            expense = random_expense,
            notes = "fake_data",
            date = random_date,
            routing = random_entity,
            main_category = random_main_category,
            sub_category = random_sub_category,
            created_at = timezone.now(),
            updated_at = timezone.now(),     
        )

        _.save()

        if SHOW_ENTRY:
            print("Generating Entry (" + str(i) + ")")
            print("NAME: " + random_name)
            print("DATE: " + random_date)
            print("ENTITY: " + random_entity.name)
            print("MAIN CATEGORY: " + random_main_category.name)
            print("SUB CATEGORY: " + random_sub_category.name)
            print("INCOME: $" + str(random_income))
            print("EXPENSE: $" + str(random_expense))
            print("# ---- ---- ---- ---- #")  




    print(str(GENERATE_NUM) + " entries randomly generated.")
