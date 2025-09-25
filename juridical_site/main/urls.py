from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.home, name='home1'),
    path('home', views.home, name='home'),
    path('team', views.team, name='team'),
    path('practice', views.practice, name='practice'),
    path('work', views.work, name='work'),
    path('about', views.about, name='about'),
    path('worker/<name>', views.worker, name='worker'),
]