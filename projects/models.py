from django.db import models

# Create your models here.


class Projects (models.Model):
    project_name = models.TextField(max_length=100)
    project_description = models.TextField()
    project_timestamp =  models.DateTimeField(auto_now_add=True)
    project_image = models.ImageField()



def __str_(self):
    return f"{self.project_name} - {self.project_description}"