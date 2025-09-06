
from .models import Bookings
from rest_framework import serializers



class BookingsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Bookings
        fields = '__all__'

