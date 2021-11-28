from django.urls import path, include

from .apiviews import (
    TerminalViewSet, 

)
from rest_framework.routers import DefaultRouter

app_name = 'plants'

router = DefaultRouter()
router.register('api/terminals', TerminalViewSet, basename='terminals')


urlpatterns =  [

]


urlpatterns += router.urls