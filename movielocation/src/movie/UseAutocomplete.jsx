import React from 'react'
import { useState } from 'react'
export const UseAutocomplete = () => {
    const [state, setstate] = useState("Epic Roasthouse (399 Embarcadero)")
    function com(){

        document.getElementById('gmap_canvas').innerHTML=`<iframe id="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${state}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://formatjson.org/">format json</a>`
    }
  return (
    <div>UseAutocomplete
        <div class="mapouter">
            <div id="gmap_canvas">
                <iframe id="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=patna&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://formatjson.org/">format json</a>
                </div>
                </div>
                <button onClick={com}>click</button>
    </div>
  )
}
