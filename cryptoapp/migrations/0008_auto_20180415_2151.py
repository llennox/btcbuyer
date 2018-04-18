# Generated by Django 2.0.4 on 2018-04-15 21:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cryptoapp', '0007_order_created'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='order_status',
            field=models.CharField(choices=[('UNPAID', 'unpaid'), ('PAID', 'paid'), ('COMPLETED', 'completed')], max_length=255),
        ),
    ]
