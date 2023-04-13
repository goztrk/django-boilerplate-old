#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
# Python Standard Library
import os
import sys

# Third Party (PyPI) Imports
from decouple import config

# isort: off


def main():
    """Run administrative tasks."""
    settings_module = config("DJANGO_SETTINGS_MODULE", default=None)

    if sys.argv[1] == "test":
        if settings_module:
            print(
                "Ignoring config('DJANGO_SETTINGS_MODULE') because it's test. "
                "Using 'core.settings.test'"
            )
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings.test")
    else:
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", settings_module)
    try:
        from django.core.management import execute_from_command_line  # pylint: disable=C0415
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
