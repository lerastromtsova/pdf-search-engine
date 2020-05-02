from django.core.management.base import BaseCommand, CommandError
from utils import storage_upload


class Command(BaseCommand):
    help = 'upload pdf to s3'  
    
    def add_arguments(self, parser):
        parser.add_argument('-f')


    def handle(self, *args, **options):
        print(storage_upload.file2url(options['f'], f'prefix_{options["f"]}'))
