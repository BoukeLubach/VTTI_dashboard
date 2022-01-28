from django.urls import path, include

from .apiviews import (
    TerminalEquipmentViewSet,
    TerminalViewSet, 

)
from rest_framework.routers import DefaultRouter

app_name = 'plants'

router = DefaultRouter()
router.register('api/terminals', TerminalViewSet, basename='terminals')
router.register("api/terminalequipment", TerminalEquipmentViewSet, basename='terminalequipment')

urlpatterns =  [

]


urlpatterns += router.urls