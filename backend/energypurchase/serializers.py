from django.db.models import fields
from rest_framework import serializers



from .models import (
    Purchased_utility
)

# class FilteredListSerializer(serializers.ListSerializer):

    # def to_representation(self, data):
        # data = data.filter(reference_year=202)
        # return super(FilteredListSerializer, self).to_representation(data)




class Purchased_utilitySerializer(serializers.ModelSerializer):

    def to_representation(self, instance):
        rep = super(Purchased_utilitySerializer, self).to_representation(instance)
        rep['terminalname'] = instance.terminal.name
        return rep

        
    class Meta:
        model = Purchased_utility
        fields = "__all__"

