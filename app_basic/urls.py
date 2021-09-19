from django.urls import path
from .views import UserAPIView,UserLoginView

urlpatterns = [

    path('generic/user/', UserAPIView.as_view()),
    path('generic/user/<int:id>/', UserAPIView.as_view()),
    path('login', UserLoginView.as_view()),

 
]
 