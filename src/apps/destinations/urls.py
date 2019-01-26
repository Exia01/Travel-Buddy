from django.conf.urls import url
from .views import (
    HomeView,
    AddDestinationFormView,
    DestinationDetailSlugView,
)

urlpatterns = [
    url(r'^dashboard$', HomeView.as_view(), name='home'),
    url(r'^destination/add$', AddDestinationFormView.as_view(), name='add_trip'),
    url(r'^destination/(?P<slug>[\w-]+)/$', DestinationDetailSlugView.as_view(), name='detail'),

]
