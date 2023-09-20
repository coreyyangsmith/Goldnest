import django
django.setup()

from django.contrib.auth.models import User


from faker import Faker

'''
load_users.py
Python script that uses fake data to generate a number of fake users.

Args:
    None

Return:
    Populates Django DB 'User' model
'''

NUMBER_TO_GENERATE = 5

def run():

    # Generate Default Admin User
    admin_user = "admin"
    admin_password = "pass"

    admin_user = User.objects.get_or_create(username = admin_user,
                                is_staff=True,
                                is_superuser=True)[0]
    admin_user.set_password(admin_password)
    admin_user.save()

    # Generate Known (non-admin) User
    test_user = "coreyyangsmith"
    test_email = "coreyyangsmith@ucalgary.ca"
    test_password = "pass"

    test_user = User.objects.get_or_create(username = test_user,
                                            email = test_email,
                                            is_staff=True,
                                            is_superuser=True)[0]
    test_user.set_password(test_password);
    test_user.save()

    # Generate Random (blank) Users
    faker = Faker()
    for iter in range(NUMBER_TO_GENERATE):
        fake_name = faker.name().split()
        fake_first_name = fake_name[0]
        fake_last_name = fake_name[1]
        fake_username = fake_first_name + "-" + fake_last_name
        fake_email = faker.email()

        user = User.objects.get_or_create(username = fake_username,
                                          first_name = fake_first_name,
                                            last_name = fake_last_name,
                                            email = fake_email)[0]
    print("'User' loaded successfully.")