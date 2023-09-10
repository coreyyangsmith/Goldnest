from rest_framework import serializers
from .models import *

# Micro Finance
class EntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entity
        fields = ('pk', 'name', 'created_at', 'updated_at')

class MainCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MainCategory
        fields = ('pk', 'name', 'description',
                  'created_at', 'updated_at')
        
class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        main_category = MainCategorySerializer()
        fields = ('pk', 'name', 'description',
                  'main_category', 'created_at', 'updated_at')

class SubSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubSubCategory
        fields = ('pk', 'name', 'description',
                  'sub_category', 'created_at', 'updated_at')
        
class EntrySerializer(serializers.ModelSerializer):
    main_category = MainCategorySerializer() 
    sub_category = SubCategorySerializer()    
    routing = EntitySerializer()       
    class Meta:
        model = Entry 
        fields = ('pk', 'name', 'income', 'expense',
                  'notes', 'date', 'routing', 'main_category',
                  'sub_category', 'created_at', 'updated_at')
        
                  
        
# Macro Finance
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('pk', 'name', 'account_type', 'current_balance',
                  'rate', 'start_term', 'end_term', 'entity',
                  'created_at', 'updated_at')