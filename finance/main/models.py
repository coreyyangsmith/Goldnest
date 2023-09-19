from django.db import models
import datetime
from django.core.validators import MaxValueValidator, MinValueValidator


from django.contrib.auth.models import User

GENDER = {
    ('male','M'),
    ('female','F'),
    ('other','X')              
}

class UserProfile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    dob = models.DateField()
    gender = models.CharField(max_length=6, choices=GENDER, default='M')

    def __str__(self):
        return str(self.user)

# ################################################################# #
# ------------------------- MICRO FINANCE ------------------------- #
# ################################################################# #

# Expenses
class MainCategory(models.Model):
    name = models.CharField(max_length=15, blank=False, null=False)
    description = models.CharField(max_length=500, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self):
        return self.name

class SubCategory(models.Model):
    name = models.CharField(max_length=15)
    description = models.CharField(max_length=500)

    main_category = models.ForeignKey(MainCategory, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self):
        return self.main_category.name + "-" + self.name    
    
class SubSubCategory(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500)

    sub_category = models.ForeignKey(SubCategory, on_delete=models.CASCADE)

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
ACCOUNT_TYPE_CHOICES = [
    ("CEQ", "Chequings"),
    ("SAV", "Savings"),
    ("INV", "Investment"),
    ("AST", "Asset"),    
    ("DBT", "Debt"),
]

class Account(models.Model):
    name = models.CharField(max_length=50)
    account_type = models.CharField(max_length=3, choices=ACCOUNT_TYPE_CHOICES)
    current_balance = models.FloatField()
    rate = models.FloatField(null=True)
    start_term = models.DateField(null=True, blank=True)
    end_term = models.DateField(null=True, blank=True)    

    entity = models.ForeignKey(Entity, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class Budget(models.Model):
    def current_year():
        return datetime.date.today().year
    
    def current_month():
        return datetime.date.today().month    

    amount = models.FloatField(default=0)
    year = models.PositiveIntegerField(default=current_year(), 
                                       validators=[MinValueValidator(1984), MaxValueValidator(current_year())])
    month = models.PositiveSmallIntegerField(default=current_month(),
                                             validators=[MinValueValidator(1), MaxValueValidator(12)])

    sub_category = models.ForeignKey(SubCategory, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.year) + "-" + str(self.month) + "-" + self.sub_category.name;


