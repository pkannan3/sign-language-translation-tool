from django.urls import path
from .views import user_input


urlpatterns = [
    path("", user_input, name="user_input"),
]
