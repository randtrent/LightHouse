#pragma strict

/*
  End of Level Script for LightHouse.
  To be played once a player sucessfully completes a level.

  Attach this script to Goal Collider.

  Developed by Trent Rand, December 19th, 2014.

  Current Beta as of December 19th, 2014.
*/

	var player : GameObject;

function Start () {

}

function OnTriggerEnter (player : Collider) {

  winLevel();

}

function winLevel () {

  Application.LoadLevel(0);

}