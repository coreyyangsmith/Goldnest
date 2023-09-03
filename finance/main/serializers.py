from rest_framework import serializers
from .models import Entry

class EntrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Entry 
        fields = ('pk', 'name', 'income', 'expenses'
                  'notes', 'date', 'routing', 'main_category',
                  'sub_category', 'created_at', 'updated_at')