from django.contrib import admin
# import your models here
from .models import *

# Register your models here
admin.site.register(Game)
admin.site.register(Score)
admin.site.register(Profile)