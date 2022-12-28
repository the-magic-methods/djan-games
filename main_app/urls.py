from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('games/', views.games_index, name='index'),
    path('games/<int:game_id>/', views.games_detail, name='detail'),
    path('score/<int:pk>/update/', views.ScoreUpdate.as_view(), name='score_update'),
    path('score/<int:pk>/delete/', views.ScoreDelete.as_view(success_url="/games/"), name='score_delete'),
    path('games/create/', views.GameCreate.as_view(), name='games_create'),
    path('games/<int:pk>/update/', views.GameUpdate.as_view(), name='games_update'),
    path('games/<int:pk>/delete/', views.GameDelete.as_view(), name='games_delete'),
    path('games/<int:game_id>/add_score/', views.add_score, name='add_score'),
    path('games/leaderboard/', views.scores_index, name='leaderboard'),
    path('games/memory-game/', views.memory_game, name='memory-game'),
]