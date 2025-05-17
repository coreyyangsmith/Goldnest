from main.models import *

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
