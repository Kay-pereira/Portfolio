from django.db import models

# Create your models here.


class Bookings (models.Model):
    name = models.TextField(max_length=100)
    Phone_number = models.CharField(max_length=15)  # Increased max_length for international numbers
    prefered_date = models.DateField(auto_now_add=True)
    date_submitted = models.DateTimeField(auto_now_add=True)
    message = models.TextField()




def __str__(self):
    return f"Booking from {self.firstname} - {self.Phone_number}"

