from django.contrib import admin

# Register your models here.
from .models import Terminal, Emissions_source_item

admin.site.register(Terminal)
admin.site.register(Emissions_source_item)