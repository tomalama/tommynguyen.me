import React, { Component } from "react";
import { Vector2, Vector3, Quaternion, Euler } from "three";
import React3 from "react-three-renderer";
import ObjectModel from "react-three-renderer-objects";
import faceModel from "../../assets/models/face/face.obj";

class Face extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      groupRotation: new Quaternion(),
      scene: {}
    };

    this.mouse = new Vector2();
  }

  componentDidMount() {
    const { scene } = this.refs;
    this.setState({ scene });
    document.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("resize", this.onResize);
  }

  onMouseMove = event => {
    const { width, height } = this.state;
    this.mouse.x = (event.pageX / width) * 2 - 1;
    this.mouse.y = -(event.pageY / height) * 2 + 1;
  };

  onResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  updateScene = () => {
    const { groupRotation, width } = this.state;
    const offset = width > 1000 ? 0.5 : 0;
    const v = new Euler(-this.mouse.y, this.mouse.x - offset, 0);
    const q = new Quaternion().setFromEuler(v);
    const newQuaternion = new Quaternion();
    Quaternion.slerp(groupRotation, q, newQuaternion, 0.07);
    let newGroupRotation = newQuaternion;
    newGroupRotation = newGroupRotation.normalize();

    this.setState({
      groupRotation: newGroupRotation
    });
  };

  render() {
    const { width, height, groupRotation, scene } = this.state;
    const cameraPosition = new Vector3(0, 0, 2);
    const origin = new Vector3(0, 0, 0);

    const cameraLookAt =
      width > 1000 ? new Vector3(-1, 0, 0) : new Vector3(0, 0, 0);

    return (
      <div className="Face__Wrapper">
        <React3
          mainCamera="camera"
          antialias
          shadowMapEnabled
          width={width}
          height={height}
          alpha={true}
          onAnimate={this.updateScene}
        >
          <scene ref="scene">
            <perspectiveCamera
              key={`perspectiveCamera`}
              name="camera"
              fov={75}
              aspect={width / height}
              near={1}
              far={3000}
              position={cameraPosition}
              lookAt={cameraLookAt}
            />
            <group>
              <spotLight
                key={`Light 1`}
                color={0xffffff}
                position={new Vector3(0, 300, 0)}
                lookAt={origin}
                castShadow
                penumbra={2}
                intensity={0.1}
                shadowMapWidth={10240}
                shadowMapHeight={10240}
              />

              <directionalLight
                key={`Light 2`}
                color={0xffffff}
                position={new Vector3(0, 500, 100)}
                lookAt={origin}
                intensity={0.25}
              />

              <spotLight
                key={`Light 3`}
                color={0xffffff}
                position={new Vector3(0, 100, 2000)}
                lookAt={origin}
                intensity={0.15}
              />

              <spotLight
                key={`Light 4`}
                color={0xffffff}
                position={new Vector3(-500, 0, 500)}
                lookAt={origin}
                intensity={0.05}
              />

              <spotLight
                key={`Light 5`}
                color={0xffffff}
                position={new Vector3(500, 0, 500)}
                lookAt={origin}
                intensity={0.05}
              />

              <spotLight
                key={`Light 6`}
                color={0xffd0b1}
                position={new Vector3(-500, 450, 500)}
                lookAt={origin}
                intensity={0.2}
              />

              <spotLight
                key={`Light 7`}
                color={0x80ecff}
                position={new Vector3(500, 450, 500)}
                lookAt={origin}
                intensity={0.2}
              />
            </group>

            <group name="faceGroup" quaternion={groupRotation}>
              <ObjectModel
                name="faceObject"
                model={faceModel}
                scene={scene}
                group="faceGroup"
              />
            </group>
          </scene>
        </React3>
      </div>
    );
  }
}

export default Face;
