from django.shortcuts import render, redirect
from .models import *
from django.views.generic import ListView
from django.views.generic.edit import CreateView
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from .forms import *


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
    score = Score.objects.all()
    # score_set = 
    first = Score.objects.first()
    return render(request, 'games/leaderboards.html', { 'games': games, 'score': score, 'first': first })

def profile_update_page(request):
  profile = Profile.objects.all()
  profile_form = ProfileForm()
  return render(request, 'main_app/profile_edit.html', { 'profile': profile, 'profile_form': profile_form })

def profile_update_info(request):
  form = ProfileForm(request.POST)
  if form.is_valid():
    new_info = form.save(commit=False)
    new_info.save()
  return redirect('profile')

def profile_page(request):
  profile = Profile.objects.last()
  profile_form = ProfileForm()
  games = Game.objects.all()
  return render(request, 'main_app/profile.html', {  'games': games, 'profile': profile, 'profile_form': profile_form })

class GameCreate(CreateView):
  model = Game
  fields = ["gamename", "platform", "description"]
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

def signup(request):
  error_message = ''
  if request.method == 'POST':
    # This is how to create a 'user' form object
    # that includes the data from the browser
    form = UserCreationForm(request.POST)
    if form.is_valid():
      # This will add the user to the database
      user = form.save()
      # This is how we log a user in via code
      login(request, user)
      return redirect('index')
    else:
      error_message = 'Invalid sign up - try again'
  # A bad POST or a GET request, so render signup.html with an empty form
  form = UserCreationForm()
  context = {'form': form, 'error_message': error_message}
  return render(request, 'registration/signup.html', context)
