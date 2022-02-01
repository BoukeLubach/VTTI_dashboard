
from django.db.models.query import QuerySet

from .models import Terminal, TerminalEquipment
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, generics, permissions
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from .serializers import (
    TerminalSerializer, 
    TerminalEquipmentSerializer
)

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 1000
    page_size_query_param = 'page_size'
    max_page_size = 10000


class TerminalViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = TerminalSerializer
    queryset = Terminal.objects.all()
    pagination_class = LargeResultsSetPagination


class TerminalEquipmentViewSet(viewsets.ModelViewSet):
    serializer_class = TerminalEquipmentSerializer
    queryset = TerminalEquipment.objects.all()
    pagination_class = LargeResultsSetPagination
    