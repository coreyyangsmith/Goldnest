from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import *
from .serializers import *
from rest_framework.generics import ListCreateAPIView

# Create your views here.
def MainView(request):
    return render(request, 'home/index.html')

from rest_framework import viewsets
from .serializers import *
from .models import *

#######################
#### MICRO FINANCE ####
#######################

class Entity(viewsets.ModelViewSet): #TODO Find out what this is? lol
    serializer_class = EntitySerializer
    queryset = Entity.objects.all()

#-- User --#   
@api_view(['GET', 'POST'])
def users_list(request):
    if request.method == 'GET':
        data = UserProfile.objects.all()
        serializer = UserProfileSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#-- Entry --#
@api_view(['GET', 'POST'])
def entrys_list(request):
    if request.method == 'GET':
        data = Entry.objects.all()
        serializer = EntrySerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EntrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def entrys_detail(request, pk):
    try:
        entry = Entry.objects.get(pk=pk)
    except Entry.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = EntrySerializer(entry, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        entry.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
#-- Entity --#
@api_view(['GET', 'POST'])
def entities_list(request):
    if request.method == 'GET':
        data = Entity.objects.all()
        serializer = EntitySerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EntitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def entities_detail(request, pk):
    try:
        entity = Entity.objects.get(pk=pk)
    except Entity.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = EntitySerializer(entity, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        entity.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
#-- MainCategory --#
@api_view(['GET', 'POST'])
def maincategories_list(request):
    if request.method == 'GET':
        data = MainCategory.objects.all()
        serializer = MainCategorySerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MainCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def maincategories_detail(request, pk):
    try:
        maincategory = MainCategory.objects.get(pk=pk)
    except MainCategory.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = MainCategorySerializer(maincategory, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        maincategory.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)  

#-- Sub Category --#
@api_view(['GET', 'POST'])
def subcategories_list(request):
    if request.method == 'GET':
        data = SubCategory.objects.all()
        serializer = SubCategorySerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SubCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def subcategories_detail(request, pk):
    try:
        subcategory = SubCategory.objects.get(pk=pk)
    except SubCategory.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = SubCategorySerializer(subcategory, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        subcategory.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)       

#######################
#### MACRO FINANCE ####
#######################

#-- Accounts --#
@api_view(['GET', 'POST'])
def accounts_list(request):
    if request.method == 'GET':
        data = Account.objects.all()
        serializer = AccountSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def accounts_detail(request, pk):
    try:
        account = Account.objects.get(pk=pk)
    except Account.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = AccountSerializer(account, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        account.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    
    
#-- Budget --#
@api_view(['GET', 'POST'])
def budgets_list(request):
    if request.method == 'GET':
        data = Budget.objects.all()
        serializer = BudgetSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BudgetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def budgets_detail(request, pk):
    try:
        budget = Budget.objects.get(pk=pk)
    except Budget.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET': 
        serializer = BudgetSerializer(budget) 
        return Response(serializer.data)    

    if request.method == 'PUT':
        serializer = BudgetSerializer(budget, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        budget.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)        
    
# Resource
# https://www.bezkoder.com/django-rest-api/#6_Configure_CORS_for_a_Rest_Api_Resource