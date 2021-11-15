"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[71301],{99140:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-2f302e66",path:"/devices/TS0601_rcbo.html",title:"TuYa TS0601_rcbo control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0601_rcbo control via MQTT",description:"Integrate your TuYa TS0601_rcbo via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Meter_number (text)",slug:"meter-number-text",children:[]},{level:3,title:"State (binary)",slug:"state-binary",children:[]},{level:3,title:"Alarm (text)",slug:"alarm-text",children:[]},{level:3,title:"Trip (binary)",slug:"trip-binary",children:[]},{level:3,title:"Child_lock (binary)",slug:"child-lock-binary",children:[]},{level:3,title:"Power_on_behaviour (enum)",slug:"power-on-behaviour-enum",children:[]},{level:3,title:"Countdown_timer (numeric)",slug:"countdown-timer-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Voltage_rms (numeric)",slug:"voltage-rms-numeric",children:[]},{level:3,title:"Current (numeric)",slug:"current-numeric",children:[]},{level:3,title:"Current_average (numeric)",slug:"current-average-numeric",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Energy_consumed (numeric)",slug:"energy-consumed-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Clear_device_data (enum)",slug:"clear-device-data-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0601_rcbo.md",git:{updatedTime:1637001417e3}}},9004:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});const a=(0,o(66252).uE)('<h1 id="tuya-ts0601-rcbo" tabindex="-1"><a class="header-anchor" href="#tuya-ts0601-rcbo" aria-hidden="true">#</a> TuYa TS0601_rcbo</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0601_rcbo</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>DIN mount RCBO with smart energy metering</td></tr><tr><td>Exposes</td><td>meter_number, state, alarm, trip, child_lock, power_on_behaviour, countdown_timer, voltage, voltage_rms, current, current_average, power, energy_consumed, temperature, clear_device_data, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0601_rcbo.jpg" alt="TuYa TS0601_rcbo"></td></tr><tr><td>White-label</td><td>HOCH ZJSBL7-100Z, WDYK ZJSBL7-100Z</td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="meter-number-text" tabindex="-1"><a class="header-anchor" href="#meter-number-text" aria-hidden="true">#</a> Meter_number (text)</h3><p>Value can be found in the published state on the <code>meter_number</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="state-binary" tabindex="-1"><a class="header-anchor" href="#state-binary" aria-hidden="true">#</a> State (binary)</h3><p>Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state is ON, if <code>OFF</code> OFF.</p><h3 id="alarm-text" tabindex="-1"><a class="header-anchor" href="#alarm-text" aria-hidden="true">#</a> Alarm (text)</h3><p>Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="trip-binary" tabindex="-1"><a class="header-anchor" href="#trip-binary" aria-hidden="true">#</a> Trip (binary)</h3><p>Value can be found in the published state on the <code>trip</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trip&quot;: NEW_VALUE}</code>. If value equals <code>trip</code> trip is ON, if <code>clear</code> OFF.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary" aria-hidden="true">#</a> Child_lock (binary)</h3><p>Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> child_lock is ON, if <code>OFF</code> OFF.</p><h3 id="power-on-behaviour-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behaviour-enum" aria-hidden="true">#</a> Power_on_behaviour (enum)</h3><p>Value can be found in the published state on the <code>power_on_behaviour</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behaviour&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>previous</code>.</p><h3 id="countdown-timer-numeric" tabindex="-1"><a class="header-anchor" href="#countdown-timer-numeric" aria-hidden="true">#</a> Countdown_timer (numeric)</h3><p>Value can be found in the published state on the <code>countdown_timer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_timer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>86400</code>. The unit of this value is <code>s</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-rms-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-rms-numeric" aria-hidden="true">#</a> Voltage_rms (numeric)</h3><p>Value can be found in the published state on the <code>voltage_rms</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mA</code>.</p><h3 id="current-average-numeric" tabindex="-1"><a class="header-anchor" href="#current-average-numeric" aria-hidden="true">#</a> Current_average (numeric)</h3><p>Value can be found in the published state on the <code>current_average</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mA</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-consumed-numeric" tabindex="-1"><a class="header-anchor" href="#energy-consumed-numeric" aria-hidden="true">#</a> Energy_consumed (numeric)</h3><p>Value can be found in the published state on the <code>energy_consumed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="clear-device-data-enum" tabindex="-1"><a class="header-anchor" href="#clear-device-data-enum" aria-hidden="true">#</a> Clear_device_data (enum)</h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;clear_device_data&quot;: NEW_VALUE}</code>. The possible values are: <code>clear</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',35),r={},d=(0,o(83744).Z)(r,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);