# Django Imports
from .models import *

# Django Authentication
from django.contrib.auth.password_validation import validate_password

# Django Rest Framework (DRF) Imports
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


# Admin
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user', 'dob', 'gender')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = Profile.objects.create(
            user=User.validated_data['user'],
            dob=validated_data['dob'],
            gender=validated_data['gender']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user
    
class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        fields = ['id', 'username', 'password', 'email']

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

    
