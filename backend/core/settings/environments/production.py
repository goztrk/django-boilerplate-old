"""
Django Settings Environment override for {{project_name}} project
"""

# Application Imports
from core.settings.components.database import DATABASES


DEBUG = False
DJANGO_VITE_DEV_MODE = False

DATABASES["default"]["ATOMIC_REQUESTS"] = True
