from django.urls import path
from . import views

app_name = "spaceView"
urlpatterns=[
    path("home/", views.index, name="index"),
    path("view/", views.view, name="view"),
]