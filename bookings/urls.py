
from django.urls import path
from .views import BookView, booking_detail


urlpatterns = [
    path ('booking/', BookView, name='bookinglist'),
    path ('booking/<int:pk>/', booking_detail, name='booking detail')
]

