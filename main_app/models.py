from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User
import datetime


class Game(models.Model):
    gamename = models.CharField(max_length=100)
    platform = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.gamename

    def get_absolute_url(self):
        return reverse('detail', kwargs={'game_id': self.id})

class Score(models.Model):
    value = models.PositiveIntegerField()
    date = models.DateField(default=datetime.date.today)
    Game = Game

    game = models.ForeignKey(Game, on_delete=models.CASCADE)

    class Meta:
        ordering = ['-value']

    def get_absolute_url(self):
        return reverse("detail", kwargs={'game_id': self.game.id})

    def __str__(self):
<<<<<<< HEAD
        return f"{self.value} on {self.date} at {self.id}"


class MemoryGameScore(models.Model):
    score = models.IntegerField()
    date = models.DateField( default=datetime.date.today)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.score

    def get_absolute_url(self):
        return reverse('memory-game', kwargs={'game_id': self.id})
        
=======
        return f"{self.value}"

class Profile(models.Model):
    username = models.CharField(max_length=100)
    bio = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.username} and {self.bio}"
>>>>>>> dev
