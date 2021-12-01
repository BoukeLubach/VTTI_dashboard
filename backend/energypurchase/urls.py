from django.urls import path, include

from .apiviews import Purchased_utilityViewSet
from rest_framework.routers import DefaultRouter

app_name = 'energypurchase'

router = DefaultRouter()
router.register('api/purchasedutilities', Purchased_utilityViewSet, basename='purchased_utility')


urlpatterns =  [

]


urlpatterns += router.urls