from main.models import *

import scripts.seeding.load_entities as entity
import scripts.seeding.load_entries as entry
import scripts.seeding.load_maincategories as main_category
import scripts.seeding.load_subcategories as sub_category
import scripts.seeding.load_subsubcategories as subsub_category


def run():

    # Step 1: Wipe DB
    SubSubCategory.objects.all().delete()    
    SubCategory.objects.all().delete()    
    MainCategory.objects.all().delete()
    Entity.objects.all().delete()    
    Entry.objects.all().delete()

    # Step 2: Populate
    #entity.run()
    #entry.run()

    main_category.run()
    sub_category.run()
    subsub_category.run()
