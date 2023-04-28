import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Torus1 = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const torusRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>(null!);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();
    const clock = new THREE.Clock();

    // Create a geometry
    const geometry = new THREE.OctahedronGeometry(1);

    // Create a material
    const material = new THREE.MeshNormalMaterial();

    // Combine geometry and material to create a mesh
    const torus = new THREE.Mesh(geometry, material);
    torusRef.current = torus; // Assign the mesh to the ref object

    // Add the mesh to our scene
    scene.add(torus);

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Attach the renderer to our ref's current DOM node
    const mountNode = mountRef.current;
    if (mountNode) {
      mountNode.appendChild(renderer.domElement);
    }

    const animate = function () {
      requestAnimationFrame(animate);

      const elapsedSeconds = clock.getElapsedTime() % 12; // 12 seconds total for one full cycle
      let scaleFactor = 1; // default scale factor

      if (elapsedSeconds < 4) {
        // expanding phase (0-4 seconds)
        scaleFactor = (elapsedSeconds / 4) * 0.25 + 1;
      } else if (elapsedSeconds < 8) {
        // pause phase (4-8 seconds)
        scaleFactor = 1.25;
      } else {
        // decreasing phase (8-12 seconds)
        scaleFactor = ((12 - elapsedSeconds) / 4) * 0.25 + 1;
      }

      // Scale the torus mesh based on the scale factor
      torusRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function to unmount the renderer
    return () => {
      if (mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Torus1;
