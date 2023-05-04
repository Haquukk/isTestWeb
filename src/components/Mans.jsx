/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/desktop_pc/Mans.gltf
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


export const Mans = ({ action }) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./desktop_pc/Mans.gltf')
  const { actions, names } = useAnimations(animations, group)


  useEffect(() => {
    actions[action].reset().fadeIn(0.5).play()
    return () =>
      actions[action].fadeOut(0.5)
  }, [action]);




  return (
    <group ref={group} {...action} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <skinnedMesh castShadow name="Leather_small_Low003" geometry={nodes.Leather_small_Low003.geometry} material={materials['Material.004']} skeleton={nodes.Leather_small_Low003.skeleton} />
        </group>
        <group name="cs_grp">
          <group name="cs_arm_fk" position={[1.5, 8.5, 0]} scale={0.82} />
          <group name="cs_calf_fk" position={[0.5, 8.5, 0]} scale={0.82} />
          <group name="cs_circle" position={[0.5, 4.5, 0]} scale={0.21} />
          <group name="cs_circle001" position={[0.5, 4.5, 0]} scale={0.21} />
          <group name="cs_circle_025" position={[2.5, 4.5, 0]} scale={0.21} />
          <group name="cs_foot" position={[0.5, 10.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.31} />
          <group name="cs_foot001" position={[0.5, 10.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.31} />
          <group name="cs_foot002" position={[0.5, 10.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.31} />
          <group name="cs_foot_01" position={[0.5, 18.5, 0]} rotation={[0, Math.PI / 2, 0]} scale={2.19} />
          <group name="cs_foot_roll" position={[0.5, 12.5, 0]} scale={0.59} />
          <group name="cs_forearm_fk" position={[2.5, 8.5, 0]} scale={0.82} />
          <group name="cs_hand" position={[0.5, 19.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.31} />
          <group name="cs_head" position={[0.5, 13.5, 0]} scale={0.21} />
          <group name="cs_hips" position={[0.5, 11.5, 0]} scale={0.21} />
          <group name="cs_master" position={[0.5, 17.5, 0]} scale={0.1} />
          <group name="cs_neck" position={[0.5, 14.5, 0]} scale={0.21} />
          <group name="cs_shoulder_left" position={[0.5, 15.5, 0]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={1.04} />
          <group name="cs_shoulder_right" position={[0.5, 16.5, 0]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={1.04} />
          <group name="cs_sphere" position={[0.5, 2.5, 0]} scale={0.21} />
          <group name="cs_sphere_012" position={[3.5, 2.5, 0]} scale={0.21} />
          <group name="cs_square" position={[1.5, 1.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.15} />
          <group name="cs_square_2" position={[0.5, 1.5, 0]} rotation={[-Math.PI, 0, 0]} scale={0.15} />
          <group name="cs_thigh_fk" position={[0.5, 7.5, 0]} scale={0.82} />
          <group name="cs_toe" position={[0.5, 9.5, 0]} scale={0.43} />
          <group name="cs_user_Ctrl_Toe_IK_Right001" position={[-14.61, -1.45, 13.38]} rotation={[3.12, 0.08, -3.13]} scale={7.37} />
          <group name="cs_user_Ctrl_Toe_IK_Right002" position={[-14.61, -1.45, 13.38]} rotation={[3.12, 0.08, -3.13]} scale={7.37} />
          <group name="cs_user_Ctrl_Toe_IK_Right" position={[-14.61, -1.45, 13.38]} rotation={[3.12, 0.08, -3.13]} scale={7.37} />
        </group>
      </group>
    </group>
  )
}

export default Mans

useGLTF.preload('./destop_pc/Mans.gltf')
