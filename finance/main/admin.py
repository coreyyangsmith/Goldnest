from django.contrib import admin

from .models import *

# Admin
admin.site.register(Profile)

# Micro
admin.site.register(MainCategory)
admin.site.register(SubCategory)
admin.site.register(SubSubCategory)

admin.site.register(Entity)
admin.site.register(Entry)

# Macro
admin.site.register(Account)
admin.site.register(Budget)