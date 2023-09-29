# Django Imports
from .models import *
import datetime
# Django Authentication
from django.contrib.auth.password_validation import validate_password

# Django Rest Framework (DRF) Imports
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

# Admin
class UserSerializer(serializers.ModelSerializer):    
    class Meta(object):
        model = User
        fields = ['id', 'username', 'password', 'email', 
                  'first_name', 'last_name']

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = ['user', 'dateOfBirth', 'gender']

    def create (self, validated_data):
        print(validated_data)
        user = User.objects.create(username=validated_data['user']['username'],
                                    email=validated_data['user']['email'],
                                    first_name=validated_data['user']['first_name'],
                                    last_name=validated_data['user']['last_name'])
        user.set_password(User.objects.make_random_password())
        user.save()

        profile = Profile.objects.create(user = user,
                                         dateOfBirth=validated_data['dateOfBirth'],
                                         gender=validated_data['gender'])

        return profile
    

# Micro Finance
class EntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entity
        fields = ('pk', 'name', 'created_at', 'updated_at')

class MainCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MainCategory
        user = UserSerializer()        
        fields = ('pk', 'user', 'name', 'description',
                  'created_at', 'updated_at')
        
class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        main_category = MainCategorySerializer()
        fields = ('pk', 'user', 'name', 'description',
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
        
class BudgetSerializer(serializers.ModelSerializer):
    sub_category = SubCategorySerializer()       
    class Meta:
        model = Budget
        fields = ('pk', 'amount', 'year', 'month',
                  'sub_category', 'created_at', 'updated_at')
        
    def create(self, validated_data):
        validated_data["sub_category"] = SubCategory.objects.get(name=validated_data["sub_category"]["name"],
                                                                 description=validated_data["sub_category"]["description"])
        return Budget.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        subcategory_data = validated_data.pop('sub_category')
        sub_category = instance.sub_category

        instance.amount = validated_data.get('amount', instance.amount)
        instance.year = validated_data.get('year', instance.year)
        instance.month = validated_data.get('month', instance.month)
        instance.created_at = validated_data.get('created_at', instance.created_at)
        instance.updated_at = validated_data.get('updated_at', instance.updated_at)   
        instance.save()       

        sub_category.save()

        return instance                

    
