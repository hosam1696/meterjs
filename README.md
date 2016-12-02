# meterjs
meterjs is simple plugin places on top of your page to show the user how much percentage he scrolls

<code>
    <div id="meter"><div class="meter"></div></div>
</code>


```js
$(function() {

    $(window).on('scroll', function() {
        let topScroll = $(window).scrollTop();

        $('#meter').meter();
    });

});

