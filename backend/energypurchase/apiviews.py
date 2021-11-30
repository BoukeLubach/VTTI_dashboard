
from django.db.models.query import QuerySet

from .models import Purchased_utility
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, generics
from rest_framework.response import Response
from django.db.models import Sum
from django.db.models import Q
from rest_framework.pagination import PageNumberPagination

from .serializers import (
    Purchased_utilitySerializer, 
)

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 1000
    page_size_query_param = 'page_size'
    max_page_size = 10000


class Purchased_utilityViewSet(viewsets.ModelViewSet):
    serializer_class = Purchased_utilitySerializer
    queryset = Purchased_utility.objects.all()
    pagination_class = LargeResultsSetPagination
    