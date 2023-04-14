"""
Django Static settings for {{project_name}} project
"""

# Application Imports
from core.settings.components.common import BASE_DIR


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = "static/"
STATICFILES_DIRS = [
    BASE_DIR / "../public",
]
