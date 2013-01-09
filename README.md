Confirm-jQuery-Plugin
=====================

Confirm is a jQuery plugin which enables inline confirmation of clicks on an element.

## Usage
Setup confirmation via JavaScript:
```html
<form action="/foo/delete/123" method="POST">
  <button class="confirm" type="submit">Delete</button>
</form>
<script>
  $('.confirm').confirm();
</script>
```

You can also use a delegate selector as the only argument:
```javascript
$(document).confirm('.confirm');
```

Or you can specify an options object:
```javascript
$(document).confirm({
  selector: '.confirm',
  onConfirm: function(event) {
    event.preventDefault();
    $(this).text('I was confirmed!');
  } 
});
```

## Options

Options can be passed in via an object as part of the method call.

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>onConfirm</td>
      <td>function</td>
      <td><code>return true;</code></td>
      <td>A callback which will be executed when the element is confirmed. <code>this</code> will be the element which caused the event. The jQuery event object will be passed in as an argument.</td>
    </tr>
    <tr>
      <td>selector</td>
      <td>string</td>
      <td><code>null</code></td>
      <td>A selector string to filter the decendants of the selected elements that trigger the event. Works just like it does in jQuery's <code>.on()</code> method.</td>
    </tr>
    <tr>
      <td>eventNamespace</td>
      <td>string</td>
      <td>'confirm'</td>
      <td>All events bound by the plugin will be given this namespace. For example, a click event will be bound using 'click.confirm' as the event name. Override this if it might conflict with something else you have.</td>
    </tr>
    <tr>
      <td>classNamespace</td>
      <td>string</td>
      <td>'confirm'</td>
      <td>All classes added the plugin will be given this namespace. For example, if the class <code>confirming</code> would be added, it'll be prefixed with the namespace like <code>confirm-confirming</code>. Override this if it might conflict with something else you have.</td>
    </tr>
    <tr>
      <td>confirmingTimeout</td>
      <td>number</td>
      <td>3000</td>
      <td>The duration, in milliseconds, during which the confirmationText will be shown before reverting back to its previous state.</td>
    </tr>
    <tr>
      <td>confirmationText</td>
      <td>string</td>
      <td>'Are you sure?'</td>
      <td>The html in the element being confirmed will be replaced with this string while waiting for confirmation.</td>
    </tr>
    <tr>
      <td>confirmingClasses</td>
      <td>string</td>
      <td>'btn-danger'</td>
      <td>A space seperated list of classes which will be added to the element while it is waiting to be confirmed. The classes will be removed after confirmation.</td>
    </tr>
    <tr>
      <td>rearm</td>
      <td>boolean</td>
      <td><code>false</code></td>
      <td>When true, the element will be allowed to be continue going through the confirming => confirmed cycle with subsequent clicks. When false, subsequent clicks are ignored.</td>
    </tr>
  </tbody>
</table>
