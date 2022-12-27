from django.contrib import admin
# import your models here
from .models import Game, Score

# Register your models here
admin.site.register(Game)
admin.site.register(Score)