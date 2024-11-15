from django.urls import path, include
from . import views


app_name = "cms"
urlpatterns = [
    path("", views.upload, name="cms"),
    path("login/", views.Login_Cms, name="login"),
    path('logout/', views.custom_logout, name='logout'),
    # Images
    path('upload/', views.upload_view, name='upload'),
    path('upload/delete/<str:name>/', views.delete_file_by_name, name='upload-delete'),
    path('upload/post', views.file_upload_view, name='post-upload'),
    path('images/', views.images_view, name='images-view'),
    path('images/delete/<int:id>/', views.delete_file, name='image-delete'),
    path('images/update/<int:id>/', views.update_file, name='image-update'),
    path('images/all/', views.all_images, name="all-images"),
    # FAQ
    path('faq/sort/', views.update_faq_order, name='faq-sort'),
    path('faq/', views.faq_view, name='faq-view'),
    path('faq/update/', views.update_faq, name='faq-update'),
    path('faq/delete/<int:id>/', views.del_faq, name='faq-update'),
    # Blog
    path('blog/', views.blog_view, name='blog-view'),
    path('blog/add/', views.add_blog, name='blog-add'),
    path('blog/create/', views.create_blog, name='blog-create'),
    path('blog/<int:id>/', views.blog_details, name='blog-details'),
    path('blog/<int:id>/getCode/', views.blog_code, name='blog-code'),
    path('blog/<int:id>/delete/', views.delete_blog, name='blog-delete'),
    path('blog/<int:id>/update/', views.update_blog, name='blog-update'),
    # Galery
    path('galerien/', views.galerien, name='galerien'),
    path('galery/images/update/<int:id>/', views.update_galery_image, name='galery-update-img'),
    path('galery/create/', views.create_galery, name='galery-create'),
    path('galery/getImages/', views.get_galery_images, name='galery-get-images'),
    path('galery/delete-img/<int:id>/', views.delete_galery_img, name='delete-galery-img'),
    path('galery/<int:id>/', views.galery_view, name='galery-view'),
    path('galery/<int:id>/upload/', views.upload_galery_img, name='upload-galery-img'),
    path('galery/<int:id>/save/', views.save_galery, name='galery-save'),
    path('galery/<int:id>/delete/', views.delete_galery, name='galery-delete'),
    path('galerien/all/', views.all_galerien, name="all-galerien"),
    # Seiten
    path('seiten/', views.content_view, name='sites'),
    path('seiten/save/', views.saveTextContent, name='save_text_content'),
    path('seiten/hauptseite/', views.site_view_main, name='site_hauptseite'),
    path('seiten/footer/', views.site_view_footer, name='site_footer'),
    path('seiten/hauptseite/Hero/', views.site_view_main_hero, name='site_hauptseite_hero'),
    path('seiten/hauptseite/Leistungen/', views.site_view_main_services, name='site_hauptseite_services'),
    path('seiten/hauptseite/Team/', views.site_view_main_team, name='site_hauptseite_team'),
    path('seiten/hauptseite/Kontakt/', views.site_view_main_contact, name='site_hauptseite_contact'),
    path('seiten/hauptseite/FAQ/', views.site_view_main_faq, name='site_hauptseite_faq'),
    path('seiten/hauptseite/Leistungen/<int:service_id>/', views.site_view_main_service_by_id, name='site_hauptseite_services_detail'),

    # Email
    path('email/request/', views.email_send, name='send-email'),
    
    # Settings
    path('settings/', views.user_settings_view, name='settings-view'),
    path('settings/update/', views.user_settings_update, name='settings-update'),
    
    # Opening Hours
    path('openinghours/', views.opening_hours_view, name='openinghours-view'),
    path('openinghours/update/', views.opening_hours_update, name='openinghours-update'),
    
    # Team Members
    path('team/', views.team_member_list, name='team-list'),
    path('team/create/', views.create_team_member, name='create-team-member'),
    path('team/<int:id>/', views.get_team_member, name='get-team-member'),
    path('team/<int:id>/update/', views.update_team_member, name='update-team-member'),
    path('team/<int:id>/delete/', views.delete_team_member, name='delete-team-member'),
]