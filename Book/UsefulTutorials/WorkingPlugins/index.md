#Working Plugins 
## Every plugin here has been tested, and made sure it is working 100%

# Testing Panel Plugin
{% panel style="info", title="Info " %}
**_Note:_** Go to Testing Zone markdown to see how to use the plugin
[Click Here](../TestingZone/index.md)

**_Note:_** To see more of the reesult of the testing go the Testing Zone
[Click Here](../TestingZone/index.md)
{% endpanel %}

{% panel style="success", title="The result of testing the panel plugin." %} 
![The answer is YES](images/success.jpg)
**_Result_** The plugin is workin %100.
{% endpanel %}

# Testing gitbook-plugin-quiz
{% panel style="info", title="Info" %}
**_Note:_** Go to Testing Zone markdown to see how to use the plugin
[Click Here](../TestingZone/index.md)

**_Note:_** To see more of the reesult of the testing go the Testing Zone
[Click Here](../TestingZone/index.md)
{% endpanel %}
<quiz name= "Quiz time, This is the title of the quiz" >
    <question multiple>
        <p>What does IWT use?</p>
        <answer correct> Markdown</answer>
        <answer correct> gitbook</answer>
        <answer> CSS </answer>
        <explanation>The IWT uses Markdown language and gitbook</explanation>
    </question>
</quiz>

{% panel style="success", title="The result of testing the gitbook-plugin-quiz." %} 
![The answer is YES](images/success.jpg)
**_Result_**: The plugin is workin %100.
{% endpanel %}

# Testing Click To Reveal Plugin
{% panel style= "info", title= "book.json"%}
**_Note:_** I added `"plugins":["click-reveal"]` to book.json
{% endpanel %}

{% panel style= "warning", title= "Partially Working"%}
**_Note:_** Click to Reveal Plugin is only useful to hide text and code. It does not hide any images, links, or videos. 
{% endpanel %}

**_Note:_** I am hidding a text 
{% reveal %}
    IWT will be one of the best thing in world. Just watch :)
{% endreveal %}

**_Note:_** Click to reveal with custom text
{% reveal text="Click to see the image" %}
    ![success image](images/success.jpg)
    <img src="images/success.jpg" alt="Smiley face">
{% endreveal %}

# Testing Interactive exercises in a gitbook

{% panel style= "info", title= "book.json"%}
**_Note:_** I added `"plugins":["exercises"]` to book.json
{% endpanel %}

{% panel style= "warning", title= "HTML Tags"%}
**_Note:_**Interactive exercises in a gitbook is not very usefull for testing html tags.
{% endpanel %}

{% exercise %}
Define a variable `x` equal to 10.

{% initial %}
var x =

{% solution %}
var x = 10 

{% validation %}
assert(x == 10) 

{% endexercise %}