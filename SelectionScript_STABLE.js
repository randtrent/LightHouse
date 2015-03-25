#pragma strict

/*
  Level Markers Selection Process for LightHouse.

  Developed by Trent Rand, December 19th, 2014.

  Current Beta as of December 19th, 2014.
*/

	var player : GameObject;
	var beacon : GameObject;
	var scene : float;
	
function Start () {

}

function OnTriggerStay (player : Collider) {
	
	for(var touch : Touch in Input.touches){

      if(Input.touchCount == 1) {
      	var ray = Camera.main.ScreenPointToRay(touch.position);
      	var hit : RaycastHit;

		    if (Physics.Raycast (ray, hit, 100)) {
        		if (hit.collider == beacon || hit.collider == player) {
					Application.LoadLevel(scene);
				}
			}
		}
	}
}