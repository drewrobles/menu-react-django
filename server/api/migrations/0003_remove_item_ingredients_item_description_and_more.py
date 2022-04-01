# Generated by Django 4.0.2 on 2022-04-01 02:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_order_ordered_items_remove_ordereditem_extras_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='ingredients',
        ),
        migrations.AddField(
            model_name='item',
            name='description',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='Ingredient',
        ),
    ]