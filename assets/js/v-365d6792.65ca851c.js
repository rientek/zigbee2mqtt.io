"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[46499],{92898:(t,e,i)=>{i.r(e),i.d(e,{data:()=>a});const a={key:"v-365d6792",path:"/devices/WS-USC03.html",title:"Xiaomi WS-USC03 control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi WS-USC03 control via MQTT",description:"Integrate your Xiaomi WS-USC03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-09-30T20:52:56.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/WS-USC03.md",git:{updatedTime:1637001417e3}}},84754:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});const a=(0,i(66252).uE)('<h1 id="xiaomi-ws-usc03" tabindex="-1"><a class="header-anchor" href="#xiaomi-ws-usc03" aria-hidden="true">#</a> Xiaomi WS-USC03</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>WS-USC03</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara smart wall switch (neutral, single rocker)</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/WS-USC03.jpg" alt="Xiaomi WS-USC03"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),o={},d=(0,i(83744).Z)(o,[["render",function(t,e){return a}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[i,a]of e)t[i]=a;return t}}}]);