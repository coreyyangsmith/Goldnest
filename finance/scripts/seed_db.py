from main.models import *

# Micro
import scripts.seeding.load_entities as entity
import scripts.seeding.load_entries as entry
import scripts.seeding.load_maincategories as main_category
import scripts.seeding.load_subcategories as sub_category
import scripts.seeding.load_subsubcategories as subsub_category

# Macro
import scripts.seeding.load_accounts as accounts


def run():

    # Step 1: Wipe DB
    Entry.objects.all().delete()
    Account.objects.all().delete()
    Entity.objects.all().delete()       
    SubSubCategory.objects.all().delete()      
    SubCategory.objects.all().delete()   
    MainCategory.objects.all().delete()


 




    # Step 2: Populate
    main_category.run()
    sub_category.run()
    subsub_category.run()
    entity.run()
    entry.run()
    accounts.run()

    
