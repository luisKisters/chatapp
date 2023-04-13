from django.shortcuts import render
from .models import ChatRoom, User, Message

# Create your views here.

def index_view(request, *args, **kwargs):
    return render(request, "index.html", context)
