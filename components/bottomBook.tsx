import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { StyledOpacity, StyledView, StyledText } from "./styledComponents";
import { Icon } from "react-native-paper";
import Slider from "@react-native-community/slider";
import { useLocalSearchParams } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";

const BottomBook = () => {
  const { url, director, name, artist } = useLocalSearchParams();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState({
    position: 0,
    duration: 1,
  });

  useEffect(() => {
    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [url]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (sound && isPlaying) {
          sound.pauseAsync();
        }
      };
    }, [sound, isPlaying])
  );

  const loadSound = async () => {
    const audioUri = Array.isArray(url) ? url[0] : url;
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: audioUri },
      { shouldPlay: false }
    );
    setSound(newSound);

    newSound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        setPlaybackStatus({
          position: status.positionMillis,
          duration: status.durationMillis || 1,
        });
        setIsPlaying(status.isPlaying);
      }
    });
  };

  const togglePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSliderChange = async (value: number) => {
    if (sound) {
      const position = value * playbackStatus.duration;
      await sound.setPositionAsync(position);
    }
  };

  return (
    <>
      <StyledView className="flex-start items-start w-full px-4 sm:px-6 lg:px-8">
        <StyledText className="font-candal text-white text-base sm:text-lg lg:text-xl">
          {name}
        </StyledText>
        <StyledText className="font-baskerville text-white text-sm sm:text-base lg:text-lg">
          Reżyser: {director}
        </StyledText>
        <StyledText className="font-baskerville text-white text-sm sm:text-base lg:text-lg">
          Artysta: {artist}
        </StyledText>
      </StyledView>

      <StyledView className="w-full px-4">
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#EAF4F4"
          maximumTrackTintColor="#777"
          thumbTintColor="#EAF4F4"
          value={playbackStatus.position / playbackStatus.duration}
          onSlidingComplete={handleSliderChange}
        />
      </StyledView>

      <StyledView className="flex-row justify-between items-center w-full px-4">
        {[
          "skip-previous",
          "rewind-10",
          "play",
          "fast-forward-10",
          "skip-next",
        ].map((icon, index) => (
          <StyledOpacity
            key={index}
            className={`rounded-full p-2 flex-1 items-center ${
              icon === "play" ? "play-button-container" : ""
            }`}
            style={icon === "play" ? styles.playButtonContainer : {}}
            onPress={icon === "play" ? togglePlayPause : undefined}
          >
            <Icon
              source={icon === "play" && isPlaying ? "pause" : icon}
              size={icon === "play" ? 50 : 30}
              color={icon === "play" ? styles.playButton.color : "#EAF4F4"}
            />
          </StyledOpacity>
        ))}
      </StyledView>

      <StyledText className="text-right text-xs mt-2 w-full px-4 text-white">
        {`${(playbackStatus.position / 60000).toFixed(2)} / ${(
          playbackStatus.duration / 60000
        ).toFixed(2)}`}
      </StyledText>
    </>
  );
};

const styles = StyleSheet.create({
  slider: {
    height: 40,
  },
  playButtonContainer: {
    backgroundColor: "#CDE7BE",
    borderRadius: 50,
  },
  playButton: {
    color: "#333",
  },
});

export default BottomBook;
