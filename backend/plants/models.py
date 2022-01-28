from django.db import models
from django.db.models.base import Model, ModelState
from django.db.models.fields import IntegerField
from django.db.models.fields.related import OneToOneField

# Create your models here.


class Terminal(models.Model):
    name = models.CharField(max_length=32)
    country = models.CharField(max_length=124, blank=True, null=True)
    city = models.CharField(max_length=124, blank=True, null=True)
    lattitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    def __str__(self):
        return str(self.name) + " - " + str(self.country)


class TerminalEquipment(models.Model):
    terminal = models.OneToOneField(Terminal, on_delete=models.CASCADE, related_name='terminale')
    dieselGenerator = models.BooleanField(default=False)
    fireFightEquipment = models.BooleanField(default=False)
    processPumpsElectric = models.BooleanField(default=False)
    processPumpsDiesel = models.BooleanField(default=False)
    airCompressor = models.BooleanField(default=False)
    heatedStorage = models.BooleanField(default=False)
    VCU = models.BooleanField(default=False)
    RTO = models.BooleanField(default=False)
    VRU = models.BooleanField(default=False)

