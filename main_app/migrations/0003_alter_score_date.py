# Generated by Django 4.1.4 on 2022-12-23 23:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0002_score'),
    ]

    operations = [
        migrations.AlterField(
            model_name='score',
            name='date',
            field=models.DateField(default=datetime.date.today),
        ),
    ]