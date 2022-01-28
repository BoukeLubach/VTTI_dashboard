from rest_framework import serializers


from .models import (
    Terminal,
    TerminalEquipment
)

# class FilteredListSerializer(serializers.ListSerializer):

    # def to_representation(self, data):
        # data = data.filter(reference_year=202)
        # return super(FilteredListSerializer, self).to_representation(data)

class TerminalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Terminal
        fields = "__all__"

class TerminalEquipmentSerializer(serializers.ModelSerializer):

    def to_representation(self, instance):
        rep = super(TerminalEquipmentSerializer, self).to_representation(instance)
        rep['terminalname'] = instance.terminal.name
        return rep

    class Meta:
        model = TerminalEquipment
        fields = "__all__"