from django.urls import path, re_path

from . import views

app_name = 'main'

urlpatterns = [
    path('', views.MainView),
    re_path(r'^api/entrys/$', views.entrys_list),
    re_path(r'^api/entrys/([0-9])$', views.entrys_detail),    
]