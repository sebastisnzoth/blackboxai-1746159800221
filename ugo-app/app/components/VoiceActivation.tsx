import React, { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import * as Speech from 'expo-speech';

export default function VoiceActivation({ onActivate }: { onActivate: () => void }) {
  useEffect(() => {
    // Placeholder for voice activation logic
    // Implement voice recognition using a suitable library or native module

    // For now, just simulate activation after 5 seconds
    const timer = setTimeout(() => {
      onActivate();
      Speech.speak('Hola, soy Hugo. ¿En qué puedo ayudarte?');
    }, 5000);

    return () => clearTimeout(timer);
  }, [onActivate]);

  return null;
}
