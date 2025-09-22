from rest_framework import serializers
from .models import Project

class ProjectsSerializer(serializers.ModelSerializer):
    project_image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = "__all__"

    def get_project_image(self, obj):
        request = self.context.get("request")
        if obj.project_image and request:
            # Use the underlying Django HttpRequest
            return request._request.build_absolute_uri(obj.project_image.url)
        return None
