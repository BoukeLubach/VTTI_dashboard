from django.db.models import fields
from rest_framework import serializers

from .models import (
    Terminal,
)

# class FilteredListSerializer(serializers.ListSerializer):

    # def to_representation(self, data):
        # data = data.filter(reference_year=202)
        # return super(FilteredListSerializer, self).to_representation(data)

class TerminalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Terminal
        fields = "__all__"

