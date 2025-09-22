
from django.urls import path
from .views import BookView, booking_detail


urlpatterns = [
    path ('bookings/', BookView, name='bookinglist'),
    path ('bookings/<int:pk>/', booking_detail, name='booking detail')
]

