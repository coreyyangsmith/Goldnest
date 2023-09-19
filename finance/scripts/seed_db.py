from main.models import *

# Admin
# Micro
import scripts.seeding.load_users as user

# Micro
import scripts.seeding.load_entities as entity
import scripts.seeding.load_entries as entry
import scripts.seeding.load_maincategories as main_category
import scripts.seeding.load_subcategories as sub_category
import scripts.seeding.load_subsubcategories as subsub_category

# Macro
import scripts.seeding.load_accounts as account
import scripts.seeding.load_budgets as budget

def run():

    # Step 1: Wipe DB
    Entry.objects.all().delete()
    Account.objects.all().delete()
    Entity.objects.all().delete()   
    Budget.objects.all().delete()         
    SubSubCategory.objects.all().delete()      
    SubCategory.objects.all().delete()   
    MainCategory.objects.all().delete()

    User.objects.all().delete()



 




    # Step 2: Populate
    user.run()
    main_category.run()
    sub_category.run()
    subsub_category.run()
    budget.run()
    entity.run()
    entry.run()
    account.run()

    
