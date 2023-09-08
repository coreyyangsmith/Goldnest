from django.db import models

# ################################################################# #
# ------------------------- MICRO FINANCE ------------------------- #
# ################################################################# #

# Expenses
class MainCategory(models.Model):
    name = models.CharField(max_length=15, blank=False, null=False)
    description = models.CharField(max_length=500)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self):
        return self.name

class SubCategory(models.Model):
    name = models.CharField(max_length=15)
    description = models.CharField(max_length=500)

    main_category = models.ForeignKey(MainCategory, on_delete=models.DO_NOTHING)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self):
        return self.main_category.name + "-" + self.name    
    
class SubSubCategory(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500)

    sub_category = models.ForeignKey(SubCategory, on_delete=models.DO_NOTHING)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self):
        return self.sub_category.main_category.name + "-" + self.sub_category.name + "-" + self.name    
    
class Entity(models.Model):
    name = models.CharField(max_length=50)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self):
        return self.name
    
class Entry(models.Model):
    name = models.CharField(max_length=50)
    income = models.FloatField()
    expense = models.FloatField()
    notes = models.CharField(max_length=200, null=True, blank=False)

    date = models.DateTimeField(auto_now_add=True)
    routing = models.ForeignKey(Entity, on_delete=models.DO_NOTHING)
    main_category = models.ForeignKey(MainCategory, on_delete=models.DO_NOTHING)
    sub_category = models.ForeignKey(SubCategory, on_delete=models.DO_NOTHING)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
# ################################################################# #
# ------------------------- MACRO FINANCE ------------------------- #
# ################################################################# #

class Account(models.Model):
    name = models.CharField(max_length=50)
    account_type = models.CharField(max_length=50) #TODO Switch Options, future FK?, maybe add subcategory
    current_balance = models.FloatField()
    rate = models.FloatField(null=True)
    start_term = models.DateField(null=True, blank=True)
    end_term = models.DateField(null=True, blank=True)    

    entity = models.ForeignKey(Entity, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


