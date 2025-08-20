from django.shortcuts import render

def home(request):

    return render(request, 'main/home.html',)

def team(request):

    return render(request, 'main/team.html',)

def about(request):

    return render(request, 'main/about.html',)
def practice(request):

    return render(request, 'main/practice.html',)
def work(request):

    return render(request, 'main/work.html',)
