import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Camera, CameraType, CameraCapturedPicture } from 'expo-camera';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function ScanScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [permission, requestPermission] = Camera.useCameraPermissions(); 
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef<Camera>(null);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission]);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo: CameraCapturedPicture = await cameraRef.current.takePictureAsync();
        console.log('Photo taken:', photo);
        Alert.alert('Success', 'Photo taken successfully!');
      } catch (error) {
        console.error('Error taking picture:', error);
        Alert.alert('Error', 'Failed to take picture');
      }
    }
  };

  if (!permission) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.text, { color: colors.text }]}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.text, { color: colors.text }]}>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <Camera
        style={styles.camera}
        type={type}
        ref={cameraRef}
      >
        <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={[styles.flipButton, { backgroundColor: colors.primary }]}
            onPress={() => setType(current => current === CameraType.back ? CameraType.front : CameraType.back)}
            >
            <Ionicons name="camera-reverse" size={24} color="white" />
        </TouchableOpacity>
          <TouchableOpacity
            style={[styles.captureButton, { backgroundColor: colors.primary }]}
            onPress={takePicture}
          >
            <Ionicons name="camera" size={32} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  flipButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
