# Generated by Django 4.1.4 on 2022-12-24 07:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0006_alter_score_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='score',
            options={'ordering': ['-value']},
        ),
    ]
