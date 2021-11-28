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

class Emissions_source_item(models.Model):

    NM3 = "Nm3"
    LITER = "Liter"
    MWh = "MWh"
    TJ = "TJ"

    ENERGY_CARRIER_UNITS = (
        (NM3, "Nm3"),
        (LITER, "Liter"),
        (MWh, "MWh"),
        (TJ, "TJ"),
    )
    terminal = models.ForeignKey(Terminal, on_delete = models.CASCADE)
    name = models.CharField(max_length=32)
    amount = models.FloatField(blank=True, null=True)
    uom = models.CharField(max_length=12, choices=ENERGY_CARRIER_UNITS, default=MWh)
    year = models.IntegerField()
    emission_factor = models.FloatField(blank=True, null=True)

    class Meta:
        unique_together = ('terminal', 'name', 'year')

    @property
    def emission(self):
        return self.amount * self.emission_factor

    def __str__(self):
        return str(self.name) + str(self.terminal) + " - " + str(self.year)