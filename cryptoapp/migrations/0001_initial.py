# Generated by Django 2.0.4 on 2018-04-19 00:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('user_uuid', models.UUIDField(blank=True)),
                ('name', models.CharField(default='', max_length=255)),
                ('address', models.CharField(default='', max_length=255)),
                ('apartment', models.CharField(default='', max_length=255)),
                ('country', models.CharField(default='', max_length=255)),
                ('zip_code', models.CharField(default='', max_length=255)),
                ('is_default', models.BooleanField(default=False)),
                ('additional_info', models.CharField(default='', max_length=255)),
                ('phone_number', models.CharField(default='', max_length=20)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('order_uuid', models.UUIDField()),
                ('by_user', models.CharField(default='admin', max_length=255)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('content', models.CharField(default='', max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('user_uuid', models.UUIDField()),
                ('address_uuid', models.UUIDField()),
                ('shipped', models.BooleanField(default=False)),
                ('url', models.TextField()),
                ('price', models.CharField(default='', max_length=10)),
                ('paid_for', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('screenshot_uuid', models.CharField(default='', max_length=255)),
                ('priority', models.CharField(choices=[('HIGH', 'high'), ('MEDIUM', 'medium'), ('LOW', 'low')], max_length=255)),
                ('order_status', models.CharField(choices=[('UNPAID', 'unpaid'), ('PAID', 'paid'), ('COMPLETED', 'completed')], max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='PaymentAddress',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coinbase_uuid', models.UUIDField()),
                ('order_uuid', models.UUIDField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('address', models.CharField(default='', max_length=255)),
                ('address_type', models.CharField(default='', max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('phone_number', models.CharField(default='', max_length=255)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('email_validated', models.BooleanField(default=False)),
                ('is_guest', models.BooleanField(default=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SiteName',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('site_name', models.CharField(default='', max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Validation_token',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(default='', max_length=255)),
                ('expires', models.DateTimeField()),
                ('user_uuid', models.UUIDField()),
            ],
        ),
    ]
