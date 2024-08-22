import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import useCameraPermissionStatus from './useCameraPermissionStatus'; // Adjust the path as needed

const CameraComponent = () => {
    const permissionStatus = useCameraPermissionStatus();

    if (permissionStatus === null) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View>
            {permissionStatus ? (
                <Text>Camera permission granted. You can use the camera now!</Text>
            ) : (
                <Text>Camera permission denied. Please grant access in your settings.</Text>
            )}
        </View>
    );
};

export default CameraComponent;
