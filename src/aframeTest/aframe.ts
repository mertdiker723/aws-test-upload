import "aframe";
import "aframe-look-at-component";
import "aframe-orbit-controls-component-2";
import "aframe-event-set-component"
import * as THREE from "three"; // eslint-disable-line

var AFRAME = window.AFRAME;

// https://www.udemy.com/course/oculus-create-vr-games-using-html/learn/lecture/30971734#overview

// https://aframe.io/docs/1.3.0/introduction/writing-a-component.html

// https://aframe.io/docs/1.3.0/introduction/javascript-events-dom-apis.html#getting-entities-by-querying-and-traversing

AFRAME.registerComponent("log", {
    schema: {
        event: { type: 'string', default: '' },
        message: { type: 'string', default: 'Hello, World!' }
    },

    update: function () {
        var data = this.data;  // Component property values.
        var el = this.el;  // Reference to the component's entity.
        if (data.event) {
            console.log(data)
            // This will log the `message` when the entity emits the `event`.
            el.addEventListener(data.event, function () {
                console.log("data.message", data.message);
            });
        } else {
            // `event` not specified, just log the message.
            console.log(data.message);
        }
    }
});
