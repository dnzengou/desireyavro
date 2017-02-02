var myCircle = Circles.create(
            {
                id:         'circles-1',
                radius:     60,
                value:      7,
                maxValue:   100,
                width:      10,
                text:       function(value){return value + '%';},
                colors:     ['#FFF', '#FFA500'],
                duration:   400,
                wrpClass:   'circles-wrp',
                textClass:  'circles-text'
            }