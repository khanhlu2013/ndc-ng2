# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('membership', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='membership',
            name='user',
            field=models.ForeignKey(default=None, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='membership',
            name='is_issue_key',
            field=models.BooleanField(default=False),
            preserve_default=True,
        ),
    ]
