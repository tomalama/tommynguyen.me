import React, { Component } from "react";
import * as THREE from "three";
import React3 from "react-three-renderer";
import ObjectModel from "react-three-renderer-objects";
import faceModel from "../../assets/models/face/face.obj";

class Face extends Component {
  constructor(props) {
    super(props);
    this.faceObject = React.createRef();

    this.state = {
      faceObjectIsLoaded: false,
      cameraPosition: new THREE.Vector3(0, 0, 2),
      groupRotation: new THREE.Quaternion(),
      scene: {}
    };

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;

    this.vector = new THREE.Vector3();
    this.mouse2D = new THREE.Vector2();
    this.mouseObj = {
      x: 0,
      y: 0,
      percentX: 0,
      percentY: 0,
      lastX: 0,
      lastY: 0
    };
  }

  componentDidMount() {
    const { scene } = this.refs;
    const faceObjectIsLoaded = this.faceObject.current.state.loaded;
    this.setState({ faceObjectIsLoaded, scene });
    document.addEventListener("mousemove", this.onDocumentMouseMove, false);
    window.addEventListener("resize", this.onWindowResize, false);
  }

  componentWillMount() {
    this.onWindowResize = () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.halfWidth = this.width / 2;
      this.halfHeight = this.height / 2;
    };

    this.onDocumentMouseMove = event => {
      this.mouse2D.x = (event.pageX / this.width) * 2 - 1;
      this.mouse2D.y = -(event.pageY / this.height) * 2 + 1;

      this.mouseObj.x = event.pageX - this.halfWidth;
      this.mouseObj.y = event.pageY - this.halfHeight;
      this.mouseObj.percentX = Math.ceil(
        (this.mouseObj.x / this.halfWidth) * 100
      );
      this.mouseObj.percentY = Math.ceil(
        (this.mouseObj.y / this.halfHeight) * 100
      );

      this.mouseObj.lastX = event.pageX;
      this.mouseObj.lastY = event.pageY;

      this.updateRotationVector();
    };
  }

  updateRotationVector() {
    this.vector = new THREE.Vector3(
      this.mouseObj.percentX,
      this.mouseObj.percentY,
      0
    ).normalize();
  }

  updateScene = () => {
    const v = new THREE.Euler(-this.mouse2D.y, this.mouse2D.x, 0);
    const q = new THREE.Quaternion().setFromEuler(v);
    const newQuaternion = new THREE.Quaternion();
    THREE.Quaternion.slerp(this.state.groupRotation, q, newQuaternion, 0.07);
    let groupRotation = newQuaternion;
    groupRotation = groupRotation.normalize();

    this.setState({
      groupRotation
    });
  };

  render() {
    const {
      faceObjectIsLoaded,
      cameraPosition,
      groupRotation,
      scene
    } = this.state;
    return (
      <div>
        {!faceObjectIsLoaded && <div>Loading...</div>}
        <React3
          mainCamera="camera"
          antialias
          shadowMapEnabled
          width={this.width}
          height={this.height}
          alpha={true}
          onAnimate={this.updateScene}
        >
          <scene ref="scene">
            <perspectiveCamera
              key={`perspectiveCamera`}
              name="camera"
              fov={75}
              aspect={this.width / this.height}
              near={1}
              far={3000}
              position={cameraPosition}
              lookAt={new THREE.Vector3(0, 0, 0)}
            />
            <group>
              <spotLight
                key={`Light 1`}
                color={0xffffff}
                position={new THREE.Vector3(0, 300, 0)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                castShadow
                penumbra={2}
                intensity={0.1}
                shadowMapWidth={10240}
                shadowMapHeight={10240}
              />

              <directionalLight
                key={`Light 2`}
                color={0xffffff}
                position={new THREE.Vector3(0, 500, 100)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.25}
              />

              <spotLight
                key={`Light 3`}
                color={0xffffff}
                position={new THREE.Vector3(0, 100, 2000)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.15}
              />

              <spotLight
                key={`Light 4`}
                color={0xffffff}
                position={new THREE.Vector3(-500, 0, 500)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.05}
              />

              <spotLight
                key={`Light 5`}
                color={0xffffff}
                position={new THREE.Vector3(500, 0, 500)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.05}
              />

              <spotLight
                key={`Light 6`}
                color={0xffd0b1}
                position={new THREE.Vector3(-500, 450, 500)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.2}
              />

              <spotLight
                key={`Light 7`}
                color={0x80ecff}
                position={new THREE.Vector3(500, 450, 500)}
                lookAt={new THREE.Vector3(0, 0, 0)}
                intensity={0.2}
              />
            </group>

            <group name="faceGroup" quaternion={groupRotation}>
              <ObjectModel
                name="faceObject"
                model={faceModel}
                scene={scene}
                group="faceGroup"
                ref={this.faceObject}
              />
            </group>
          </scene>
        </React3>
      </div>
    );
  }
}

export default Face;
