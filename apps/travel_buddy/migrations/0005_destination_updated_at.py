# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-09-18 19:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('travel_buddy', '0004_auto_20180522_2045'),
    ]

    operations = [
        migrations.AddField(
            model_name='destination',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
