from django.urls import path
from .views import UserAPIView

urlpatterns = [

    path('generic/user/', UserAPIView.as_view()),
    path('generic/user/<int:id>/', UserAPIView.as_view()),

 
]
 