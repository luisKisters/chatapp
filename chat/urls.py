from django.urls import path
from . import views

urlpatterns = [
    # path('index/', views.index_view, name='index'),
    path('', views.index_view.as_view(), name='index'),
    path('api/chat_rooms/', views.get_chat_rooms, name='get_chat_rooms'),

]
