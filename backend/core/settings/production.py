from .base import *  # noqa # pylint: disable=W0401, W0614
from .base import DATABASES

DEBUG = False

DATABASES["default"]["ATOMIC_REQUESTS"] = True
