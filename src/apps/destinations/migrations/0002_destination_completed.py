# Generated by Django 2.1.4 on 2019-01-19 02:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('destinations', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='destination',
            name='completed',
            field=models.BooleanField(default=False),
        ),
    ]
