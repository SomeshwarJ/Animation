import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

interface Props {
  restartGame: () => void;
}

const GameOverScreen = ({ restartGame }: Props) => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.gameOverContainer}>
        <ConfettiCannon
          origin={{ x: -10, y: 0 }}
          count={200}
          explosionSpeed={300}
          fallSpeed={2500}
        />
        <Text style={styles.gameOverText}>Game Over!</Text>
        <Text style={styles.scoreText}>
        </Text>
        <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
          <Text style={styles.restartButtonText}>Restart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 18,
  },
  gameOverText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  restartButton: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  restartButtonText: {
    fontSize: 20,
    color: "white",
  },
  lastScoreHeading: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 16,
  },
  lastScoreNumber: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
  },
});