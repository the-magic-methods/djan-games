from django.shortcuts import render, redirect
from .models import *
from django.views.generic import ListView
from django.views.generic.edit import CreateView
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from .forms import ScoreForm


# Define the home view
def home(request):
  return render(request, "home.html")

def games_index(request):
    games = Game.objects.all()
    return render(request, 'games/index.html', { 'games': games })

def games_detail(request, game_id):
  game = Game.objects.get(id=game_id)
  score_form = ScoreForm()
  return render(request, 'games/detail.html', { 'game': game, 'score_form': score_form })

def add_score(request, game_id):
  form = ScoreForm(request.POST)
  if form.is_valid():
    new_score = form.save(commit=False)
    new_score.game_id = game_id
    new_score.save()
  return redirect('detail', game_id=game_id)

def scores_index(request):
    games = Game.objects.all()
    return render(request, 'games/leaderboards.html', { 'games': games })

def memory_game(request):
    return render(request, 'games/memory-game.html' )

class GameCreate(CreateView):
  model = Game
  fields = ['gamename', 'platform', 'description']
  success_url = '/games/'
  def form_valid(self, form):
      # Assign the logged in user (self.request.user)
      form.instance.user = self.request.user  # form.instance is the cat
      # Let the CreateView do its job as usual
      return super().form_valid(form)

class GameUpdate(UpdateView):
    model = Game
    fields = ["gamename", "platform", "description"]

class GameDelete(DeleteView):
    model = Game
    success_url = "/games/"

class ScoreUpdate(UpdateView):
  model = Score
  fields = ['value', 'date']

class ScoreDelete(DeleteView):
  model = Score
  sucess_url = '/games/'

