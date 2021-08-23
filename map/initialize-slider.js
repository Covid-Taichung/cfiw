//if I make this one big function
        //and then call if after the footprint function
        //and the map function
        //then... it will wait until footprint data is in
        //and use it...?
            //I think I can add a new sliderDatesArray
            //and in that push all unique date values
            //so I'd get a new array, with hopefully one index
            //for each date value. let's try..
        let sliderBar;
        let sliderHandles = [];
        let sliderFrom;
        let sliderTo;
        let sliderTags;

        // I need to split up the dates in the dates array
        // and change them to word form
        // it will be easiest from the sliderDatesArray
        // don't mutate your data
        // use: 
        // footprintData[3].date.split('-');
        // maybe you can remember the year and dash from the strings first.
        // so take out "2021-" and you're only left with the month and day
        // "05-08"
        // this can be turned into an array
        // ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        // newDatesArray = sliderDatesArray.map(element => element.replace('2021-',''));
        // let newDatesArraySplit = newDatesArray.map(element => element.split('-'));

        function initializeSlider() {

            let initalizer = 0;

            var $range = $(".js-range-slider"),
            $inputFrom = $(".js-input-from"),
            $inputTo = $(".js-input-to"),
            instance,
            min = 0,
            max = sliderDatesArray.length-1,
            from = 0,
            to = 0;

            console.log(min);
            console.log(max);
            console.log(sliderDatesArray);

            $range.ionRangeSlider({
                skin: "round",
                type: "double",
                min: min,
                max: max,
                from: sliderDatesArray.length-3,
                to: sliderDatesArray.length-1,
                //from: my_from,
                //to: my_to,
                values: sliderDatesValues,
                onStart: updateInputs,
                onChange: updateInputs,
                hide_min_max: true
            });

            instance = $range.data("ionRangeSlider");

            function updateInputs (data) {
                from = data.from;
                to = data.to;
                $inputFrom.prop("value", from);
                $inputTo.prop("value", to);
                //console.log(`The oldest should should be from: ${from}`)
                //console.log(`${sliderDatesArray[from]}`)
                showSliderMarkers(from, to)
    
            }
            //function to match slider FROM/MIN with user input
            $inputFrom.on("input", function () {
                var val = $(this).prop("value");
                
                // validate
                if (val < min) {
                    val = min;
                } else if (val > to) {
                    val = to;
                }
                
                instance.update({
                    from: val
                });
            });

            //function to match slider TO/MAX with user input
            $inputTo.on("input", function () {
                var val = $(this).prop("value");
                
                // validate
                if (val < from) {
                    val = from;
                } else if (val > max) {
                    val = max;
                }
                
                instance.update({
                    to: val
                });
            });

            sliderBar = document.querySelector('.irs-bar')
            sliderBar.style.backgroundColor = "#ff4081";

            sliderHandles = document.querySelectorAll('.irs-handle');
            sliderHandles.forEach(handle => {handle.style.border = "5px solid #ff4081"});
            
            sliderFrom = document.querySelector('.irs-from'); 
            sliderFrom.style.backgroundColor = "#ff4081"; 

            sliderTo = document.querySelector('.irs-to'); 
            sliderTo.style.backgroundColor = "#ff4081"; 

            sliderTags = document.querySelector('.irs-single'); 
            sliderTags.style.backgroundColor = "#ff4081";  

        }   
        