
from django.db.models.query import QuerySet

from .models import Purchased_utility
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, generics
from rest_framework.response import Response
from django.db.models import Sum
from django.db.models import Q
from rest_framework.pagination import PageNumberPagination
import django_filters 
from plants.models import Terminal
from plants.serializers import TerminalSerializer
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import (
    Purchased_utilitySerializer, 
)

class TerminalFilter(django_filters.FilterSet):
    terminal = django_filters.ModelChoiceFilter(field_name="terminal", queryset=Terminal.objects.all())

    class Meta:
        model = Purchased_utility
        fields = ('terminal',)

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 1000
    page_size_query_param = 'page_size'
    max_page_size = 10000


class Purchased_utilityViewSet(viewsets.ModelViewSet):
    terminal = TerminalSerializer
    serializer_class = Purchased_utilitySerializer
    queryset = Purchased_utility.objects.all()
    pagination_class = LargeResultsSetPagination
    filter_backends = [DjangoFilterBackend]
    filter_class  = TerminalFilter
    # filter_fields = ('make__slug',)