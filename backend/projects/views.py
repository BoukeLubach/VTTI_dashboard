from django.db.models import query
from django.shortcuts import render
from rest_framework import viewsets
# Create your views here.
from .serializers import ProjectSerializer
from .models import Project


class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()