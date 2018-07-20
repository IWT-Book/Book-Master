#How to Use Panel Plugin

**_Note:_** If you already installed the panel plugin, you can start from step 3. Otherwise start from step 1.

1. In book.json file, add `"plugins": [ "panel" ]`

2. Go to the terminal and type `gitbook install`

3. If you want to have a panel with no title, you can follow the following code, 
{% panel %}
![panel without title](images/Panel-with-no-title.PNG)
{% endpanel %}

4. If you want to have a panel with title, you can follow the following code,
 {% panel title="This is a panel with title" %}
 ![panel with title and no style](images/Panel-with-title.PNG)
 {% endpanel %}

5. If you want to have a panel with info style, follow the following code,
 {% panel style="info", title="This is an info panel" %}
 ![panel with title and info style](images/Panel-with-info.PNG)
 {% endpanel %}

6. If you want to have a panel with success style, follow the following code,
{% panel style="success", title="This is a success panel" %}
![panel with title and success style](images/Panel-with-success.PNG)
{% endpanel %}

7. If you want to have a panel with warning style, follow the following code,
{% panel style="warning", title="This is a warning panel" %}
![panel with title and warning style](images/Panel-with-warning.PNG)
{% endpanel %}

8. If you want to have a panel with danger style, follow the following code,
 {% panel style="danger", title="This is a danger panel" %}
 ![panel with title and danger style](images/Panel-with-danger.PNG)
 {% endpanel %}

