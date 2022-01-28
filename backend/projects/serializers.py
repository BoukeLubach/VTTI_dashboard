from django.db.models import fields
from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):

    def to_representation(self, instance):
        rep = super(ProjectSerializer, self).to_representation(instance)
        rep['terminalname'] = instance.terminal.name
        rep['utilityname'] = instance.Purchase_utility.name
        return rep

        
    class Meta:
        model = Project
        fields = "__all__"
