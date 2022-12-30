from django.forms import ModelForm
from .models import *

class ScoreForm(ModelForm):
    class Meta:
        model = Score
        fields = ['value', 'date']

class ProfileForm(ModelForm):
    class Meta:
        model = Profile
        fields = ['username', 'bio']