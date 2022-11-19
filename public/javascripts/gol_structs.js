function helice(grid, center){
    grid[center + 1][center] = 1
    grid[center][center] = 1
    grid[center - 1][center] = 1
}

function longHelice(grid, center){
    grid[center + 2][center] = 1
    grid[center + 1][center] = 1
    grid[center][center] = 1
    grid[center - 1][center] = 1
    grid[center - 2][center] = 1
}

function plannersCannon(center, invert, returned){

  if (invert == false && returned == false)
  {
    grid[center][center] = 1
    grid[center - 1][center] = 1
    grid[center - 1][center + 1] = 1
    grid[center - 1][center - 1] = 1
    grid[center - 2][center + 2] = 1
    grid[center - 2][center - 2] = 1
    grid[center - 3][center] = 1
    grid[center - 4][center - 3] = 1
    grid[center - 4][center + 3] = 1
    grid[center - 5][center - 3] = 1
    grid[center - 5][center + 3] = 1
    grid[center - 6][center - 2] = 1
    grid[center - 6][center + 2] = 1
    grid[center - 7][center - 1] = 1
    grid[center - 7][center + 1] = 1
    grid[center - 7][center] = 1

    grid[center - 16][center - 1] = 1
    grid[center - 17][center] = 1
    grid[center - 17][center - 1] = 1
    grid[center - 16][center] = 1

    grid[center + 3][center - 1] = 1
    grid[center + 3][center - 2] = 1
    grid[center + 3][center - 3] = 1
    grid[center + 4][center - 1] = 1
    grid[center + 4][center - 2] = 1
    grid[center + 4][center - 3] = 1
    grid[center + 5][center - 4] = 1
    grid[center + 5][center] = 1
    grid[center + 7][center - 4] = 1
    grid[center + 7][center] = 1
    grid[center + 7][center - 5] = 1
    grid[center + 7][center + 1] = 1

    grid[center + 17][center - 2] = 1
    grid[center + 18][center - 2] = 1
    grid[center + 17][center - 3] = 1
    grid[center + 18][center - 3] = 1
  }
  else if(invert == true && returned == false)
  {
    grid[center][center] = 1
    grid[center + 1][center] = 1
    grid[center + 1][center - 1] = 1
    grid[center + 1][center + 1] = 1
    grid[center + 2][center - 2] = 1
    grid[center + 2][center + 2] = 1
    grid[center + 3][center] = 1
    grid[center + 4][center + 3] = 1
    grid[center + 4][center - 3] = 1
    grid[center + 5][center + 3] = 1
    grid[center + 5][center - 3] = 1
    grid[center + 6][center + 2] = 1
    grid[center + 6][center - 2] = 1
    grid[center + 7][center + 1] = 1
    grid[center + 7][center - 1] = 1
    grid[center + 7][center] = 1

    grid[center + 16][center + 1] = 1
    grid[center + 17][center] = 1
    grid[center + 17][center + 1] = 1
    grid[center + 16][center] = 1

    grid[center - 3][center + 1] = 1
    grid[center - 3][center + 2] = 1
    grid[center - 3][center + 3] = 1
    grid[center - 4][center + 1] = 1
    grid[center - 4][center + 2] = 1
    grid[center - 4][center + 3] = 1
    grid[center - 5][center + 4] = 1
    grid[center - 5][center] = 1
    grid[center - 7][center + 4] = 1
    grid[center - 7][center] = 1
    grid[center - 7][center + 5] = 1
    grid[center - 7][center - 1] = 1

    grid[center - 17][center + 2] = 1
    grid[center - 18][center + 2] = 1
    grid[center - 17][center + 3] = 1
    grid[center - 18][center + 3] = 1
  }
  else  if(invert == false && returned == true)
  {
    grid[center][center] = 1
    grid[center - 1][center] = 1
    grid[center - 1][center - 1] = 1
    grid[center - 1][center + 1] = 1
    grid[center - 2][center - 2] = 1
    grid[center - 2][center + 2] = 1
    grid[center - 3][center] = 1
    grid[center - 4][center + 3] = 1
    grid[center - 4][center - 3] = 1
    grid[center - 5][center + 3] = 1
    grid[center - 5][center - 3] = 1
    grid[center - 6][center + 2] = 1
    grid[center - 6][center - 2] = 1
    grid[center - 7][center + 1] = 1
    grid[center - 7][center - 1] = 1
    grid[center - 7][center] = 1

    grid[center - 16][center + 1] = 1
    grid[center - 17][center] = 1
    grid[center - 17][center + 1] = 1
    grid[center - 16][center] = 1

    grid[center + 3][center + 1] = 1
    grid[center + 3][center + 2] = 1
    grid[center + 3][center + 3] = 1
    grid[center + 4][center + 1] = 1
    grid[center + 4][center + 2] = 1
    grid[center + 4][center + 3] = 1
    grid[center + 5][center + 4] = 1
    grid[center + 5][center] = 1
    grid[center + 7][center + 4] = 1
    grid[center + 7][center] = 1
    grid[center + 7][center + 5] = 1
    grid[center + 7][center - 1] = 1

    grid[center + 17][center + 2] = 1
    grid[center + 18][center + 2] = 1
    grid[center + 17][center + 3] = 1
    grid[center + 18][center + 3] = 1
  }
  else if(invert == true && returned == true)
  {
    grid[center][center] = 1
    grid[center + 1][center] = 1
    grid[center + 1][center + 1] = 1
    grid[center + 1][center - 1] = 1
    grid[center + 2][center + 2] = 1
    grid[center + 2][center - 2] = 1
    grid[center + 3][center] = 1
    grid[center + 4][center - 3] = 1
    grid[center + 4][center + 3] = 1
    grid[center + 5][center - 3] = 1
    grid[center + 5][center + 3] = 1
    grid[center + 6][center - 2] = 1
    grid[center + 6][center + 2] = 1
    grid[center + 7][center - 1] = 1
    grid[center + 7][center + 1] = 1
    grid[center + 7][center] = 1

    grid[center + 16][center - 1] = 1
    grid[center + 17][center] = 1
    grid[center + 17][center - 1] = 1
    grid[center + 16][center] = 1

    grid[center - 3][center - 1] = 1
    grid[center - 3][center - 2] = 1
    grid[center - 3][center - 3] = 1
    grid[center - 4][center - 1] = 1
    grid[center - 4][center - 2] = 1
    grid[center - 4][center - 3] = 1
    grid[center - 5][center - 4] = 1
    grid[center - 5][center] = 1
    grid[center - 7][center - 4] = 1
    grid[center - 7][center] = 1
    grid[center - 7][center - 5] = 1
    grid[center - 7][center + 1] = 1

    grid[center - 17][center - 2] = 1
    grid[center - 18][center - 2] = 1
    grid[center - 17][center - 3] = 1
    grid[center - 18][center - 3] = 1
  }

  gameSpeed = 50;

}

function bigSpaceShip(startX, startY){
  
  grid[startX][startY] = 1
  grid[startX + 2][startY + 1] = 1
  grid[startX + 3][startY + 1] = 1
  grid[startX][startY - 2] = 1
  grid[startX + 1][startY -  3] = 1
  grid[startX + 2][startY - 3] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 4][startY - 3] = 1
  grid[startX + 5][startY - 3] = 1
  grid[startX + 6][startY - 3] = 1
  grid[startX + 6][startY - 2] = 1
  grid[startX + 6][startY - 1] = 1
  grid[startX + 5][startY] = 1
  
}

function middleSpaceShip(startX, startY){
  
  grid[startX][startY] = 1
  grid[startX + 2][startY + 1] = 1
  grid[startX][startY - 2] = 1
  grid[startX + 1][startY -  3] = 1
  grid[startX + 2][startY - 3] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 4][startY - 3] = 1
  grid[startX + 5][startY - 3] = 1
  grid[startX + 5][startY - 2] = 1
  grid[startX + 5][startY - 1] = 1
  grid[startX + 4][startY] = 1
  
}

function lilSpaceShip(startX, startY){
  
  grid[startX][startY] = 1
  grid[startX][startY - 2] = 1
  grid[startX + 1][startY -  3] = 1
  grid[startX + 2][startY - 3] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 4][startY - 3] = 1
  grid[startX + 4][startY - 2] = 1
  grid[startX + 4][startY - 1] = 1
  grid[startX + 3][startY] = 1
  
}

function canadaGoose(grid, startX, startY)
{
  
  grid[startX][startY] = 1
  grid[startX + 1][startY] = 1
  grid[startX + 2][startY] = 1
  
  grid[startX - 1][startY - 2] = 1
  grid[startX][startY - 3] = 1
  grid[startX + 1][startY - 2] = 1

  grid[startX + 2][startY - 2] = 1
  grid[startX + 2][startY - 3] = 1
  grid[startX + 3][startY - 3] = 1

  grid[startX + 4][startY - 2] = 1
  grid[startX + 4][startY - 3] = 1
  grid[startX + 4][startY - 4] = 1

  grid[startX + 5][startY - 3] = 1
  grid[startX + 5][startY - 4] = 1
  grid[startX + 5][startY - 5] = 1

  grid[startX + 5][startY - 6] = 1
  grid[startX + 6][startY - 5] = 1
  grid[startX + 6][startY - 6] = 1

  grid[startX + 7][startY - 8] = 1
  grid[startX + 8][startY - 9] = 1
  grid[startX + 8][startY - 10] = 1

  grid[startX + 9][startY - 8] = 1
  grid[startX + 9][startY - 9] = 1
  
  grid[startX + 1][startY - 5] = 1
  grid[startX + 1][startY - 6] = 1
  grid[startX + 1][startY - 7] = 1

  grid[startX + 2][startY - 5] = 1
  grid[startX + 2][startY - 6] = 1
  grid[startX + 2][startY - 7] = 1

  grid[startX - 1][startY - 7] = 1
  grid[startX - 1][startY - 8] = 1
  grid[startX - 2][startY - 8] = 1
  
  grid[startX + 5][startY] = 1
  grid[startX + 7][startY] = 1

  grid[startX + 6][startY - 1] = 1
  grid[startX + 7][startY - 1] = 1

  grid[startX + 6][startY - 2] = 1
  grid[startX + 8][startY + 1] = 1

  grid[startX + 6][startY + 2] = 1
  grid[startX + 7][startY + 2] = 1
  
}

function pentadecathlon(start)
{

  for (var i = 0; i < 10; i++)
  {
    grid[start + i][start] = 1
  }

}

function bigFuckingShip(startX, startY)
{
  
  grid[startX][startY] = 1
  grid[startX][startY + 8] = 1
  grid[startX][startY + 1] = 1

  grid[startX + 1][startY] = 1
  grid[startX + 1][startY + 8] = 1
  grid[startX + 2][startY] = 1

  grid[startX + 2][startY + 1] = 1
  grid[startX + 2][startY + 5] = 1
  grid[startX + 2][startY + 6] = 1

  grid[startX + 3][startY] = 1
  grid[startX + 3][startY + 3] = 1
  grid[startX + 3][startY + 6] = 1

  grid[startX + 4][startY] = 1
  grid[startX + 4][startY + 2] = 1
  grid[startX + 4][startY + 8] = 1

  grid[startX + 5][startY] = 1
  grid[startX + 5][startY + 6] = 1
  grid[startX + 5][startY + 7] = 1

  grid[startX + 5][startY + 8] = 1
  grid[startX + 6][startY] = 1
  grid[startX + 6][startY + 2] = 1

  grid[startX + 6][startY + 7] = 1
  grid[startX + 7][startY] = 1
  grid[startX + 8][startY + 1] = 1

  grid[startX + 8][startY + 2] = 1
  grid[startX + 9][startY + 1] = 1
  grid[startX + 9][startY + 2] = 1

  grid[startX + 9][startY + 4] = 1
  grid[startX + 9][startY + 5] = 1
  grid[startX + 10][startY + 3] = 1



  grid[startX][startY - 8] = 1

  grid[startX][startY - 1] = 1
  grid[startX + 1][startY] = 1
  grid[startX + 1][startY - 8] = 1

  grid[startX + 2][startY] = 1
  grid[startX + 2][startY - 1] = 1
  grid[startX + 2][startY - 5] = 1

  grid[startX + 2][startY - 6] = 1
  grid[startX + 3][startY] = 1
  grid[startX + 3][startY - 3] = 1

  grid[startX + 3][startY - 6] = 1
  grid[startX + 4][startY] = 1
  grid[startX + 4][startY - 2] = 1

  grid[startX + 4][startY - 8] = 1
  grid[startX + 5][startY] = 1
  grid[startX + 5][startY - 6] = 1

  grid[startX + 5][startY - 7] = 1
  grid[startX + 5][startY - 8] = 1
  grid[startX + 6][startY] = 1

  grid[startX + 6][startY - 2] = 1
  grid[startX + 6][startY - 7] = 1
  grid[startX + 7][startY] = 1

  grid[startX + 8][startY - 1] = 1
  grid[startX + 8][startY - 2] = 1
  grid[startX + 9][startY - 1] = 1

  grid[startX + 9][startY - 2] = 1
  grid[startX + 9][startY - 4] = 1
  grid[startX + 9][startY - 5] = 1

  grid[startX + 10][startY - 3] = 1

}

function ossilateur(startX, startY)
{

  grid[startX][startY] = 1
  grid[startX][startY - 1] = 1
  grid[startX + 1][startY - 2] = 1
  grid[startX + 2][startY - 2] = 1
  grid[startX - 1][startY - 2] = 1
  grid[startX - 2][startY - 2] = 1
  grid[startX + 2][startY - 4] = 1
  grid[startX - 2][startY - 4] = 1
  grid[startX + 4][startY - 4] = 1
  grid[startX - 4][startY - 4] = 1
  grid[startX + 4][startY - 5] = 1
  grid[startX - 4][startY - 5] = 1
  grid[startX + 5][startY - 6] = 1
  grid[startX - 5][startY - 6] = 1
  grid[startX + 6][startY - 6] = 1
  grid[startX - 6][startY - 6] = 1
  grid[startX + 4][startY - 7] = 1
  grid[startX - 4][startY - 7] = 1
  grid[startX + 4][startY - 8] = 1
  grid[startX - 4][startY - 8] = 1
  grid[startX - 2][startY - 8] = 1
  grid[startX + 2][startY - 8] = 1
  grid[startX - 2][startY - 10] = 1
  grid[startX + 2][startY - 10] = 1
  grid[startX - 1][startY - 10] = 1
  grid[startX + 1][startY - 10] = 1
  grid[startX][startY - 11] = 1
  grid[startX][startY - 12] = 1

}

function ossilateurArrounded(startX, startY)
{

  grid[startX][startY] = 1
  grid[startX][startY - 1] = 1

  grid[startX + 1][startY - 1] = 1
  grid[startX - 1][startY - 1] = 1
  grid[startX + 1][startY - 2] = 1

  grid[startX + 2][startY - 2] = 1
  grid[startX - 1][startY - 2] = 1
  grid[startX - 2][startY - 2] = 1

  grid[startX - 3][startY - 2] = 1
  grid[startX + 3][startY - 2] = 1
  grid[startX - 3][startY - 3] = 1

  grid[startX + 3][startY - 3] = 1
  grid[startX - 3][startY - 4] = 1
  grid[startX + 3][startY - 4] = 1

  grid[startX - 4][startY - 4] = 1
  grid[startX + 4][startY - 4] = 1
  grid[startX - 4][startY - 5] = 1

  grid[startX + 4][startY - 5] = 1
  grid[startX - 5][startY - 5] = 1
  grid[startX + 5][startY - 5] = 1

  grid[startX - 4][startY - 6] = 1
  grid[startX + 4][startY - 6] = 1
  grid[startX - 3][startY - 6] = 1

  grid[startX + 3][startY - 6] = 1
  grid[startX - 3][startY - 7] = 1
  grid[startX + 3][startY - 7] = 1

  grid[startX - 3][startY - 8] = 1
  grid[startX + 3][startY - 8] = 1
  grid[startX - 2][startY - 8] = 1

  grid[startX + 2][startY - 8] = 1
  grid[startX - 1][startY - 8] = 1
  grid[startX + 1][startY - 8] = 1

  grid[startX - 1][startY - 9] = 1
  grid[startX + 1][startY - 9] = 1

  grid[startX][startY - 9] = 1
  grid[startX][startY - 10] = 1

  grid[startX + 4][startY] = 1
  grid[startX + 4][startY - 1] = 1
  grid[startX + 5][startY] = 1
  grid[startX + 5][startY - 1] = 1

  grid[startX - 4][startY] = 1
  grid[startX - 4][startY - 1] = 1
  grid[startX - 5][startY] = 1
  grid[startX - 5][startY - 1] = 1

  grid[startX + 4][startY - 10] = 1
  grid[startX + 4][startY - 9] = 1
  grid[startX + 5][startY - 10] = 1
  grid[startX + 5][startY - 9] = 1

  grid[startX - 4][startY - 10] = 1
  grid[startX - 4][startY - 9] = 1
  grid[startX - 5][startY - 10] = 1
  grid[startX - 5][startY - 9] = 1

}

function cross(startX, startY)
{
  var startg = startX - 3

  grid[startX][startY] = 1
  grid[startX][startY - 1] = 1
  grid[startX][startY - 2] = 1

  grid[startX - 1][startY - 2] = 1
  grid[startX + 1][startY] = 1
  grid[startX + 2][startY] = 1

  grid[startX + 2][startY + 1] = 1
  grid[startX + 2][startY + 2] = 1
  grid[startX + 2][startY + 3] = 1

  grid[startX + 1][startY + 3] = 1
  grid[startX][startY + 3] = 1
  grid[startX][startY + 4] = 1

  grid[startX][startY + 5] = 1
  grid[startX - 1][startY + 5] = 1

  grid[startg][startY] = 1
  grid[startg][startY - 1] = 1
  grid[startg][startY - 2] = 1

  grid[startg + 1][startY - 2] = 1
  grid[startg - 1][startY] = 1
  grid[startg - 2][startY] = 1

  grid[startg - 2][startY + 1] = 1
  grid[startg - 2][startY + 2] = 1
  grid[startg - 2][startY + 3] = 1

  grid[startg - 1][startY + 3] = 1
  grid[startg][startY + 3] = 1
  grid[startg][startY + 4] = 1

  grid[startg][startY + 5] = 1
  grid[startg + 1][startY + 5] = 1

}

function diagonale(startX, startY)
{

  grid[startX][startY] = 1
  grid[startX + 1][startY + 1] = 1
  grid[startX][startY + 2] = 1

  grid[startX - 1][startY + 1] = 1
  grid[startX - 1][startY + 2] = 1
  grid[startX - 2][startY + 1] = 1

  grid[startX - 3][startY + 2] = 1
  grid[startX - 3][startY + 3] = 1
  grid[startX - 3][startY + 4] = 1

  grid[startX - 4][startY + 4] = 1

  grid[startX][startY - 1] = 1
  grid[startX - 1][startY - 2] = 1
  grid[startX][startY - 3] = 1

  grid[startX + 1][startY - 2] = 1
  grid[startX + 1][startY - 3] = 1
  grid[startX + 2][startY - 2] = 1

  grid[startX + 3][startY - 3] = 1
  grid[startX + 3][startY - 4] = 1

  grid[startX + 3][startY - 5] = 1
  grid[startX + 4][startY - 5] = 1

}

function clock(startX, startY)
{

  grid[startX + 1][startY] = 1
  grid[startX + 2][startY] = 1
  grid[startX + 3][startY] = 1
  grid[startX + 4][startY] = 1

  grid[startX][startY + 1] = 1
  grid[startX][startY + 2] = 1
  grid[startX][startY + 3] = 1
  grid[startX][startY + 4] = 1

  grid[startX + 1][startY + 5] = 1
  grid[startX + 2][startY + 5] = 1
  grid[startX + 3][startY + 5] = 1
  grid[startX + 4][startY + 5] = 1

  grid[startX + 5][startY + 1] = 1
  grid[startX + 5][startY + 2] = 1
  grid[startX + 5][startY + 3] = 1
  grid[startX + 5][startY + 4] = 1

  grid[startX + 1][startY + 7] = 1
  grid[startX + 1][startY + 8] = 1
  grid[startX + 2][startY + 7] = 1
  grid[startX + 2][startY + 8] = 1

  grid[startX + 3][startY - 2] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 4][startY - 2] = 1
  grid[startX + 4][startY - 3] = 1

  grid[startX - 2][startY + 2] = 1
  grid[startX - 3][startY + 2] = 1
  grid[startX - 2][startY + 1] = 1
  grid[startX - 3][startY + 1] = 1

  grid[startX + 7][startY + 3] = 1
  grid[startX + 7][startY + 4] = 1
  grid[startX + 8][startY + 3] = 1
  grid[startX + 8][startY + 4] = 1

  grid[startX + 2][startY + 4] = 1
  grid[startX + 3][startY + 3] = 1
  grid[startX + 3][startY + 2] = 1

}

function clockBis(startX, startY)
{

  grid[startX + 1][startY] = 1
  grid[startX + 2][startY] = 1
  grid[startX + 3][startY] = 1
  grid[startX + 4][startY] = 1

  grid[startX][startY + 1] = 1
  grid[startX][startY + 2] = 1
  grid[startX][startY + 3] = 1
  grid[startX][startY + 4] = 1

  grid[startX + 1][startY + 5] = 1
  grid[startX + 2][startY + 5] = 1
  grid[startX + 3][startY + 5] = 1
  grid[startX + 4][startY + 5] = 1

  grid[startX + 5][startY + 1] = 1
  grid[startX + 5][startY + 2] = 1
  grid[startX + 5][startY + 3] = 1
  grid[startX + 5][startY + 4] = 1

  grid[startX + 1][startY + 7] = 1
  grid[startX + 1][startY + 8] = 1
  grid[startX + 2][startY + 7] = 1
  grid[startX + 2][startY + 8] = 1

  grid[startX + 3][startY - 2] = 1
  grid[startX + 3][startY - 3] = 1
  grid[startX + 4][startY - 2] = 1
  grid[startX + 4][startY - 3] = 1

  grid[startX - 2][startY + 2] = 1
  grid[startX - 3][startY + 2] = 1
  grid[startX - 2][startY + 1] = 1
  grid[startX - 3][startY + 1] = 1

  grid[startX + 7][startY + 3] = 1
  grid[startX + 7][startY + 4] = 1
  grid[startX + 8][startY + 3] = 1
  grid[startX + 8][startY + 4] = 1

  grid[startX + 1][startY + 2] = 1
  grid[startX + 2][startY + 3] = 1
  grid[startX + 3][startY + 1] = 1

}

function octogone(startX, startY)
{
  var startr = startY + 3
  var startl = startX + 3

  grid[startX][startY + 1] = 1
  grid[startX + 1][startY] = 1
  grid[startX + 1][startY + 2] = 1
  grid[startX + 2][startY + 1] = 1

  grid[startl][startY + 1] = 1
  grid[startl + 1][startY] = 1
  grid[startl + 1][startY + 2] = 1
  grid[startl + 2][startY + 1] = 1

  grid[startX][startr + 1] = 1
  grid[startX + 1][startr] = 1
  grid[startX + 1][startr + 2] = 1
  grid[startX + 2][startr + 1] = 1

  grid[startl][startr + 1] = 1
  grid[startl + 1][startr] = 1
  grid[startl + 1][startr + 2] = 1
  grid[startl + 2][startr + 1] = 1

}

function fountain(startX, startY)
{

  grid[startX][startY] = 1
  grid[startX + 1][startY] = 1

  grid[startX - 2][startY + 1] = 1
  grid[startX + 3][startY + 1] = 1
  grid[startX - 2][startY + 2] = 1
  grid[startX + 3][startY + 2] = 1
  grid[startX - 2][startY + 3] = 1
  grid[startX + 3][startY + 3] = 1
  grid[startX - 1][startY + 4] = 1
  grid[startX + 2][startY + 4] = 1
  grid[startX - 1][startY + 5] = 1
  grid[startX + 2][startY + 5] = 1
  grid[startX - 2][startY + 6] = 1
  grid[startX + 3][startY + 6] = 1
  grid[startX - 3][startY + 6] = 1
  grid[startX + 4][startY + 6] = 1
  grid[startX - 3][startY + 5] = 1
  grid[startX + 4][startY + 5] = 1

}

function galaxy(startX, startY)
{

  grid[startX][startY + 3] = 1
  grid[startX][startY + 4] = 1
  grid[startX + 1][startY + 3] = 1
  grid[startX + 1][startY + 4] = 1

  grid[startX][startY - 3] = 1
  grid[startX][startY - 4] = 1
  grid[startX - 1][startY - 3] = 1
  grid[startX - 1][startY - 4] = 1

  grid[startX - 3][startY] = 1
  grid[startX - 4][startY] = 1
  grid[startX - 3][startY + 1] = 1
  grid[startX - 4][startY + 1] = 1

  grid[startX + 3][startY] = 1
  grid[startX + 4][startY] = 1
  grid[startX + 3][startY - 1] = 1
  grid[startX + 4][startY - 1] = 1

  grid[startX + 3][startY + 3] = 1
  grid[startX + 3][startY + 4] = 1
  grid[startX + 4][startY + 3] = 1
  grid[startX + 4][startY + 2] = 1

  grid[startX - 3][startY + 3] = 1
  grid[startX - 3][startY + 4] = 1
  grid[startX - 4][startY + 3] = 1
  grid[startX - 2][startY + 4] = 1

  grid[startX + 3][startY - 3] = 1
  grid[startX + 3][startY - 4] = 1
  grid[startX + 4][startY - 3] = 1
  grid[startX + 2][startY - 4] = 1

  grid[startX - 3][startY - 3] = 1
  grid[startX - 3][startY - 4] = 1
  grid[startX - 4][startY - 3] = 1
  grid[startX - 4][startY - 2] = 1

}