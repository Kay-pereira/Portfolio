from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Bookings
from .Serializers import BookingsSerializers



# Create your views here.

@api_view (['POST', 'GET'])

def BookView (request):
    if request.method == 'GET':
        bookings = Bookings.objects.all().order_by('-date_submitted')
        serializers = BookingsSerializers(bookings, many=True)
        return Response (serializers.data)
    
    elif request.method == 'POST':
        serializers = BookingsSerializers(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response (serializers.data, status=status.HTTP_201_CREATED)
        return Response (serializers.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view (['GET', 'DELETE', 'PUT'])
def booking_detail (request, pk):
    try:
        booking =  Bookings.objects.get(pk=pk)
    except Bookings.DoesNotExist:
        return Response({'error': 'not found'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = BookingsSerializers(booking)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = BookingsSerializers(booking, data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response (serializer.data)
        return Response (serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        booking.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

