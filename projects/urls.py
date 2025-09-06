
from django.urls import path
from .views import ProjectView, project_detail

urlpatterns = [
    path('projects/', ProjectView, name='project_list'),
    path('projects/<int:pk>/', project_detail, name='project_detail'),
]