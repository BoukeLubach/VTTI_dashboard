from django.urls import path, include

from .views import ProjectViewSet
from rest_framework.routers import DefaultRouter

app_name = 'projects'

router = DefaultRouter()
router.register('api/projects', ProjectViewSet, basename='projects')


urlpatterns =  [

]


urlpatterns += router.urls