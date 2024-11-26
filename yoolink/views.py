from django.shortcuts import render, redirect, get_object_or_404
from yoolink.ycms.models import FAQ, Message, TeamMember, TextContent, fileentry, Galerie, OpeningHours, UserSettings, Product


def get_opening_hours():
    opening_hours = {}
    days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
    for day in days:
        if OpeningHours.objects.filter(day=day).exists():
            opening_hours[f"opening_{day.lower()}"] = OpeningHours.objects.get(day=day)
        else:
            opening_hours[f"opening_{day.lower()}"] = None
            
    user_settings = UserSettings.objects.filter(user__is_staff=False)
    if user_settings.exists():
        user_settings = user_settings.first()
        opening_hours["owner_data"] = user_settings
        
    # Muss überall sein
    if TextContent.objects.filter(name="footer").exists():
        opening_hours["footerText"] = TextContent.objects.get(name='footer')
        
    return opening_hours

def load_index(request):
    faq = FAQ.objects.all()

    context = {
        'FAQ': faq,
    }

    # Text Contents
    if TextContent.objects.filter(name="main_hero").exists():
        context["heroText"] = TextContent.objects.get(name='main_hero')

    if TextContent.objects.filter(name="main_service").exists():
        context["serviceText"] = TextContent.objects.get(name='main_service')

    # Services
    services = []
    for i in range(1, 8):
        service_data = {
            'text': TextContent.objects.filter(name=f"main_service_{i}").first(),
            'prev_image': fileentry.objects.filter(place=f"main_service_{i}_prev").first(),
            'after_image': fileentry.objects.filter(place=f"main_service_{i}_after").first(),
            'icon': fileentry.objects.filter(place=f"main_service_{i}_icon").first(),
        }
        services.append(service_data)
    
    context['services'] = services
    

    # Services END

    if TextContent.objects.filter(name="main_team").exists():
        context["teamText"] = TextContent.objects.get(name='main_team')

    if TextContent.objects.filter(name="main_contact").exists():
        context["contactText"] = TextContent.objects.get(name='main_contact')

    if TextContent.objects.filter(name="main_faq").exists():
        context["faqText"] = TextContent.objects.get(name='main_faq')

    # Galery
    if Galerie.objects.filter(place='main_praxis').exists():
        praxisGalerie = Galerie.objects.get(place='main_praxis')
        context["teamGalery"] = praxisGalerie.images.all()
        context["praxisTitle"] = praxisGalerie.title
        context["praxisBeschreibung"] = praxisGalerie.description

    # Images
    if fileentry.objects.filter(place='main_hero').exists():
        context["heroImage"] = fileentry.objects.get(place='main_hero')
    
    # Mitarbeiter
    active_team_members = TeamMember.objects.filter(active=True)
    context['teamMembers'] = active_team_members

    form = ContactForm()
    context['form'] = form
    context["service_range"] = range(1, 8)

    context.update(get_opening_hours())

    return render(request, 'pages/index.html', context=context)

from .forms import ContactForm
def kontaktform(request):
    success = False
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Hier Nachricht verarbeiten und speichern
            Message.objects.create(
                name=form.cleaned_data['name'],
                email=form.cleaned_data['email'],
                title=form.cleaned_data['title'],
                message=form.cleaned_data['message'],
            )
            return render(request, 'pages/kontakt.html', {'success': True})
    else:
        form = ContactForm()

    return render(request, 'pages/kontakt.html', {'form': form, 'success': success})

def shop(request):
   context={"products": Product.objects.filter(is_active=True)}
   context.update(get_opening_hours())
   return render(request, 'pages/shop.html', context)

def detail(request, product_id, slug):
    product = get_object_or_404(Product, id=product_id, slug=slug)
    last_url = request.META.get('HTTP_REFERER')
    if not product.is_active:
        return render(request, "pages/errors/error.html", {
            "error": "Dieses Produkt ist nicht mehr verfügbar",
            "saveLink": last_url if last_url else '/'
        })
    context={"product": product}
    context.update(get_opening_hours())
    return render(request, 'pages/detail.html', context)



def impressum(request):
    context = {}

    user_settings = UserSettings.objects.filter(user__is_staff=False)
    if user_settings.exists():
        owner_data = user_settings.first()
        context = {
            'owner_data': owner_data,
        }

    return render(request, 'pages/impressum.html', context)

def datenschutz(request):
    context = {}

    user_settings = UserSettings.objects.filter(user__is_staff=False)
    if user_settings.exists():
        owner_data = user_settings.first()
        context = {
            'owner_data': owner_data,
        }
    return render(request, 'pages/datenschutz.html', context)
