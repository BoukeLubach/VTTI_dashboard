from django.db import models
from plants.models import Terminal
# Create your models here.


class Purchased_utility(models.Model):
    
    NM3 = "Nm3"
    LITER = "Liter"
    MWh = "MWh"
    TJ = "TJ"
    OTH = "Other"

    ENERGY_CARRIER_UNITS = (
        (NM3, "Nm3"),
        (LITER, "Liter"),
        (MWh, "MWh"),
        (TJ, "TJ"),
        (OTH, "OTH")
    )
    
    name = models.CharField(max_length=124)
    terminal = models.ForeignKey(Terminal, on_delete = models.CASCADE)    
    year = models.IntegerField()
    amount = models.FloatField(blank=True, null=True)
    emission_factor = models.FloatField(blank=True, null=True)
    uom = models.CharField(max_length=12, choices=ENERGY_CARRIER_UNITS, default=MWh)
    price = models.FloatField(blank=True, null=True)

    class Meta:
        unique_together = ('terminal', 'name', 'year')

    @property
    def emission(self):
        return self.amount * self.emission_factor

    def __str__(self):
        return str(self.name) + str(self.terminal) + " - " + str(self.year)


