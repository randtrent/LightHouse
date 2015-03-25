#pragma strict

/*
  Level Markers Selection Process for LightHouse.

  Developed by Trent Rand, December 19th, 2014.

  Current Beta as of December 19th, 2014.
*/

	var player : GameObject;
	var scene : float;
	
function Start () {

}

function Update () {
for (var touch : Touch in Input.touches){
  		
  		if (Input.touchCount > 0 && touch.phase == TouchPhase.Began) {
  			var startPoint = Camera.main.ScreenToWorldPoint(touch.position);
  		}

	Application.LoadLevel(scene);
}
}