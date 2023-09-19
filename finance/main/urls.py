from django.urls import path, re_path, include
from rest_framework import routers
from main import views
from . import views

router = routers.DefaultRouter()
router.register(r'entitys', views.Entity, 'entitys')

urlpatterns = [
    path('', views.MainView),
    re_path(r'^api/entrys/$', views.entrys_list),
    re_path(r'^api/entrys/([0-9])$', views.entrys_detail),

    re_path(r'^api/entities/$', views.entities_list),
    re_path(r'^api/entities/([0-9])$', views.entities_detail),        
    
    re_path(r'^api/accounts/$', views.accounts_list),  
    re_path(r'^api/accounts/([0-9])$', views.accounts_detail),          

    re_path(r'^api/maincategories/$', views.maincategories_list),  
    re_path(r'^api/maincategories/([0-9])$', views.maincategories_detail),   

    re_path(r'^api/subcategories/$', views.subcategories_list),  
    re_path(r'^api/subcategories/([0-9])$', views.subcategories_detail),       

    re_path(r'^api/budgets/$', views.budgets_list),  
    re_path(r'^api/budgets/(?P<pk>\d+)/$', views.budgets_detail),    

    re_path(r'^api/users/$', views.users_list),         

    path('api/', include(router.urls)),
]