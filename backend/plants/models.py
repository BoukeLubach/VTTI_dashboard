from django.db import models
from django.db.models.base import Model, ModelState
from django.db.models.fields import IntegerField

# Create your models here.


class Terminal(models.Model):
    name = models.CharField(max_length=32)
    country = models.CharField(max_length=124, blank=True, null=True)
    city = models.CharField(max_length=124, blank=True, null=True)
    lattitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    def __str__(self):
        return str(self.name) + " - " + str(self.country)
