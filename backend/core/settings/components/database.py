"""
Django Database settings for {{project_name}} project
"""
# Third Party (PyPI) Imports
from decouple import config
from dj_database_url import parse as db_url


DATABASES = {
    "default": config("DATABASE_URL", cast=db_url),
}

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
