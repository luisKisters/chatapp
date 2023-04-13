from django.shortcuts import render
from .models import ChatRoom, User, Message
from django.views.generic.base import TemplateView
from django.http import JsonResponse

# Create your views here.

# def index_view(request, *args, **kwargs):
#     return render(request, "index.html", {})

# def index_view(request):
#     # Retrieve all the chat rooms from the database
#     chat_rooms = ChatRoom.objects.all()
    
#     # Render the template with the chat room list
#     return render(request, str("index.html"), {'chat_rooms': chat_rooms})

class index_view(TemplateView):
    template_name = 'index.html'


def get_chat_rooms(request):
    chat_rooms = [
        {'id': 1, 'name': 'Chat Room 1'},
        {'id': 2, 'name': 'Chat Room 2'},
        {'id': 3, 'name': 'Chat Room 3'},
    ]
    return JsonResponse({'chat_rooms': chat_rooms})
