# meterjs
meterjs is simple plugin places on top of your page to show the user how much percentage he scrolls
*
```
for `live demo` on github <a href="http://codepen.io/hosamsam/details/WodLXe" traget="_blank">demo</a> 

```js
$(function() {

    $(window).on('scroll', function() {
        let topScroll = $(window).scrollTop();

        $('#meter').meter();
    });

});

