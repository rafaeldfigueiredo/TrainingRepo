#include <iostream>
#include <random>

int generateRandomNumber() {
    using namespace std;
    std::random_device rd;
    std::mt19937 gen(rd());
    std::uniform_int_distribution<> dist(1, 3);
    return dist(gen);
}

enum class Result {
    Win,
    Lose,
    Tie
};

Result playGame(int playerChoice, int computerChoice) {
  if (playerChoice == computerChoice) {
    return Result::Tie;
  } else if (playerChoice == 1 && computerChoice == 3) {
    return Result::Win;
  } else if (playerChoice == 2 && computerChoice == 1) {
    return Result::Win;
  } else if (playerChoice == 3 && computerChoice == 2) {
    return Result::Win;
  } else {
    return Result::Lose;
  }
}

int main() {
  // Prompt the player to choose their object.
  int playerChoice;
  std::cout << "Enter your choice (1 = rock, 2 = paper, 3 = scissors): ";
  std::cin >> playerChoice;

  // Generate a random object for the computer.
  int computerChoice = generateRandomNumber();

  // Play the game and determine the winner.
  Result result = playGame(playerChoice, computerChoice);

  // Display the results to the player.
  if (result == Result::Win) {
    std::cout << "You win!" << std::endl;
  } else if (result == Result::Lose) {
    std::cout << "You lose!" << std::endl;
  } else {
    std::cout << "It's a tie!" << std::endl;
  }

  return 0;
}