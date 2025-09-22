from django.contrib import admin
from projects.models import Project
from bookings.models import Bookings

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("project_name", "created_at")  # show these columns
    search_fields = ("project_name", "project_description")
    list_filter = ("created_at",)

@admin.register(Bookings)
class BookingAdmin(admin.ModelAdmin):
    list_display = ("name", "Phone_number", "date_submitted")  
    search_fields = ("name", "Phone_number", "message")
    list_filter = ("date_submitted",)
    readonly_fields = ("date_submitted","name","Phone_number") 