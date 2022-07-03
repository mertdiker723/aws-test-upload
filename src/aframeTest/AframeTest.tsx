import "./aframe";

import "aframe";
import "aframe-look-at-component";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "a-entity": React.DetailedHTMLProps<any, any>;
            "a-plane": React.DetailedHTMLProps<any, any>;
            "a-scene": React.DetailedHTMLProps<any, any>;
            "a-sphere": React.DetailedHTMLProps<any, any>;
            "a-text": React.DetailedHTMLProps<any, any>;
            "a-box": React.DetailedHTMLProps<any, any>;
            "a-sky": React.DetailedHTMLProps<any, any>;
        }
    }
}
const AframeTest = () => {
    return (
        <div>
            <a-scene>
                <a-entity
                    geometry="primitive: sphere"
                    material="color: red"
                    log="message: Hello, Metaverse!;event:click;"
                    light="type: point; intensity: 2.0"
                    rotation="45 90 180"
                    position="0 2 -5"
                />
                <a-text value="Now Interactable" position="0 3 -5" color="red"></a-text>
                <a-sky color="#ECECEC"></a-sky>
            </a-scene>
        </div>
    )
}

export default AframeTest