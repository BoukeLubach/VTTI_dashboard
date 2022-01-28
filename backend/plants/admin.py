from django.contrib import admin

# Register your models here.
from .models import Terminal, TerminalEquipment

admin.site.register(Terminal)
admin.site.register(TerminalEquipment)