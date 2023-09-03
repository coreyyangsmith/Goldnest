from django.urls import path, re_path, include
from rest_framework import routers
from main import views
from . import views

app_name = 'main'

router = routers.DefaultRouter()
router.register(r'entitys', views.Entity, 'entitys')

urlpatterns = [
    path('', views.MainView),
    re_path(r'^api/entrys/$', views.entrys_list),
    re_path(r'^api/entrys/([0-9])$', views.entrys_detail),    
    path('api/', include(router.urls)),
]