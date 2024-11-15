# myapp/middleware.py
from django.http import HttpResponsePermanentRedirect


class WwwRedirectMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        host = request.get_host().partition(":")[0]
        if host == "www.zahnarzt-dr-holmer.de":
            return HttpResponsePermanentRedirect("https://zahnarzt-dr-holmer.de" + request.path)
        else:
            return self.get_response(request)