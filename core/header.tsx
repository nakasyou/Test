/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts"
import config from "../blagin.config.ts";

export default function(){
  return <div class="header" style="height:3em;width:100%">
    <div class="center">

    </div>
    <div class="" style="display: flex; flex-wrap: wrap; justify-content: center;">
      <div>
        <img src={config.icon}
          class="auther-icon"
          alt="nakasyou"
          style="width: 48px;
                 height: 48px;
                 "/>
      </div>
      <div>
        <div style="font-size:2em;">{config.auther}</div>
      </div>
      <div>
        {config.links.map(link=>{
          return <a href={link.url}>
            <img src={link.icon} alt={link.name} class="icon header-sns-icon"/>
          </a>
        })}
      </div>
    </div>
  </div>
}
