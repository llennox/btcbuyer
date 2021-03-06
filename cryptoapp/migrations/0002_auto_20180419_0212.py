# Generated by Django 2.0.4 on 2018-04-19 02:12

from django.db import migrations, models
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('cryptoapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='paymentaddress',
            old_name='address',
            new_name='btc',
        ),
        migrations.RemoveField(
            model_name='paymentaddress',
            name='coinbase_uuid',
        ),
        migrations.RemoveField(
            model_name='paymentaddress',
            name='id',
        ),
        migrations.AddField(
            model_name='paymentaddress',
            name='cash',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='paymentaddress',
            name='charge_id',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='paymentaddress',
            name='eth',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='paymentaddress',
            name='expires',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='paymentaddress',
            name='ltc',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='paymentaddress',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='paymentaddress',
            name='created',
            field=models.DateTimeField(),
        ),
    ]
