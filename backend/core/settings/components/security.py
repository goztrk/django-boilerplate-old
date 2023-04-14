"""
Django Security settings for {{project_name}} project
"""

# Third Party (PyPI) Imports
from decouple import config


SECRET_KEY = config("SECRET_KEY")

ALLOWED_HOSTS = [config("DOMAIN")]

CSRF_TRUSTED_ORIGINS = [
    config("DOMAIN_URL"),
]

AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]
