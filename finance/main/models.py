from django.db import models
import datetime
from django.core.validators import MaxValueValidator, MinValueValidator
from django.conf import settings

from security.encryption import encrypt_field

from django.contrib.auth.models import User

GENDER = {
    ('male','M'),
    ('female','F'),
    ('other','X')              
}

class Profile(models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    dateOfBirth = models.DateField(null=True, auto_now=False, auto_now_add=False)
    gender = models.CharField(max_length=6, choices=GENDER, default='M')
    #profile_pic = models.ImageField(upload_to='profile_pics', blank=True)
    #tier = models.IntegerField(null=False); # either 1 2 or 3 depending on paid tier

    def __str__(self):
        return self.user.username

# ################################################################# #
# ------------------------- MICRO FINANCE ------------------------- #
# ################################################################# #

# Expenses
class MainCategory(models.Model):
    name = models.CharField(max_length=50, blank=False, null=False)
    description = models.CharField(max_length=500, null=True)

    # Add Type - Income, Investment, Expense (for now...)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.description = encrypt_field(self.description)
        super().save(*args, **kwargs)    

class SubCategory(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500)

    main_category = models.ForeignKey(MainCategory, on_delete=models.CASCADE)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self):
        return self.main_category.name + "-" + self.name   

    def save(self, *args, **kwargs):
        self.description = encrypt_field(self.description)
        super().save(*args, **kwargs)        
    
class SubSubCategory(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500)

    sub_category = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE)    

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self):
        return self.sub_category.main_category.name + "-" + self.sub_category.name + "-" + self.name    
    
class Entity(models.Model):
    name = models.CharField(max_length=50)

    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE)    

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    def __str__(self):
        return self.name
    
class Entry(models.Model):
    name = models.CharField(max_length=50)
    income = models.DecimalField(max_digits=11, decimal_places=2)
    expense = models.DecimalField(max_digits=11, decimal_places=2)
    notes = models.CharField(max_length=200, null=True, blank=False)

    date = models.DateField()
    routing = models.ForeignKey(Entity, on_delete=models.DO_NOTHING)
    main_category = models.ForeignKey(MainCategory, on_delete=models.DO_NOTHING)
    sub_category = models.ForeignKey(SubCategory, on_delete=models.DO_NOTHING)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)    

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.name = encrypt_field(self.name)
        self.notes = encrypt_field(self.notes)        
        super().save(*args, **kwargs)
    
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
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)    

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class AccountEntry(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=11, decimal_places=2, default=0)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)      

    date = models.DateField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)    

    
class Budget(models.Model):
    def current_year():
        return datetime.date.today().year
    
    def current_month():
        return datetime.date.today().month    

    amount = models.DecimalField(max_digits=11, decimal_places=2, default=0)
    year = models.PositiveIntegerField(default=current_year(), 
                                       validators=[MinValueValidator(1984), MaxValueValidator(current_year())])
    month = models.PositiveSmallIntegerField(default=current_month(),
                                             validators=[MinValueValidator(1), MaxValueValidator(12)])

    sub_category = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)    

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.year) + "-" + str(self.month) + "-" + self.sub_category.name;


