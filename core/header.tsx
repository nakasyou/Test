/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts"
import config from "../blagin.config.ts";

export default function(){
  return <div class="header" style="height:3em">
    <div class="center">

    </div>
    <div class="" style="display: flex; flex-wrap: wrap; justify-content: center;">
      <div>
        <img src={config.icon} class="auther-icon"/>
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
