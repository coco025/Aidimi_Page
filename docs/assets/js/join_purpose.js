var state = 0;
$("#image_favorite").click(function(){
    
    if(state == 0){
    $("#image_favorite").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABeUlEQVRIS82XwVHDMBBFn+DAMVAB5ALoFjqADtIBSQXQAaEChgowFUAHQAVwc+BCOiAcOYAYkdhjO5a1ksMkunjG+vufdiXt2IoVDbUiLusNfoPeN3Q0PDVVKIXjTZjuw4uvks6MrYmCM6BfMbk3cK3h0b6X6qoLqQWnkCg4bVq1gsTOGxj4dAcw9IIlUF8ZayBJFV7KOIWBgptQY4newFDPq2T1JfAYJsCuxChCMzmEbhaXg+3J/YHnCENxyAYcZSc+B4/hHLgSu0QIi+XOwSmMFFxE+IlDDFxqGJX2+BX6Bu7ELhFCAyfZ/c8zfoftL/iI8BOHbMFOF6YLp/o/7nC2KgO3utBsqvd4T836bEechkz4aaCnZ9f1byy0zHnvfZD5yVTFvXWC7cQyO1i1YzWClwV3QWtLXSxem8yboF5wbOY+qAgcCpdAxWApXAoNAvvgIdBgsAseCo0CV+Ex0GhwBrfP4ueMrI85WmZIcBvtev9JtMnMFfsLyK9nH2kaPosAAAAASUVORK5CYII=");
                              state = 1;
    }else{
        $("#image_favorite").attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAB5ElEQVRIS82WwVnCQBBG3+oBb2gFwkXJSewAKxArECqQDtQK1ArECqQDtQL1FPQiHQg3OWj8NtnEZUmyu+GAXPgIf/43MzsziWBNH7EmLv8b/A7tb6gH8FRWoRA6mzDdgxdbJQszliYCzoCuYTKK4CaAR3ndVWcGkgsOYSjgtCxqAUP5fwQ9m24f+lawAZ2RBBFnF0GHBFQ3jGIdMFG6tkgqFetkkCZ8IeMQegJulelrDTpNmOqQD9ieJ4Ec+Ogi6AeqSiqYP9txEvEuMKtBw4SmSgn/gmv5ewsGZbp54ikzn7SgmXpkGcvO/YFnVaqF6Gwdaun0rIobcJh2fAYewwC4kia6YBWovLcooQwcwoWAcymuwU5R+XwDUT3xqSp5GcDFwhm/QTeCeyU4SufUF2Tq1Zw/mL5ZxnpkwKgFJ6tC5f1jGAHHZiXNccoWh9n+VYLQxzOCu0BbNia4IZI9Gw/+KnBjJ8wiaAdqwSzNsbygn0lVuAGVCSz1TNGu1jeYV+Y50NydUPZ08oa7QnNLrTeRj5GP1gpWZ27N3BfqBLbBq0CdwUVwZZA+Rr2a0Otlz8xO7wffmfcC52Vedda9wQZcbqSB/mbhulorgRW8Ib/1NegK9WouH1MXbeWMXczLNGsD/wJzr7gfcc1Z4AAAAABJRU5ErkJggg==");
       state = 0;
    }
});

document.getElementById("purpose").setAttribute("onclick","window.location.href = 'join_purpose.html';");



