import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, SafeAreaView, Alert } from "react-native";
import BouncingCircleScreen from "./bounceAnimation/BouncingCircleScreen";
import GameOverScreen from "./gameOverScreen/GameOverScreen";

const GameScreen = () => {
  const [gameOver, setGameOver] = useState(false);
  const [startTime, setStartTime] = useState(0); 
  let interval = useRef(setInterval(() => {}));

  const handleGameOver = () => {
    setGameOver(true);
    clearInterval(interval.current);
  };

  const initiateTimer = () => {
    setStartTime(new Date().getTime());
    interval.current = setInterval(() => {
    }, 1000);
  };

  const restartGame = () => {
    setGameOver(false);
    initiateTimer();
  };

  useEffect(() => {
    startGame();
  }, []);
  const startGame = () => {
    Alert.alert("Get ready!", "Click the circle 5 times to finish the game!", [
      {
        text: "Play",
        onPress: () => {
          initiateTimer();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>

      {!gameOver ? (
        <BouncingCircleScreen gameOver={handleGameOver} startTime={startTime} />
      ) : (
        <GameOverScreen restartGame={restartGame} />
      )}
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timerText: {
    marginStart: 12,
    marginTop: 22,
    alignSelf: "center",
  },
});