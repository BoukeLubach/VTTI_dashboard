from django.db import models
from django.db.models.base import Model
from plants.models import Terminal
from energypurchase.models import Purchased_utility

# Create your models here.
class Project(models.Model):

        
    INC = "inc"
    DECR = "decr"
    NONE = "none"

    INC_DECR_OPTIONS = (
        (INC, "Increase"),
        (DECR, "Decrease"),
        (NONE, "None")
    )


    name = models.CharField(max_length=124)
    terminal = models.ForeignKey(Terminal, on_delete=models.CASCADE, related_name='terminal')
    utility = models.ForeignKey(Purchased_utility, on_delete=models.CASCADE, related_name='utility')
    current_situation = models.TextField(blank=True, null=True)
    improved_situation = models.TextField(blank=True, null=True)
    risks = models.TextField(blank=True, null=True)
    remarks = models.TextField(blank=True, null=True)
    utility_reduction = models.FloatField(blank=True, null=True)
    investment = models.FloatField(blank=True, null=True)
    impact_OPEX  = models.CharField(max_length=5, choices=INC_DECR_OPTIONS, default=NONE)
    impact_CAPEX = models.CharField(max_length=5, choices=INC_DECR_OPTIONS, default=NONE)