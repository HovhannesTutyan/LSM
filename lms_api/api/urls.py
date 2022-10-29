from django.urls import path
from .views import TeacherList, TeacherDetails

urlpatterns = [
    path('teacher/', TeacherList.as_view()),
    path('teacher/<int:pk>/', TeacherDetails.as_view())
]
