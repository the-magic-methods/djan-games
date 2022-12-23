from django.shortcuts import render
from .models import Game
from django.views.generic import ListView
from django.views.generic.edit import CreateView


# Create your views here.


# Define the home view
def home(request):
  return render(request, "home.html")

def games_index(request):
    games = Game.objects.all()
    return render(request, 'games/index.html', { 'games': games })

def games_detail(request, game_id):
  game = Game.objects.get(id=game_id)
  return render(request, 'games/detail.html', { 'game': game })

class GameCreate(CreateView):
  model = Game
  fields = '__all__'
  success_url = '/games/'