from django.shortcuts import render

def index(request):
    return render(request, 'spaceview/index.html', {})

def view(request):
    return render(request, 'spaceview/view.html', {})