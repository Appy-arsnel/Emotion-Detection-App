/* import { useState, useEffect } from 'react';
import { Alert, Linking } from 'react-native';
import { useCameraPermission } from '../hooks/useCamera'; // Adjust the path as needed

// Define the possible states of permission
type PermissionStatus = boolean | null;

const useCameraPermissionStatus = (): PermissionStatus => {
    const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>(null);
    const { hasPermission, requestPermission } = useCameraPermission();

    useEffect(() => {
        const checkPermission = async () => {
            const permission = await hasPermission();
            if (permission) {
                setPermissionStatus(true);
            } else {
                const request = await requestPermission();
                if (request) {
                    setPermissionStatus(true);
                } else {
                    setPermissionStatus(false);
                    Alert.alert(
                        'Camera Permission Required',
                        'This app requires camera access. Please grant permission in your device settings.',
                        [
                            { text: 'Cancel', style: 'cancel' },
                            { text: 'Open Settings', onPress: () => Linking.openSettings() },
                        ]
                    );
                }
            }
        };

        checkPermission();
    }, [hasPermission, requestPermission]);

    return permissionStatus;
};

export default useCameraPermissionStatus;
 */