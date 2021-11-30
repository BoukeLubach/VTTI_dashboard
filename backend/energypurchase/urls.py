from django.urls import path, include

# from .apiviews import 
from rest_framework.routers import DefaultRouter

app_name = 'energypurchase'

router = DefaultRouter()
# router.register('api/terminals', TerminalViewSet, basename='terminals')


urlpatterns =  [

]


urlpatterns += router.urls