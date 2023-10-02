#-------------------------------------------------------#
#   File Name: views/urls.py
#   Description: View Functions for Main
#
#   Requirements:
#       - urls
#
#   Renders:
#       - Authentication Routes
#       - Main Model REST
#
#   Created By: Corey Yang-Smith
#   Date: September 24th, 2023
#-------------------------------------------------------#


#   IMPORTS
#-------------------------------------------------------#

# Project Imports
from .models import *
from .serializers import *

# Django Shortcuts
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.contrib.auth import logout

# DRF
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework import viewsets

###############
#### ADMIN ####
###############

@api_view(['GET', 'POST'])
def profiles_list(request):
    if request.method == 'GET':
        data = Profile.objects.all()
        print(data)
        serializer = ProfileSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Create your views here.
def MainView(request):
    return render(request, 'home/index.html')

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
        data = Profile.objects.all()
        serializer = ProfileSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# Authentication    
@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    return Response({'token': token.key, 'user': serializer.data})

@api_view(['POST'])
def signup(request):
    serializer = ProfileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['user']['username'])
        user.set_password(request.data['user']['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Logout(APIView):
    def get(self, request, format=None):
        token = request.GET.get('token', '')
        user = Token.objects.get(key=token).user
        user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response({"passed for {}".format(request.user.email)})



@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def current_user(request):
    if 'HTTP_AUTHORIZATION' in request.META:
        token = request.META['HTTP_AUTHORIZATION'][6::]
        user = Token.objects.get(key=token).user
        return Response({"username": user.username})    
        

    return Response({})    

class HomeView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)
    
#-- Entry --#

@api_view(['GET', 'POST'])
def entrys_list(request):
    if request.method == 'GET':
        if 'HTTP_AUTHORIZATION' in request.META:   
            token = request.META['HTTP_AUTHORIZATION'][6::]
            user = Token.objects.get(key=token).user       
            data = Entry.objects.all().filter(user=user)
        else:
            data = Entry.objects.all().none();
        serializer = EntrySerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        data=request.data
        print(data)
        if 'HTTP_AUTHORIZATION' in request.META:
            token = request.META['HTTP_AUTHORIZATION'][6::]
            obj = Token.objects.get(key=token).user
            user = User.objects.get(username=obj.username)
            serializer = EntrySerializer(data=data)
        if serializer.is_valid():
            serializer.save(user=user)
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
        if 'HTTP_AUTHORIZATION' in request.META:   
            token = request.META['HTTP_AUTHORIZATION'][6::]
            user = Token.objects.get(key=token).user       
            data = Entity.objects.all().filter(user=user)
        else:
            data = Entity.objects.all().none();        
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
        if 'HTTP_AUTHORIZATION' in request.META:   
            token = request.META['HTTP_AUTHORIZATION'][6::]
            user = Token.objects.get(key=token).user       
            data = MainCategory.objects.all().filter(user=user)
        else:
            data = MainCategory.objects.all().none();
        serializer = MainCategorySerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST': #TODO add validation to false req
        data=request.data
        if 'HTTP_AUTHORIZATION' in request.META:
            token = request.META['HTTP_AUTHORIZATION'][6::]
            obj = Token.objects.get(key=token).user
            user = User.objects.get(username=obj.username)
            serializer = MainCategorySerializer(data=data)                                    
        if serializer.is_valid():          
            serializer.save(user=user)
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def maincategories_detail(request, pk):
    if 'HTTP_AUTHORIZATION' in request.META:   
        token = request.META['HTTP_AUTHORIZATION'][6::]
        user = Token.objects.get(key=token).user       

    try:
        print("looking for main category")
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
        if 'HTTP_AUTHORIZATION' in request.META:
            token = request.META['HTTP_AUTHORIZATION'][6::]
            user = Token.objects.get(key=token).user       
            data = SubCategory.objects.all().filter(user=user)
        else:
            data = SubCategory.objects.all()
        serializer = SubCategorySerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        data=request.data;
        print("posting!")
        print(data)
        if 'HTTP_AUTHORIZATION' in request.META:
            token = request.META['HTTP_AUTHORIZATION'][6::]
            obj = Token.objects.get(key=token).user
            user = User.objects.get(username=obj.username)
            serializer = SubCategorySerializer(data=data)
        if serializer.is_valid():
            serializer.save(user=user)
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
        data=request.data;
        if 'HTTP_AUTHORIZATION' in request.META:
            token = request.META['HTTP_AUTHORIZATION'][6::]
            test = Token.objects.get(key=token).user
            user = User.objects.get(username=test.username)
            print(user)

            data['user'] = user.pk   
            print(data)                     
            serializer = BudgetSerializer(data=request.data)
            print("successful")
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
    

#   RESOURCES
#-------------------------------------------------------#

# CORS Configuration
# https://www.bezkoder.com/django-rest-api/#6_Configure_CORS_for_a_Rest_Api_Resource

# Setting up Token-based Authentication with DRF
# https://www.youtube.com/watch?v=llrIu4Qsl7c