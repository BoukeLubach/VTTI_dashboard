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
   

    class Meta:
        model = Purchased_utility
        fields = "__all__"

