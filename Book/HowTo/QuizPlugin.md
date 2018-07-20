#How to Use Quiz Plugin

**_Note:_** If you already installed the Quiz plugin, you can start from step 4. Otherwise start from step 1.

1. In book.json file, add `"plugins": [ "quiz" ]`

2. In book.json file, add 
```
"pluginsConfig": {
    "quiz": {
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
}  
```

3. Go to the terminal and type `gitbook install`

4. To start a new quzi, you should use an openning and closing `<quiz></quiz>` tag. For example 
```
<quiz name="Tilte of the quiz">
All the questions go here
</quiz>
```
5. Now that we have open and close quiz tag, we can start adding questions. We have 3 different type of questios
    1. If we want to create True/false question.
    
    **_Note:_** All the questions go inside `<quiz></quiz>` tag.  
    ```
    <question>
        <p> does it support True/False question? </p>
        <answer correct>Ture</answer>
        <answer> False </answer>
        <explanation>If you want to add some explanation to the question</explanation>
    </question>
    ```
    2. If we want to create multiple answer question.
    
    **_Note:_** All the questions go inside `<quiz></quiz>` tag.
    ```
    <question multiple>
        <p>IWT All The Way</p>
        <answer correct>Yep</answer>
        <answer correct>Yea</answer>
        <answer>Wow</answer>
        <explanation>If you want to add some explanation to the question</explanation>
    </question>

    ```
    3. If we want to create multiple drop down question.
    
    **_Note:_** All the questions go inside `<quiz></quiz>` tag.
    ```
    <question>
        <p>This is multiple dropdown quiz, in each dropdown select a correct number
            corresponding to the dropdown's order</p>
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
    <question>
    ```

