#Testing Plugins (Testing Zone)

## Testing Panel Plugin
### Note: I added "panel" to book.json file under the plugins array on 7/16/2018

{% panel %}
Panel without title.
This just a box. 
**_Can we use italic and bold?_** The answer is YES.
**_Can we use links?_** [The answer is YES](www.google.com)
**_Can we use images?_**![The answer is YES](images/beer.jpeg) 
{% endpanel %}

{% panel title="This is a panel with title" %}
Panel with title and default style.
**_Note:_** The title cannot be bold and or italic
**_Can we use italic and bold?_** The answer is YES.
**_Can we use links?_** [The answer is YES.](www.google.com)
**_Can we use images?_** ![The answer is YES.](images/freeBeer.jpg)
{% endpanel %}

{% panel style="danger", title="This is a danger style panel" %}
Panel with title and danger style.
**_Note:_** The title cannot be bold and or italic
**_Can we use italic and bold?_** The answer is YES.
**_Can we use links?_** [The answer is YES](www.google.com)
**_Can we use images?_** ![The answer is YES](images/danger.jpg)
{% endpanel %}

{% panel style="info", title="This is an info style panel" %}
Panel with title and info style.
**_Note:_** The title cannot be bold and or italic
**_Can we use italic and bold?_** The answer is YES.
**_Can we use links?_** [The answer is YES](www.google.com)
**_Can we use images?_** ![The answer is YES](images/info.gif)
{% endpanel %}

{% panel style="success", title="This is a success style panel" %}
Panel with title and success style.
**_Note:_** The title cannot be bold and or italic
**_Can we use italic and bold?_** The answer is YES.
**_Can we use links?_** [The answer is YES](www.google.com)
**_Can we use images?_** ![The answer is YES](images/success.jpg)
{% endpanel %}

{% panel style="warning", title="This is a warning style panel" %}
Panel with title and warning style.
**_Note:_** The title cannot be bold and or italic
**_Can we use italic and bold?_** The answer is YES.
**_Can we use links?_** [The answer is YES](www.google.com)
**_Can we use images?_** ![The answer is YES](images/warning.jpg)
{% endpanel %}

{% panel style="success", title="The result of testing the panel plugin." %} 
![The answer is YES](images/success.jpg)
##The result: the plugin is workin %100.
{% endpanel %}

# Testing Interactive quizzes in a gitbook
### Note: I added "quizzes" and "exercises" to book.json file under the plugins array on 7/16/2018

{% panel style= "info", title= "Special Syntax" %}
Quizzes need to start and finish with a separation bar (--- or *****).
{% endpanel %}

---

Here's a quiz about Gitbook

|     Question     | Good | Bad |
| ---------------- | ---- | --- |
| What is Gitbook? | (x)  | ( ) |

> Gitbook is good

What does Gitbook support?
- [x] Table-based questions with radio buttons
- [x] Table-based questions with checkboxes
- [ ] Telepathy
- [x] List-based questions with checkboxes
- [x] List-based questions with radio buttons
- [ ] Moon-on-a-stick

> Gitbook supports table and list based quiz questions using either radio buttons or checkboxes.
>
> Gitbook is not telepathic and does not give you the moon on a stick.

---

{% panel style= "info", title= "On Hold" %}
Interactive quizzes in a gitbook plugin is on hold because I was able to see some better plugin. 
{% endpanel %}

# Testing gitbook-plugin-quiz
{% panel style= "info", title= "Added to book.json" %}
    To test gitbook-plugin-quiz, I added the following to book.json.

    Under the "plugins", I added "quiz".
    Under the "pluginsConfig", I added

    > "quiz": {
            "labels": {
                "check"             : "Check my answers",
                "showExplanation"   : "Explain", 
                "showCorrect"       : "Show all",   
                "explanationHeader" : "Explanation"
            },
            "text": {
                "noChosen"    : "Choose at least one answer",  
                "incomplete"  : "Some correct answers are missing" 
            },
            "buttons": {
                "showCorrect"       : true, 
                "showExplanation"   : true 
            }
    }  
{% endpanel %} 

<quiz name= "Quiz time, This is the title of the quiz" >
    <question multiple>
        <p>What does IWT use?</p>
        <answer correct> Markdown</answer>
        <answer correct> gitbook</answer>
        <answer> CSS </answer>
        <explanation>The IWT uses Markdown language and gitbook</explanation>
    </question>
    <question>
        <p> does it support True/False question? </p>
        <answer correct>Ture</answer>
        <answer> False </answer>
    </question>
    <question>
        <p> ![information picture](images/info.gif)
        does it support picture question?</p>
        <answer>Ture</answer>
        <answer false> False </answer>
    </question>
    <question>
        <p>This is multiple dropdown quiz, in each dropdown select a correct number corresponding to the dropdown's order</p>
        <answer>
            <option correct>First</option>
            <option>Second</option>
            <option>Third</option>
            <option>Fourth</option>
        </answer>
        <answer>
            <option>First</option>
            <option correct>Second</option>
            <option>Third</option>
            <option>Fourth</option>
        </answer>
        <answer>
            <option>First</option>
            <option>Second</option>
            <option correct>Third</option>
            <option>Fourth</option>
        </answer>
        <answer>
            <option>First</option>
            <option>Second</option>
            <option>Third</option>
            <option>Fourth</option>
        </answer>
    </question>
</quiz>