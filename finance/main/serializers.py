from rest_framework import serializers
from .models import Entry, Entity, MainCategory, SubCategory, SubSubCategory

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry 
        fields = ('pk', 'name', 'income', 'expense',
                  'notes', 'date', 'routing', 'main_category',
                  'sub_category', 'created_at', 'updated_at')

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
        fields = ('pk', 'name', 'description',
                  'main_category', 'created_at', 'updated_at')

class SubSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubSubCategory
        fields = ('pk', 'name', 'description',
                  'sub_category', 'created_at', 'updated_at')