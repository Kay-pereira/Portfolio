from django.db import models

# Create your models here.


class Bookings (models.Model):
    firstname = models.TextField(max_length=100)
    email = models.EmailField()
    Phone_number = models.CharField(max_length=10)
    prefered_date = models.DateField(auto_now_add=True)
    date_submitted = models.DateTimeField(auto_now_add=True)
    message = models.TextField()




def __str__(self):
    return f"Booking from {self.firstname} - {self.Phone_number}"

